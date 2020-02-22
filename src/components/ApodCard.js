import React from "react";
import styled from 'styled-components'

const ApodTitle = styled.h1`
    font-family: 'Yanone Kaffeesatz', sans-serif;
    font-size: 3rem;
`;

const ApodCaption = styled.p`
    padding: 1rem 6rem 2rem 6rem;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    line-height: 1.5;
    font-size: 1.2rem;
    letter-spacing: 1px;
`;

const ApodIframe = styled.iframe`
    width: 50rem;
    height: 30rem;
`;

const Author = styled.h2`
    font-family: 'Yanone Kaffeesatz', sans-serif;
`;

const ApodDate = styled.p`
    font-family: 'Yanone Kaffeesatz', sans-serif;
    line-height: 1.5;
    font-size: 1.2rem;
    letter-spacing: 1px;
`;



const ApodCard = (props) => {
    if (!props.url) return <h3>Loading...</h3>;

    const isImage = props.media === 'image';

    return (
        <div>
                <ApodTitle>{props.title}</ApodTitle>
                <Author>{props.copyright}</Author>
                <ApodDate>NASA's Astronomy Picture of the Date for: {props.date}</ApodDate>
                {isImage && <img src={props.url} alt="NASA APOD"></img>}
                {!isImage && <ApodIframe title="Apod Video" src={props.url}></ApodIframe>}
                <ApodCaption>{props.caption}</ApodCaption>

        </div>
    );
}

export default ApodCard;