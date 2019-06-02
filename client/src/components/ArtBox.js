import React from 'react';
import ArtInfoWithName from './ArtInfoWithName';


const ArtBox = ({ img, handle, signature, location }) => {
    return (
        <div className="art-box">
            <div className="art-box-image">
                <img src={img} alt="default" height="200" width="200"></img>
            </div>
            <div className="art-box-info">
                <ArtInfoWithName
                    handle={handle}
                    signature={signature}
                    location={location}
                >
                </ArtInfoWithName>
            </div>
        </div>
    )

}

export default ArtBox;