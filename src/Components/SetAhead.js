import moment, { min } from "moment";

import ReactDOM from "react-dom/client";
import * as React from 'react';
import dayjs from 'dayjs';
import { TextField, Box } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import Container from '@mui/material/Container';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import UpdateIcon from '@mui/icons-material/Update';
import LightModeIcon from '@mui/icons-material/LightMode';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import BreakfastDiningIcon from '@mui/icons-material/BreakfastDining';
import BlockIcon from '@mui/icons-material/Block';
import ComputerIcon from '@mui/icons-material/Computer';
import { FormControl, InputLabel, NativeSelect, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Divider } from "@mui/material";
import { useEffect } from "react";






const SetAhead = () => {

    const [value, setValue] = React.useState(dayjs());
    const [hour, setHour] = React.useState('')
    const [minute, setMinute] = React.useState('')
    const [LTM, setLTM] = React.useState('')
    const [hoursAhead, setHoursAhead] = React.useState(0)



    useEffect(() => {
        setLTM(moment(hour, 'hh').add(minute, 'minutes').format('hh:mm A'))

    }, [hour]);


    const handleChange = (event) => {
        setHoursAhead(event.target.value);
    };




    return (
        <section id="app-container">


            <div id='timepicker'>
                <section className="directions">
                    <h2>Generate a Phase Advance</h2>
                    <span className="steps">Step 1: </span>
                    <span className='directions-content'>Input your normal waking time</span>
                    <p className="sub-content">(Average your last 3-5 days)</p>
                </section>
                <Container sx={{ width: 700 }} id='container'>
                    <LocalizationProvider
                        dateAdapter={AdapterDayjs}
                    >


                        <StaticTimePicker
                            displayStaticWrapperAs="mobile"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);

                            }}
                            renderInput={(params) => <TextField {...params} />}
                            componentsProps={{
                                actionBar: { actions: [""] }
                            }}
                        />
                    </LocalizationProvider><br></br>
                    <span className="steps">Step 2: </span>
                    <span className="directions-content">How much earlier do you want to fall asleep?</span>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        *Your circadian clock can be adjusted up to 3 hrs/day
                    </InputLabel>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>

                        <NativeSelect
                            onChange={handleChange}
                            inputProps={{
                                name: 'Hours',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option value={1}>1 hr</option>
                            <option value={2}>2 hrs</option>
                            <option value={3}>3 hrs</option>
                        </NativeSelect>
                    </FormControl>
                    <p></p>
                    <br></br>
                    <span className="steps">Step 3: </span>
                    <span className="directions-content">Find Your Phase Advance Schedule</span>
                    {LTM === 'Invalid date' ? null :

                        <div id='list-div'>
                            <Box sx={{ padding: '20px', borderRadius: '5ch', maxWidth: 500, bgcolor: 'background.paper' }}>
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <AccessAlarmIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={`${moment(value['$H'], 'hh').add(value['$m'], 'minutes').format('hh:mm A')} Normal Waking Time`} />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <MonitorHeartIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={`${LTM} LTM `} />
                                    </ListItem>
                                    <Divider />
                                    <ListSubheader component='div' id='subheader'></ListSubheader>
                                    <ListItem disablePadding
                                        sx={{
                                            color: 'red'
                                        }}
                                    >
                                        <ListItemIcon>
                                            <UpdateIcon
                                                sx={{ color: 'red' }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText primary="Try out the following listed behaviors between these times:" />
                                    </ListItem>
                                    <ListItem disablePadding
                                        sx={{
                                            color: 'red',
                                            fontSize: '18px'
                                        }}
                                    >
                                        <ListItemIcon>
                                        </ListItemIcon>
                                        <ListItemText primary={`${LTM} - ${moment(LTM, 'hh:mm A').add(4, 'hours').format('hh:mm A')} `} />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <LightModeIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Bright Light Exposure" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <DirectionsWalkIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={hoursAhead > 1 ? "Exercise" : "Exercise (optional)"} />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <BreakfastDiningIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={hoursAhead > 1 ? "Eat a Snack" : "Eat a Snack (optional)"} />
                                    </ListItem>
                                    {
                                        hoursAhead == 3 ?
                                            <ListItem disablePadding>
                                                <ListItemIcon>
                                                    <AcUnitIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Deliberate Cold Exposure ~ 5min" />
                                            </ListItem>
                                            : null
                                    }
                                    <ListItem disablePadding
                                        sx={{ color: 'lightgray' }}
                                    >
                                        <ListItemIcon>
                                            <BlockIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={`Try to avoid engaging in the above between ${moment(LTM, 'hh:mm A').subtract(4, 'hours').format('hh:mm A')} to ${LTM}`} />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <ComputerIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={<a href="https://hubermanlab.com/find-your-temperature-minimum-to-defeat-jetlag-shift-work-and-sleeplessness/">Find out more! </a>} />
                                    </ListItem>

                                </List>
                            </Box>
                        </div>

                    }
                    <div id='button-div'><button
                        hidden = { LTM === 'Invalid date' ? false : true }
                        onClick={(evt) => {
                            evt.preventDefault
                            setHour(value['$H'] - 2);
                            setMinute(value['$m']);
                        }}
                    >GO!
                    </button>
                    {
                            LTM === 'Invalid date' ? null :
                            <button
                                onClick={(evt) => {
                                    evt.preventDefault
                                    setHour('');
                                    setMinute('')
                                    setHoursAhead(0)
                                    setValue(dayjs())
                                }}
                            >
                                Reset
                            </button>
                        }
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default SetAhead;