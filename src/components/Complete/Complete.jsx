import { useHistory } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import ConnectingAirportsOutlinedIcon from '@mui/icons-material/ConnectingAirportsOutlined';


function Complete() {

    const history = useHistory();
    return (
        <>
            <div className='complete-card'>
                <Card className="card" elevation={15} sx={{ width: '65%'}} >
                    <CardMedia
                        component="img"
                        height="315"
                        image="https://images.unsplash.com/photo-1663698887578-7252b46384f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                        alt="cessna"
                    />
                    <CardContent>
                        <Typography gutterBottom variant='h4' component="div">
                            Happy Flying!
                        </Typography>
                        <Typography variant='body1' color='text.secondary'>
                            The Journey Starts Here...
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button aria-label='Home' variant='contained' sx={{ backgroundColor: '', width: '500px' }} onClick={() => { history.push('/home') }}>
                            <HomeIcon fontSize='large' />
                            <Typography sx={{ paddingLeft: '8px' }}>Home</Typography>
                        </Button>
                        <Button aria-label='Home' variant='contained' sx={{ backgroundColor: '', width: '500px' }} onClick={() => { history.push('/takeoff') }}>
                            <ConnectingAirportsOutlinedIcon fontSize='large'/>
                            <Typography sx={{ paddingLeft: '8px' }}>BACK</Typography>
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </>
    )
}

export default Complete;