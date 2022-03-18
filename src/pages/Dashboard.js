import React, { useState } from 'react';
import {Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Header from '../components/Header';
import bgimg from '../assets/images/meals.png';

function Dashboard() {
    const [text, setText] = useState('');
    const onSelectionChange = (e) => {
        setText(e.target.value);
    }
    const handleSubmit = () => {
        let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`;
        axios.request(url).then((response) => {
            console.log("RESI", response.data.meals);
        })
    }
    return (
        <div style={{ backgroundImage: `url(${bgimg})`, height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }}>
            <Header />
            <h1>Search By Name</h1>
            <Form.Label>Search By Name</Form.Label>
            <Form.Control type="text" placeholder="Arrabiata" defaultValue={text} onChange={(e) => onSelectionChange(e)} />
            <Button onClick={handleSubmit}>Search</Button>
        </div>
    )
}


export default Dashboard