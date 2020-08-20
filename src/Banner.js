import React,{useState,useEffect} from 'react';
import axios from './axios';
import Requests from './request'; 
import './Banner.css';


function Banner(props){
    const baseURL="https://image.tmdb.org/t/p/original/";
    const [movies,setMovies]=useState([]);
    useEffect(()=>{
        axios.get(Requests.fetchNetflixOriginals)
        .then((response)=>{
            setMovies(response.data.results[Math.floor(Math.random() * response.data.results.length-1)]);
        });
        
        },[props.fetchURL]);

console.log(movies);

   return(
       <header className="banner"
       style={{
           backgroundSize: "cover",
           backgroundImage: `url(${baseURL}${movies?.backdrop_path})`,
           backgroundPosition: "center center",
       }}
       
        >
         <div className="banner__contents">
         <h1 className="banner__title">
         {movies?.title || movies?.name || movies?.original_name}
         </h1>
         <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
         </div>
        
         <h1 className="banner__description">{movies?.overview}</h1>
         
         </div>
         <div className="banner__fadeBottom"/>
       </header>
    );
}

export default Banner;