import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


function Row(props){
    const baseURL="https://image.tmdb.org/t/p/original/";
    const [movies,setMovies]=useState([]);
    const [trailerUrl,setTrailerUrl]=useState(false);
    useEffect(()=>{
        axios.get(props.fetchURL)
        .then((response)=>{
            setMovies(response.data.results);
        });
        
        },[props.fetchURL]);

        const opts={
            height:"390",
            width:"100%",
            playerVars:{
                autoplay:1,
            },

        };

        const handleClick=(movie)=>{
            if(trailerUrl){
                setTrailerUrl('');
            }else{
                movieTrailer(movie?.name || "")
                .then((url)=>{
                    const urlParams=new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                  
                })
                .catch((error)=>console.log(error));

            }


        }
        
return(

    <div className="row">
    <h2 style={{color: "#ffffff"}}>{props.title}</h2>

    <div className="row__posters">
    {
        movies.map((movie,index)=>(
            
            < img className={`row__poster ${props.isLarge && "row__posterLarge"}`} 
            key={movie.id} onClick={()=>handleClick(movie)}
            src={`${baseURL}${props.isLarge ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
            )
        )
    }
    </div>
    
      {trailerUrl &&  <YouTube videoId={trailerUrl} opts={opts} />}

    </div>
);
}

export default Row;