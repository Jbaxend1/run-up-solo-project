import Hangar from "../Hangar/Hangar";
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CloudIcon from '@mui/icons-material/Cloud';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import CloudTwoToneIcon from '@mui/icons-material/CloudTwoTone';
import ThunderstormSharpIcon from '@mui/icons-material/ThunderstormSharp';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';

function PilotProfile() {

    const user = useSelector((store) => store.user);

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
                    <div >
                        <Typography sx={{ paddingLeft: '10px' }}>KMSP: weather API</Typography>
                        <Typography variant='h6' sx={{ paddingLeft: '10px' }}>BARO: 29.92</Typography>
                    </div>
                </div>
            </div>

            <Hangar />
        </>
    )
}

export default PilotProfile;