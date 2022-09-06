import * as React from 'react';
import ReactDOM from "react-dom/client";
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router';



const Header = () => {



    const navigate = useNavigate()



    return (
        <header>
            {
                window.location.pathname == '/' ? null :
                    <button
                        id="home-button"
                        onClick={(evt) => navigate("/")}
                    >Home</button>
            }
            <h1>SLEEP HACKER</h1>
        </header>


    )
}

export default Header;