import React from 'react';
import '../App.css';

function Home(){
    return(
        <>
        <h1>Walk a Dog</h1>
        <button variant="primary" onClick={() => {window.location.href="/Test"}}>Profile</button> 
        </>
    );
}

export default Home;