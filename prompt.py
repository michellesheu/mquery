import vertexai
from vertexai.generative_models import GenerativeModel
import pandas as pd

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

vertexai.init(project=project_id, location="us-central1")

model = GenerativeModel(model_name="gemini-1.5-flash-preview-0514")

query_sentence = "I am in a Law Firm."

response = model.generate_content(
    "Query: "+query_sentence+"\nKeywords: "+str_columns+"\nRead the Query and Keywords above. Read the query and Identify and respond with only the 3 most relevant keywords only using the response format: keyword1,keyword2,keyword3"
    #"Query: "+query_sentence+"\nKeywords: "+str_columns+"\nRead the Query and Keywords above. rank the keywords in regard to how relevant they are to the query and repond with the top 3 keywords"    
    #"Read the text" + "Text: " +query_sentence + "and identify the three most relevant keywords from the provided list of keywords written. Only format for your response: like this: keyword, keyword, keyword.\n Keywords: "+str_columns
    #"Using the keywords" + str_columns + " read the text starting on the next line and give a ranking of how relevant each keyword is to the text from 0 to 1 without explanations.\n" + query_sentence
    # "What's a good name for a flower shop that specializes in selling bouquets of dried flowers?"
)

print(response.text)

categories = response.text.strip("\n").replace(" ", "").split(',')

print(categories)
bool_df = df[categories] == 'Y'
bool_sum = bool_df.sum(axis=1)
criteria = bool_sum >= 2
filtered_df = df[criteria]


# marital status, NumberOfChildren, HouseholdSize, Networth
#print(filtered_df.iloc[:15, 3:6])
# Define the list of columns you want to select
selected_columns = ['Address','City', 'State', 'Zipcode', 'MaritalStatus', 'NumberOfChildren', 'HouseholdSize', 'NetWorth']

items = filtered_df.loc[:15, selected_columns].values.tolist()
for n in items:
    print(n)

#, filtered_df.iloc[:15, 3:6]




