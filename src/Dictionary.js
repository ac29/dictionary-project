import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary (props){
let [keyword, setkeyword]= useState (props.defaultKeyword);
let [results, setResults]= useState (null);
let [loaded, setLoaded]=useState (false);
let [photos, setPhotos] = useState(null);

function handleDictionaryResponse(response) {
    setResults (response.data[0]);
    console.log (response.data[0]);
}

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

function search (){
  //api documentation:https://dictionaryapi.dev
    let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);  

    let pexelsApiKey=
    `563492ad6f9170000100000167379337e9dc48ed89d26eb79b1c7dec`;
    let pexelsApiUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
}


function handleSubmit(event){
    event.preventDefault();
    search();
}

function handleKeywordChange (event){
     setkeyword(event.target.value);
}

function load(){
    setLoaded (true);
    search();
}

if (loaded){
return (
        <div className = "Dictionary">
            <section>
            <form onSubmit={handleSubmit} className="Form">
                <input 
                type = "search" 
                onChange = {handleKeywordChange} 
                defaultValue ={props.defaultKeyword}/>
            </form>
            <div className="hint">
               suggested words: sunset, wine, yoga...
            </div>
            </section>
            <section>
                <Results results = {results}/>
                <Photos photos = {photos}/>
            </section>   
        </div>
        );
} else {
load();
return "loading...";
}
    
}
