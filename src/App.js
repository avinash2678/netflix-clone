import React from 'react';
import Row from './Row';
import './App.css';
import Requests from './request'; 
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
       <Nav/>
       <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchURL={Requests.fetchNetflixOriginals} isLarge="true" />
      <Row title="Trending Now" fetchURL={Requests.fetchTrending} />
      <Row title="Top rated" fetchURL={Requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={Requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={Requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={Requests.fetchHorrorMovies} />
      <Row title="Romantic Movies" fetchURL={Requests.fetchRomanceMovies} />
      <Row title="Documentries" fetchURL={Requests.fetchDocumentries} />
    </div>
  );
}

export default App;
