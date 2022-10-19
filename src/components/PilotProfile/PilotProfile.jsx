import Hangar from "../Hangar/Hangar";
import { useSelector } from 'react-redux';


function PilotProfile() {

    const user = useSelector((store) => store.user);

    return (
        <>
            <div>
                <h3>{user.username}</h3>
            </div>
            <div>
                <h6>Certifications:</h6>
            </div>
            <Hangar />
        </>
    )
}

export default PilotProfile;