import React from 'react';
import { Link } from 'react-router-dom'


const NavBar = () => {
    const num = Math.floor(Math.random() * 10)
    return (
        <div className = 'navBar'>
             <Link to = '/'>
                <h1>Home</h1>
            </Link>
            <Link to = '/dog/random'>
                <h1>Dog</h1>
            </Link>
            <Link to = {`/dog/random/${num}`} >
                <h1>More Dogs</h1>
            </Link>
        </div>
    );
};

export default NavBar;