import React, { useState } from 'react';
import axios from 'axios';

const KeywordFetcher = () => {
    const [query, setQuery] = useState('');
    const [keywords, setKeywords] = useState([]);
    const [items, setItems] = useState([]);

    const fetchKeywords = async () => {
        try {
            const response = await axios.post('http://localhost:5000/get-keywords', { query });
            setKeywords(response.data.keywords);
            setItems(response.data.items);
        } catch (error) {
            console.error('Error fetching keywords:', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter your query"
            />
            <button onClick={fetchKeywords}>Get Keywords</button>
            <div>
                <h3>Keywords:</h3>
                <p>{keywords.join(', ')}</p>
                <h3>Filtered Items:</h3>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item.join(', ')}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default KeywordFetcher;
