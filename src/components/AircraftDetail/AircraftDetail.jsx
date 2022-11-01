import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './AircraftDetail.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';

function AircraftDetail() {

    const craft = useSelector(store => store.aircraft.selectedAircraft);

    const { craftId } = useParams();
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [hours, setHours] = useState('');
    const [pic, setPic] = useState('');
    const history = useHistory();

    // const dispatch = useDispatch();

    useEffect(() => {
        // dispatch({ type: 'FETCH_AIRCRAFT_DETAILS', payload: craftId });
        if (craftId) {
            axios.get(`/api/aircraft/detail/${craftId}`).then(response => {
                const craft = response.data;
                setName(craft.name);
                setHours(craft.hours);
                setPic(craft.url);
            }).catch(error => {
                console.log(error);
                alert('Something Went wrong');
            })
        }
    }, [craftId]);

    const submitForm = (e) => {
        e.preventDefault();
        dispatch({ type: 'EDIT_AIRCRAFT', payload: { name, hours, craftId }, history })
    }

    return (
        <>
            <Typography className='header' variant='h4'>Aircraft Details</Typography>
            <div className='detail'>
                <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1 0 auto', maxWidth: '750px' }}>
                    <Card raised={true} variant="rounded" sx={{ flex: '1 0 auto' }}>
                        <CardMedia
                            component="img"
                            height="375"
                            image={pic}
                            alt={name}
                        />
                        <CardContent>
                            
                            <form onSubmit={submitForm} className='form'>
                            <Typography variant="h6">
                                Edit
                            </Typography>
                                <div className='textfield'>
                                    <TextField
                                        label="Aircraft Name"
                                        id="outlined-size-small"
                                        size="small"
                                        InputLabelProps={{ shrink: true }}
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                    />
                                </div>
                                <div className='textfield'>
                                    <TextField
                                        label="Hours Flown"
                                        size="small"
                                        InputLabelProps={{ shrink: true }}
                                        onChange={(e) => setHours(e.target.value)}
                                        value={hours}
                                    />
                                </div>
                                <div className='textfield'>
                                    <Button type='submit' variant='outlined'>Update</Button>
                                </div>
                            </form>

                        </CardContent>
                        <CardActions>
                        </CardActions>
                    </Card>
                </Box>

            </div>
        </>
    )
}

export default AircraftDetail;