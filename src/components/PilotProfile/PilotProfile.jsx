import Hangar from "../Hangar/Hangar";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CloudIcon from '@mui/icons-material/Cloud';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import CloudTwoToneIcon from '@mui/icons-material/CloudTwoTone';
import ThunderstormSharpIcon from '@mui/icons-material/ThunderstormSharp';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";


function PilotProfile() {

    const user = useSelector((store) => store.user);
    const [ airport, setAirport ] = useState('');
    const [ temp, setTemp ] = useState('');
    const [ baro, setBaro ] = useState('');
    const [ icao, setIcao ] = useState('');
    const [ visi, setVisi ] = useState('');
    const [ wind, setWind ] = useState('');

    const loadWeather = () => {
        axios.get(`/api/weather/${airport}`)
            .then(response =>{
                console.log(response.data);
                setTemp(response.data.data[0].humidity.percent);
                setBaro(response.data.data[0].barometer.hg);
                setWind(response.data.data[0].wind.speed_kts);
                setIcao(response.data.data[0].icao);
                setVisi(response.data.data[0].visibility.miles);

                
            }).catch( error => {
                console.log(error);
                alert('Something Wrong in GET API')
            });
    }

    return (
        <>
            <div className="about">
                <div>
                    <Avatar variant="circular" src={user.picture} sx={{ width: 135, height: 135 }} />
                    <Typography variant="h4">{user.username}</Typography>
                </div>
                <div>
                    <Typography>
                        Certifcations:
                    </Typography>
                </div>
                <div className="aboutItems">
                    <div>
                        <ThunderstormOutlinedIcon fontSize="large" />
                    </div>
                    <TextField
                                label="Airport"
                                size="small"
                                onChange={(e) => setAirport(e.target.value)}
                                value={airport}
                            />
                    <Button onClick={(e) => loadWeather(airport)}>Submit</Button>
                    <div >
                        <Typography sx={{ paddingLeft: '10px' }}>Airport: {icao}</Typography>
                        <Typography sx={{ paddingLeft: '10px' }}>Temp "F": {temp} deg</Typography>
                        <Typography sx={{ paddingLeft: '10px' }}>BARO: {baro} hg</Typography>
                        <Typography sx={{ paddingLeft: '10px' }}>Wind: {wind} kts</Typography>
                        <Typography sx={{ paddingLeft: '10px' }}>Visibility: {visi} miles</Typography>
                    </div>
                </div>
            </div>

            <Hangar />
        </>
    )
}

export default PilotProfile;