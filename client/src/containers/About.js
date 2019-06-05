import React from 'react';
import styleTag from "../img/style-tag.jpg";
import styleThrowUp from "../img/style-throwup.jpg";
import styleBlockBuster from "../img/style-blockbuster.jpg";
import styleWildStyle from "../img/style-wildstyle.jpg";
import styleHeaven from "../img/style-heaven.jpg";
import styleStencil from "../img/style-stencil.jpg";
import stylePasteUp from "../img/style-pasteup.jpg";
import styleSlap from "../img/style-slap.jpg";
import stylePiece from "../img/style-piece.jpg";


const About = (props) => {
  return (
    <div>
      <h1>About Tags</h1>
      <p>Tags is a project to recognize and promote Scottish Street art. From the Glasgow street art trail, to the murals of small Fife mining towns, to abandoned train tunnels in Edinburgh, Scotland has shortage of incredible art to be enjoyed and shared with the world. We've currated the very best works, and allow you to search by location with specific instructions on how to find them, because street art shouldn't only be experienced through a screen.</p><p>It was designed and built in a one week sprint by Codeclan Students David Boyle, Eric Cross, Rob Marshall, Mateusz Stanczak, and Jon Zarecki using Javascript and Java with the React and Spring frameworks.</p>
      <div className="art-styles">
      <h1><br/>Street Art Styles</h1>
      <p>Scottish street art styles were blatantly copied from the<a className = "link" href="https://graffitocanberra.wordpress.com/styles-of-graffiti/">Graffiti to Canberra</a>street art blog.</p>
      <h2 id="tag" >Tag</h2>
      <img src = {styleTag} alt="tag street art style"/>
      <p>Tagging is the easiest and simplest style of graffiti; it includes one colour and the artist’s name or identifier. It is considered disrespectful to write a tag over another’s artists’s tag or work.</p>
      <h2 id="throwup" >ThrowUp</h2>
      <img src = {styleThrowUp} alt="throwup street art style"/>
      <p>A throw-up is like a more complicated tag. It usually has two or more colours, and bubble-style lettering. A throw-up can be done quickly and repeatedly, just like a tag.</p>
      <h2 id="blockbuster" >BlockBuster</h2>
      <img src = {styleBlockBuster} alt="blockbuster street art style"/>
      <p>A blockbuster is like a massive throw-up, usually in blocky letters. Blockbusters are used to cover a large area in a small amount of time. Blockbusters can be painted with rollers, which makes them faster and easier to do.</p>
      <h2 id="wildstyle" >WildStyle</h2>
      <img src = {styleWildStyle} alt="wildstyle street art style"/>
      <p>Wildstyle is an elaborate version of a throw-up and is particularly hard to read. Wildstyle often consists of arrows, curves, spikes and other things that non graffiti artists might not understand.</p>
      <h2 id="heaven" >Heaven</h2>
      <img src = {styleHeaven} alt="heaven street art style"/>
      <p>A heaven is a tag or artwork in a place that is extremely difficult to get to. An artist who manages to put one up gains a lot of respect from other artists.</p>
      <h2 id="stencil" >Stencil</h2>
      <img src = {styleStencil} alt="stencil street art style"/>
      <p>A stencil is an easy (some say ‘lazy’) way to put up detailed pieces. By spraying over a stencil, you can produce a more detailed piece than by doing it free hand. And it’s also repeatable.</p>
      <h2 id="pasteup">PasteUp</h2>
      <img src = {stylePasteUp} alt="pasteup street art style"/>
      <p>A poster is a quick and easy way to put up pieces. You just make the piece at home then paste it up where you want.</p>
      <h2 id="slap">Slap</h2>
      <img src = {styleSlap} alt="slap street art style"/>
      <p>A sticker is like a downsized poster, and just as easy to execute. Many stickers are simply tags on postage labels, but sometimes they are more elaborate.</p>
      <h2 id="piece">Piece</h2>
      <img src = {stylePiece} alt="piece street art style"/>
      <p>A piece (short for masterpiece) is a picture that has been painted free hand. They contains at least three colours and take longer to paint. A piece in an obvious place will gain the artist respect from other artists because standing in an obvious place painting on walls where graffiti is illegal is a great risk.</p>
      </div>
    </div>
  );
}

export default About;
