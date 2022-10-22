import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function BeforeEngine () {

    const history = useHistory();

    const aircraft = useSelector(store => store.aircraft);
    const items = useSelector(store => store.items);

    const dispatch = useDispatch();


    function nextChecklist(aircraft) {
        console.log('Aircraft Id:', aircraft.id);
        // dispatch action for item checklist by id
        dispatch({ type: 'ITEMS_TAXI', payload: { id: aircraft.id } });
        history.push('/taxi');
    }


    return (
        <>
            <h2>Before Engine</h2>
            <button onClick={() => {history.push('/home')}}>Back</button>
            <div>
                {
                    items.map( item => {
                        return (
                            <div>
                                <button>Check</button>
                                <div>
                                {item.description}: {item.action}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <button onClick={(event) => nextChecklist(aircraft)}>Next Phase: Taxi</button>
        </>
    )
}

export default BeforeEngine;