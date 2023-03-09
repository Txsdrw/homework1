import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    console.log('App rendering')
    return (
        <div>
            <PageTitle/>
            Article 1
            <Rating value={3}/>
            <Accordion title={'title1'}/>
            <Accordion title={'title2'}/>
            Article 2
            <Rating value={4}/>
            <Rating value={1}/>
            <Rating value={5}/>

        </div>
    );
}

function PageTitle() {
    console.log('PageTitle rendering')

    return (
        <h1>Hello APP</h1>
    )
}


export default App;
