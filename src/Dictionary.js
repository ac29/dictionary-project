import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary (){
let [keyword, setkeyword]= useState ("");
let [results, setResults]= useState (null);

function handleResponse(response) {
    setResults (response.data[0]);
    console.log (response.data[0]);
}

function search(event){
    event.preventDefault();
//api documentation:https://dictionaryapi.dev
    let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
}



function handleKeywordChange (event){
     setkeyword(event.target.value);
}

    return (
        <div className = "Dictionary">
            <form onSubmit={search}>
                <input type = "search" onChange = {handleKeywordChange}/>
            </form>
            <Results results = {results}/>
        </div>
        );
}
