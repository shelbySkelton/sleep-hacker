import * as React from 'react';
import ReactDOM from "react-dom/client";
import Container from '@mui/material/Container';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { SetAhead, Home, SetBack, Header } from "./Components"

const App = () => {



    return (
        <section id="app-container">

            <Router>
                {/* <Container sx={{ width: 500 }}>
                </Container> */}
                <Header/>
                <Routes>
                    <Route path="/set-ahead"
                        element={<SetAhead />} />
                    <Route path="/"
                        element={<Home />} />
                    <Route path="/set-back"
                        element={<SetBack />} />
                </Routes>

            </Router>
        </section>
    )
}

const appElement = document.getElementById('app');
const root = ReactDOM.createRoot(appElement)
root.render(<App />)