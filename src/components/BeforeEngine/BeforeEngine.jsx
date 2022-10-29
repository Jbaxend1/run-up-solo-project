import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ConnectingAirportsOutlinedIcon from '@mui/icons-material/ConnectingAirportsOutlined';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DataTable from '../DataTable/DataTable';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';


function BeforeEngine() {

    const history = useHistory();

    const aircraft = useSelector(store => store.aircraft.aircraft);
    const items = useSelector(store => store.items);

    const dispatch = useDispatch();

    useEffect(() => {
        // On Page Load
        fetchItems();
    }, []);

    function fetchItems() {
        dispatch({ type: 'ITEMS_BEFORE_ENGINE', payload: { id: aircraft.id } })
    }



    function nextChecklist(aircraft) {
        console.log('Aircraft Id:', aircraft.id);
        // dispatch action for item checklist by id
        dispatch({ type: 'ITEMS_TAXI', payload: { id: aircraft.id } });
        history.push('/taxi');
    }


    return (
        <>
            <div className='headers'>
                <h2>Before Engine</h2>
            </div>
            <div className="button-comp">
                <Button sx={{ paddingLeft: '20px', marginRight: '5px' }} onClick={() => { history.push('/home') }} variant='contained' size='small'>
                    <Typography>Back</Typography>
                    <ConnectingAirportsOutlinedIcon />
                </Button>
                <Button variant="contained" size="small" onClick={(event) => nextChecklist(aircraft)}>
                    <Typography>Next Phase: Taxi</Typography>
                    <FlightTakeoffIcon />
                </Button>
            </div>

            <DataTable />

        </>
    )
}

export default BeforeEngine;