from flask import Flask, request, jsonify
import vertexai
from vertexai.generative_models import GenerativeModel
import pandas as pd
import requests
import json
from flask_cors import CORS, cross_origin
import random


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# Load the CSV file
df = pd.read_csv('ConsumerData.csv')

# Identify the columns that contain "Y" in any of the rows
columns_with_Y = df.columns[df.isin(['Y']).any()]

# Create a new DataFrame with only those columns
df_filtered = df[columns_with_Y]

# Get the column names from df_filtered
filtered_column_names = df_filtered.columns.tolist()

str_columns = ",".join(filtered_column_names)

project_id = "mquery-424422"

first_names = ['James', 'Michael', 'Robert', 'John', 'David', 'William', 'Richard', 'Joseph', 'Thomas', 'Christopher', 'Chris', 'Jack', 'Daniel', 'Mary', 'Patricia', 'Jennifer', 'Linda', 'Jen', 'Jan', 'Barbara', 'Jessica']
last_names = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Lopez', 'Wilson']

vertexai.init(project=project_id, location="us-central1")

model = GenerativeModel(model_name="gemini-1.5-flash-preview-0514")

@app.route('/get-keywords', methods=['POST'])
@cross_origin()
def get_keywords():
    data = request.json
    print(data)
    query_sentence = data['query']    
    #try:
    response = model.generate_content(
        "Query: " + query_sentence + "\nKeywords: " + str_columns + 
        "\nRead the Query and Keywords above. Read the query and Identify and respond with only the 3 most relevant keywords only using the response format: keyword1,keyword2,keyword3"
    )
    categories = response.text.strip("\n").replace(" ", "").split(',')
    print(categories)
    bool_df = df[categories] == 'Y'
    #except:
    #    categories = ["Charitable", "Health", "Political"]
    #    bool_df = df[categories] == 'Y'
    bool_sum = bool_df.sum(axis=1)
    criteria = bool_sum >= 2
    filtered_df = df[criteria].copy()
    filtered_df["yes_count"] = bool_sum[criteria]
    filtered_df = filtered_df.sort_values(by="yes_count", ascending=False)
    #selected_columns = ['Address', 'City', 'State', 'Zipcode', 'MaritalStatus', 'NumberOfChildren', 'HouseholdSize', 'NetWorth']
    selected_columns = ['MAK', 'Address', 'MaritalStatus', 'NumberOfChildren', 'HouseholdSize', 'NetWorth']
    items = filtered_df[selected_columns].iloc[:5].values.tolist()
    filtered_df.drop(columns=["yes_count"])
    # Select the desired columns
    #items = filtered_df.loc[:3, selected_columns].values.tolist()

    print(len(items))

    for n in items:
        url = "https://property.melissadata.net/v4/WEB/LookupProperty/"
        url += '?' + 't=1234&' + 'id=o-qif2_kih0D2kSy2K3XwK**nSAcwXpxhQ0PC2lXxuDAZ-**&format=json&mak='+str(n[0])

        response = requests.get(url)
        if response.status_code == 200:
            #print(response.json())
            data = response.json()
            #print(data)
            #primary_owner_full_name = "Bob Smith"
            if "Records" in data.keys():
                primary_owner_full_name = data['Records'][0]['PrimaryOwner']['Name1Full']
            else:
                primary_owner_full_name = f"{first_names[random.randint(0, len(first_names)-1)]} {last_names[random.randint(0, len(last_names)-1)]}"
        n.append(primary_owner_full_name)

            



    for i in range(len(items)):
        for j in range(len(selected_columns)):
            if selected_columns[j] == "MaritalStatus":
                marital_status = items[i][j]
                if marital_status == "M" or marital_status == "A":
                    items[i][j] = "Married"
                else:
                    items[i][j] = "Single"
            elif selected_columns[j] == "NetWorth":
                net_worth = items[i][j]
                net_worth_ranges = ["<$0", "$1 - $4,999", "$5,000 - $9,999", "$10,000 - $24,999", "$25,000 - $49,999", "$50,000 - $99,999", "$100,000 - $249,999", "$250,000 - $499,999", "$500,000+"]
                items[i][j] = net_worth_ranges[int(net_worth-1)]

    selected_columns.append("Full Name")
    for i, item in enumerate(items):
        item_dict = {}
        for j, value in enumerate(item):
            item_dict[selected_columns[j]] = value
        items[i] = item_dict
    print (items)


    return jsonify({
        'keywords': categories,
        'items': items
    })

if __name__ == '__main__':
    app.run(debug=True)