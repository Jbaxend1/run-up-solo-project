import axios from "axios";
import { useState, useEffect } from "react";


function Hangar() {

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
                            <div>
                                <img src={craft.url} />
                                <h4>{craft.name}</h4>
                                <h6>Hours Flown: {craft.hours}</h6>
                                <button>Edit Checklist</button>
                                <button>Start Pre-Flight</button>
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}

export default Hangar;