import React, { useState } from 'react';
import MainPageLayout from '../Components/MainPageLayout';
import { apiGet } from '../misc/config';

const Home = () => {
    const [input, setInput] = useState('');
    const [results, setResults] = useState(null)

    const onSearch = () => {

        //new version of fetching an api 

        apiGet(`/search/shows?q=${input}`)
            .then(result => {
                setResults(result);
                console.log(result);
            });

        // fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
        //     .then(r => r.json())
        //     .then(result => {
        //         setResults(result);
        //         console.log(result);
        //     });
    };

    const onInputChange = ev => {
        setInput(ev.target.value);
    };

    const onKeyDown = ev => {
        if (ev.keyCode === 13) {
            onSearch();
        }
    };


    const renderResults = () => {

        //case number 1 rubbish inout values
        if (results && results.length === 0) {
            return <div>no result</div>

        }


        //valid and main condition 

        if (results && results.length > 0) {
            return <div>{results.map((item) => <div key={item.show.id}>{item.show.name}</div>)}</div>
        }

        return null;
    }

    return (
        <MainPageLayout>
            <input
                type="text"
                onChange={onInputChange}
                onKeyDown={onKeyDown}
                value={input}
            />
            <button type="button" onClick={onSearch}>
                Search
            </button>

            {
                renderResults()
            }
        </MainPageLayout>
    );
};

export default Home;
