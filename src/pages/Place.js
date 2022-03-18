import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Header from '../components/Header';
import bgimg from '../assets/images/meals.png';

function Place() {
    const [v, setV] = useState([]);
    const style = {
        position: "relative",
        display: "inline-block",
        width: "400px",
        color: "red"
    }
    let categ = [];
    let url = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
    axios.request(url).then((response) => {
        let temp = response.data.meals;
        temp.forEach(element => {
            categ.push(element.strArea);
        });
        setV(categ);
    })
    return (
        <div style={{ backgroundImage: `url(${bgimg})`, height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }}>
            <Header />
            <h1>Search By Place</h1>
            <Form.Label>Search By Place</Form.Label>
                <Form.Select style={style}>
                    {v.map(item => {
                        return (<option key={item} value={item}>{item}</option>);
                    })}
                </Form.Select>
                <Button>Search</Button>
        </div>
    )
}


export default Place