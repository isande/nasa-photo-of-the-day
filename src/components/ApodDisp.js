import React, { useState, useEffect } from "react";
import axios from "axios";
import ApodCard from './ApodCard';

function ApodDisp() {
    const [apod, setApod] = useState([]);
    
    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=8vd83tKw8BbnLcee0Ru2iPR3Wv0gleXtafnrO60o')
            .then(response => {
                console.log(response.data);
                setApod(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <ApodCard key={apod.key}
                title={apod.title}
                date={apod.date}
                caption={apod.explanation}
                url={apod.url}
                copyright={apod.copyright}
                media={apod.media_type}
            />
        </div>
    )
}

export default ApodDisp;