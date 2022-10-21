import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


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
        // dispatch action
        dispatch({ type: 'SELECT_AIRCRAFT', payload: craft });
        

        history.push('/before-engine');
    }

    return (
        <>
            <div>
                <h3>Hangar</h3>
            </div>
            <div>


            </div>
            <div>
                {
                    aircraftList.length === 0 && (
                        <div>No Aircraft in Your Hangar</div>
                    )
                }
                {
                    aircraftList.map(craft => {
                        return (
                            <div key={craft.id}>
                                <img src={craft.url} />
                                <h4>{craft.name}</h4>
                                <h6>Hours Flown: {craft.hours}</h6>
                                <button>Edit Checklist</button>
                                <button onClick={(event) => planeChecklist(craft)}>Start Pre-Flight</button>
                            </div>
                        );
                    })
                }
            </div>

        </>
    )
}

export default Hangar;