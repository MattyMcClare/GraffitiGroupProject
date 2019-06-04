import React from 'react';
import ArtInfoWithName from './ArtInfoWithName';
import { Link } from 'react-router-dom';

const ArtBox = (props) => {
    return (
        <div className="art-box">
            <Link to="/art">More</Link>
            <div className="art-box-image">
                <img src={props.img} alt="default" height="200" width="200"></img>
            </div>
            <div className="art-box-info">
                <ArtInfoWithName
                    handle={props.handle}
                    signature={props.signature}
                    location={props.location}
                >
                </ArtInfoWithName>
            </div>
        </div>
    )
}


export default ArtBox;