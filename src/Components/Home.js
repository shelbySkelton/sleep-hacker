import * as React from 'react';
import ReactDOM from "react-dom/client";
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router';



const Home = () => {

    const [forwardMode, setForwardMode] = React.useState(false)
    const [backwardMode, setBackwardMode] = React.useState(false)

    const navigate = useNavigate()



    return (
        <section id="app-container">

        <Container sx={{ width: 650 }}>
            <p>I want to set my circadian clock </p>
            <section id='home-buttons'>
                <button
                    onClick={(evt) => navigate("/set-ahead")}
                >FORWARD</button>
                <button
                    onClick={(evt) => navigate("/set-back")}
                >BACKWARD</button>
                <section>
                    <p id="about">Sleep Hacker is a quick and easy app that uses strategies suggested by Dr. Andrew Huberman
                        to deliver a guideline for adjusting your 24 hour sleep cycle.
                    </p>
                    <p>Input your normal waking time, how many hours you want to
                        advance or delay your cycle, and you'll find the critical 4 hour period
                        of time in your cycle when your circadian clock can be reset, and a list of
                        actionable items to trigger the reset- such as viewing bright light.
                    </p>
                    <p>Dr. Andrew Huberman is a professor of neurobiology and ophthalmology at Stanford School of Medicine,
                        and host of the Huberman Lab Podcast. </p>
                    <p>In a recent Huberman Lab episode, </p>
                    <a href='https://hubermanlab.com/sleep-toolkit-tools-for-optimizing-sleep-and-sleep-wake-timing/'>Sleep Toolkit: Tools for Optimizing Sleep & Sleepwake Timing</a>
                    <p> Dr. Huberman shares data-supported, zero-cost-to-consumer strategies
                        for improving your quality of sleep. Notably, how to quickly and effectively utilize your body's <b>Low Temperature Minimum (LTM) </b>
                        as a reference point to shift your natural 24 hour sleep cycle.
                    </p>

                    <p>Those preparing to encounter jetlag, or who engage in shift-work, are able to
                        combat the disruption in quality of sleep by initiating either a Phase Advance
                        or Phase Delay with the tools outlined in this toolkit.
                    </p>


                </section>
            </section>

        </Container>
        </section>

    )
}

export default Home;