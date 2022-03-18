import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import img from '../assets/images/meal-icon.png';

function Header() {
    let navigate = useNavigate();
    const style = {
        width: "150px",
        borderRadius: "15px",
        backgroundColor: "#e1e7f0"
    };
    const goHome = () => {
        navigate('/dashboard');
    }
    const goCateg = () => {
        navigate('/category');
    }
    const goPlace = () => {
        navigate('/place');
    }
    const goIng = () => {
        navigate('/ingredient');
    }
    return (
        <div style={{ backgroundColor: 'black', width: '100%', height: '10vh', display: 'flex', alignItems: 'right' }}>
            <img
                style={{ width: '80px' }}
                src={img}
            />
            <Button className="Header-Button" style={style} onClick={goHome}>Home</Button>
            <Button style={style} onClick={goCateg}>Category</Button>
            <Button style={style} onClick={goPlace}>Place</Button>
            <Button style={style} onClick={goIng}>Ingridient</Button>
        </div>
    )
}

export default Header
