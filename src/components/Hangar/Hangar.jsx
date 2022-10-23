import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import GiteIcon from '@mui/icons-material/Gite';

function Hangar() {

    const history = useHistory();

    const dispatch = useDispatch();

    const [aircraftList, setAircraftList] = useState([]);

    useEffect(() => {
        // On Page Load
        fetchAircraft();

    }, []);

    const fetchAircraft = () => {
        axios.get('/api/aircraft').then((response) => {
            setAircraftList(response.data);
        }).catch((error) => {
            console.log(error);
            alert('Something wrong Aircraft GET');
        })
    }

    function planeChecklist(craft) {
        console.log('Aircraft Id:', craft.id);
        // dispatch action for reducer
        dispatch({ type: 'SELECT_AIRCRAFT', payload: craft });
        // dispatch action for item checklist by id
        dispatch({ type: 'ITEMS_BEFORE_ENGINE', payload: { id: craft.id } });
        history.push('/before-engine');
    }

    function editChecklist(craft) {
        console.log('Aircraft Id:', craft.id);
        dispatch({ type: 'SELECT_AIRCRAFT', payload: craft });
        dispatch({ type: 'AIRCRAFT_ITEMS', payload: { id: craft.id } });

        history.push('/edit-checklist');
    }


    return (
        <>
            <Divider variant="middle">
                <Chip icon={<GiteIcon sx={{ bgcolor: "whitesmoke", borderRadius: 3}}/>} label="Your Hangar" variant="outlined" sx={{ color: "White"}} />
            </Divider>
            <div>
                {
                    aircraftList.length === 0 && (
                        <div>No Aircraft in Your Hangar</div>
                    )
                }
                {
                    aircraftList.map(craft => {
                        return (
                            <div key={craft.id} style={{
                                justifyContent: "center",
                                alignItems: "center",
                                marginBottom: "15px", marginTop: "15px"
                            }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1 0 auto' }}>

                                    <Card raised={true} variant="rounded" sx={{ flex: '1 0 auto' }}>
                                        <CardMedia
                                            component="img"
                                            height="375"
                                            image={craft.url}
                                            alt={craft.name}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {craft.name}
                                            </Typography>
                                            <Typography gutterBottom variant="h6" component="div">
                                                Hours: {craft.hours}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button variant="contained" size="small"
                                                onClick={(event) => planeChecklist(craft)}
                                            >Start Checklist</Button>
                                            <Button variant="outlined" size="small">Edit Checklists</Button>
                                        </CardActions>
                                    </Card>
                                </Box>
                                <Divider variant="middle" sx={{ marginTop: '50px', marginBottom: '50px' }} />
                            </div>
                        );
                    })
                }
            </div>

        </>
    )
}

export default Hangar;