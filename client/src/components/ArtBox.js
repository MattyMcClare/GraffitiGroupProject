import React from 'react';
import { Link } from 'react-router-dom';

const ArtBox = (props) => {
    return (
        <div className="art-box">
            <Link to="/art"></Link>
            <div className="art-box-image">
                <img src={props.img} alt="default" height="200" width="200"></img>
                <p>{props.location}</p>
                <p>{props.date}</p>
            </div>
        </div>
    )
}


export default ArtBox;