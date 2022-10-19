import axios from "axios";


function Hangar () {

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
                <p>Cessna 172</p>
                <p>Hours: </p>
                <button>Edit Checklist</button>
                <button>Start Pre-Flight</button>
            </div>
                
        </>
    )
}

export default Hangar;