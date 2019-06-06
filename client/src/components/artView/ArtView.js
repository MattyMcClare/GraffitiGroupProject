import React from "react";
import ArtViewGrid from './ArtViewGrid'
import ArtGrid from '../ArtGrid'
// import TimeAgo from 'react-timeago'
import dateString from '../../helpers/dateString'


const ArtView = (props) => {

    if (props.selectedArtView === null) {
        return null;
    }

    const artByArtist = props.selectedArtView._embedded.artist.art;

    console.log(props.selectedArtView)
    return (
        <div className="art-view">
            <img className = "full-width" src={props.selectedArtView.imageUrl} alt="default"></img>
            <div className = "art-flex">
              <div>
                <img className = "artist-tag" src={props.selectedArtView._embedded.artist.signature} alt="signature"></img>
                <div>
                  <h1>Artist: {props.selectedArtView._embedded.artist.handle}</h1>
                  <p>{props.selectedArtView._embedded.location.art.location.stringLocation}</p>
                </div>
              </div>
              <p>{dateString(props.selectedArtView.dateUploaded)}</p>
            </div>
            <div className="art-body">
            <h2>Style: {props.selectedArtView.style}</h2>
            <h4><em>{props.selectedArtView.description}</em></h4>
            <p>Lorem ipsum dolor sit amet, idque molestiae ut vel. Quas ignota albucius ut sed, nec id utinam fabellas percipitur, ei nec persius tacimates praesent. Ipsum error delenit sed et, et mea sumo quas, sed et apeirian pertinacia. Nam lorem ceteros te, vis nostrum recteque eu, dicunt corpora est at. Per augue efficiendi cu.<br/><br/>Per ut vero dissentiunt. Sed te sumo fabulas accommodare. Cu vocent mandamus pericula nam, eu dolore facilisi vulputate est. Et ius brute numquam, discere omittantur eu per, facer ludus pro no.</p>
            </div>
            <h2><br/>More works by {props.selectedArtView._embedded.artist.handle}</h2>
            <ArtGrid
              allArt={artByArtist}
              onSelectArt={props.onSelectArt}
            />
        </div>
    );

}

export default ArtView;
