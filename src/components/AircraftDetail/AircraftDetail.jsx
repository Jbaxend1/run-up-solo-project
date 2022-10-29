import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function AircraftDetail() {

    const craft = useSelector(store => store.aircraft.selectedAircraft);

    const { craftId } = useParams();

    const [ name, setName ] = useState('');
    const [ hours, setHours ] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_AIRCRAFT_DETAILS', payload: craftId });
    }, [craftId]);

    return (
        <>
            <h3>Aircraft Detail</h3>
            <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1 0 auto' }}>
                <Card raised={true} variant="rounded" sx={{ flex: '1 0 auto' }}>
                    <CardMedia
                        component="img"
                        height="375"
                        image={craft.url}
                        alt={craft.name}
                    />
                    <CardContent>
                        <Typography variant="h6">
                            Edit
                        </Typography>
                        <TextField
                            label="Aircraft Name"
                            id="outlined-size-small"
                            defaultValue={craft.name}
                            size="small"
                            InputLabelProps={{ shrink: true }}
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                        <TextField
                            label="Hours Flown"
                            id="outlined-size-small"
                            defaultValue={craft.hours}
                            size="small"
                            InputLabelProps={{ shrink: true }}
                        />
                    </CardContent>
                    <CardActions>
                        <Button variant='outlined'>Update</Button>
                    </CardActions>
                </Card>
            </Box>
        </>
    )
}

export default AircraftDetail;