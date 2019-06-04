import React from 'react';
import ArtInfoWithName from './ArtInfoWithName';
import ArtView from './artView/ArtView'

const ArtBox = (props) => {
    return (
        <div className="art-box">
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
                <ArtView
                    img={props.img}
                    handle={props.handle}
                    location={props.location}
                />
            </div>
        </div>
    )

}

export default ArtBox;