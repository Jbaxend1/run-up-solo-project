import Hangar from "../Hangar/Hangar";
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';


function PilotProfile() {

    const user = useSelector((store) => store.user);

    return (
        <>
            <div>
                <Avatar variant="circular" src={user.picture} sx={{ width: 135, height: 135 }}/>
                <Typography variant="h6">{user.username}</Typography>
            </div>
            <div>
                <h6>Certifications:</h6>
            </div>
            <Hangar />
        </>
    )
}

export default PilotProfile;