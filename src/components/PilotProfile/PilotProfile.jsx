import Hangar from "../Hangar/Hangar";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import { SettingsSystemDaydreamRounded } from "@mui/icons-material";


function PilotProfile() {

    const user = useSelector((store) => store.user);
    const [airport, setAirport] = useState('');
    const [temp, setTemp] = useState('N/A');
    const [baro, setBaro] = useState('N/A');
    const [icao, setIcao] = useState('N/A');
    const [visi, setVisi] = useState('N/A');
    const [wind, setWind] = useState('N/A');
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('N/A')

    const handleClickOpen = (airport) => {
        loadWeather(airport);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    const loadWeather = () => {
        axios.get(`/api/weather/${airport}`)
            .then(response => {
                console.log(response.data);
                if(response.data.data[0].temperature) {
                    setTemp(response.data.data[0].temperature.fahrenheit);
                } 
                if(response.data.data[0].barometer){
                    setBaro(response.data.data[0].barometer.hg);
                }
                if(response.data.data[0].visibility){
                    setVisi(response.data.data[0].visibility.miles);
                }
                 if(response.data.data[0].wind){
                    setWind(response.data.data[0].wind.speed_kts);
                }
                setIcao(response.data.data[0].icao);
                setName(response.data.data[0].station.name)
            }).catch(error => {
                console.log(error);
                alert('Something Wrong in GET API')
            });
    }

    return (
        <>
            <div className="about">
                <div className="avatar">
                    <div>
                        <Avatar variant="circular" src={user.picture} sx={{ width: 135, height: 135 }} />
                    </div>
                    <div>
                        <Typography variant="h4">{user.username}</Typography>
                    </div>

                </div>
                <div className="aboutItems">
                    <div className="weather">
                        <div className="weather-label">
                            <ThunderstormOutlinedIcon fontSize="large" />
                            <Typography variant="h6" >Flight Conditions</Typography>
                        </div>
                        <div >
                            <div>
                                <TextField
                                    label="Airport Code"
                                    size="small"
                                    onChange={(e) => setAirport(e.target.value)}
                                    value={airport}
                                />
                                <Button onClick={(e) => handleClickOpen(airport)}>Submit</Button>
                            </div>

                        </div>
                        <div>

                        </div>

                        <Dialog
                            open={open}
                            onClose={handleClose}
                        >
                            <DialogTitle>
                                {"ATIS"}
                            </DialogTitle>
                            
                            <DialogContent>
                                <DialogContentText>
                                    <Typography variant={'inherit'} component={'h5'} sx={{ paddingLeft: '10px' }}>Airport: {name}</Typography>
                                    <Typography variant={'inherit'} component={'h5'} sx={{ paddingLeft: '10px' }}>Temp: {temp} F</Typography>
                                    <Typography variant={'inherit'} component={'h5'} sx={{ paddingLeft: '10px' }}>BARO: {baro} hg</Typography>
                                    <Typography variant={'inherit'} component={'h5'} sx={{ paddingLeft: '10px' }}>Wind: {wind} kts</Typography>
                                    <Typography variant={'inherit'} component={'h5'} sx={{ paddingLeft: '10px' }}>Visibility: {visi} miles</Typography>
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                            
                                <Button onClick={handleClose}>Close</Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </div>
            </div>

            <Hangar />
        </>
    )
}

export default PilotProfile;