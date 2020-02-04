import React from "react";
import "./ApodCard.css";

const ApodCard = (props) => {
    if (!props.url) return <h3>Loading...</h3>;

    const isImage = props.media === 'image';

    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.copyright}</h2>
            <p>{props.date}</p>
            {isImage && <img src={props.url} alt="NASA APOD"></img>}
            {!isImage && <iframe title="Apod Video" src={props.url}></iframe>}
            <p class="caption">{props.caption}</p>
        </div>
    );
}

export default ApodCard;