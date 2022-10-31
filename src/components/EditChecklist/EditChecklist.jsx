import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



function EditChecklist() {

    const items = useSelector(store => store.items);
    const aircraft = useSelector(store => store.aircraft);

    const history = useHistory();

    const dispatch = useDispatch();

    return (
        <>
            <Typography className='headers' variant='h4'>
                Edit Checklists
            </Typography>
            <div className="cardContainer">
                <Card className="card" elevation={'15'} onClick={() => { history.push('/edit-before-engine') }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="315"
                            image="https://images.unsplash.com/photo-1541611519634-a334c7446a68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            alt="cessna"
                        />
                        <CardContent>
                            <Typography gutterBottom variant='h4' component="div">
                                Before Engine Start
                            </Typography>
                            <Typography variant='body1' color='text.secondary'>
                                The Journey Starts Here...
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card className="card" elevation="15" onClick={() => { history.push('/edit-taxi') }} >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="315"
                            image="https://images.unsplash.com/photo-1592805145102-8578dcd1e41f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                        />
                        <CardContent>
                            <Typography gutterBottom variant='h4' component="div">
                                Taxi
                            </Typography>
                            <Typography variant='body1' color='text.secondary'>
                                Tower, here we come...
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card className="card" elevation="15" onClick={() => { history.push('/edit-run-up') }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="315"
                            image="https://images.unsplash.com/photo-1522474252234-127492dde7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1755&q=80"
                        />
                        <CardContent>
                            <Typography gutterBottom variant='h4' component="div">
                                Run-Up
                            </Typography>
                            <Typography variant='body1' color='text.secondary'>
                                The build up...
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card className="card" elevation="15" onClick={() => { history.push('/edit-takeoff') }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="315"
                            image="https://images.unsplash.com/photo-1511140276483-30c1217ca449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                        />
                        <CardContent>
                            <Typography gutterBottom variant='h4' component="div">
                                Takeoff
                            </Typography>
                            <Typography variant='body1' color='text.secondary'>
                                Rate of Climb... Sky is the limit. 
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </>
    )
}

export default EditChecklist;