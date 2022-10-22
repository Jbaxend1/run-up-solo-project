import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import EditBefore from '../EditBefore/EditBefore';

function EditChecklist () {

    const items = useSelector(store => store.items);
    const aircraft = useSelector(store => store.aircraft);

    const history = useHistory();

    const dispatch = useDispatch();

    function editBefore(e, aircraft) {
        const category =  e.target.value;
        // dispatch({ type: })


    }

    return (
        <>
            <h2>Edit Checklists</h2>
            <button onClick={() => {history.push('/edit-before-engine')}}>Before Engine Start</button>
            <button onClick={() => {history.push('/edit-taxi')}}>Taxi</button>
            <button onClick={() => {history.push('/edit-run-up')}}>Run-up</button>
            <button onClick={() => {history.push('/edit-takeoff')}}>Takeoff</button>

        </>
    )
}

export default EditChecklist;