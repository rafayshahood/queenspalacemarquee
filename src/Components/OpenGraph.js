import React from 'react';
import { Helmet } from 'react-helmet';


function OpenGraph(props) {
  return (
    <Helmet>
    <meta property="og:title" content="QueensPalaceMarquee" />
    <meta property="og:description" content="Wedding Venue with a capactiy of 1200+ persons. Biggest Car parking in the city. Located Near Gutwala, East Cnala Road, Fasialabad, Pakistan" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://rafayshahood.github.io/queenspalacemarquee/" />
    <meta property="og:image" content={props.img} />

    <title>QueensPalaceMarquee</title>
    <meta name="description" content="Our wedding venue boasts a spacious capacity of 1200+ guests, making it perfect for large-scale events. With the largest car parking facility in the city, your guests can conveniently park their vehicles. Our venue is located near Gutwala on East Cnala Road in Faisalabad, Pakistan, providing easy accessibility to your guests. " />
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet"/>

  </Helmet>
  );
}

export default OpenGraph;
