import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary (){
let [keyword, setkeyword]= useState ("");

function handleResponse(response) {
    console.log (response);
}

function search(event){
    event.preventDefault();
    alert (`searching for ${keyword} definition`);

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
        </div>
        );
}
