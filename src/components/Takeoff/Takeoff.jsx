import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ConnectingAirportsOutlinedIcon from '@mui/icons-material/ConnectingAirportsOutlined';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DataTable from '../DataTable/DataTable';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';

function Takeoff() {
    const items = useSelector(store => store.items);
    const aircraft = useSelector(store => store.aircraft.aircraft);

    const history = useHistory();

    const dispatch = useDispatch();

    function nextChecklist() {
        console.log('Aircraft Id:', aircraft.id);
        // dispatch action for item checklist by id
        // dispatch({ type: 'ITEMS_RUNUP', payload: { id: aircraft.id } });
        history.push('/complete');
    }

    useEffect(() => {
        // On Page Load
        fetchItems();
    }, []);

    function fetchItems() {
        dispatch({ type: 'ITEMS_TAKEOFF', payload: { id: aircraft.id } })
    }

    return (
        <>
            <div className='headers'>
                <h2>Phase: Takeoff</h2>
            </div>
            <div className="button-comp">
                <Button sx={{paddingLeft: '20px', marginRight: '5px'}} onClick={() => { history.push('/run-up') }} variant='contained' size='small'>
                    <Typography>Back</Typography>
                    <ConnectingAirportsOutlinedIcon />
                </Button>
                <Button variant="contained" size="small" onClick={(event) => nextChecklist(aircraft)}>
                    <Typography>COMPLETE</Typography>
                    <AirplaneTicketIcon />
                </Button>
            </div>

            <DataTable />

        </>
    )
}

export default Takeoff;