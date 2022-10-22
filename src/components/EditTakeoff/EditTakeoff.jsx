import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function EditTakeoff () {

    const items = useSelector(store => store.items);
    const aircraft = useSelector(store => store.aircraft);

    const history = useHistory();

    const dispatch = useDispatch();

    useEffect(() => {
        // On Page Load
        fetchItems();
    }, []);

    function fetchItems() {
        dispatch({ type: 'ITEMS_', payload: {id: aircraft.id}})
    }

    return (
        <>
            <h2>Edit Takeoff</h2>
            <form>
                <input type="text" />
                <input type="submit" />
            </form>
            <button onClick={() => {history.push('/edit-run-up')}}>Back</button>
            <button onClick={() => {history.push('/edit-checklist')}}>Edit Home</button>
            <div>
                {
                    items.map( item => {
                        return (
                            <div key={item.id}>
                                <div>
                                {item.description}: {item.action}
                                </div>
                                <button>DELETE</button>
                                <button>EDIT</button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default EditTakeoff;