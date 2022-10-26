import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ConnectingAirportsOutlinedIcon from '@mui/icons-material/ConnectingAirportsOutlined';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DataTable from '../DataTable/DataTable';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

function Taxi() {

    const items = useSelector(store => store.items);
    const aircraft = useSelector(store => store.aircraft);

    const history = useHistory();

    const dispatch = useDispatch();

    function nextChecklist(aircraft) {
        console.log('Aircraft Id:', aircraft.id);
        // dispatch action for item checklist by id
        dispatch({ type: 'ITEMS_RUNUP', payload: { id: aircraft.id } });
        history.push('/run-up');
    }

    useEffect(() => {
        // On Page Load
        fetchItems();
    }, []);

    function fetchItems() {
        dispatch({ type: 'ITEMS_TAXI', payload: { id: aircraft.id } })
    }

    return (
        <>
            <div className='headers'>
                <h2>Taxi</h2>
            </div>
            <div className="button-comp">
                <Button sx={{paddingLeft: '20px', marginRight: '5px'}} onClick={() => { history.push('/before-engine') }} variant='contained' size='small'>
                    <Typography>Back</Typography>
                    <ConnectingAirportsOutlinedIcon />
                </Button>
                <Button variant="contained" size="small" onClick={(event) => nextChecklist(aircraft)}>
                    <Typography>Next Phase: Run-up</Typography>
                    <FlightTakeoffIcon />
                </Button>
            </div>

            <DataTable />

        </>
    )
}

export default Taxi;