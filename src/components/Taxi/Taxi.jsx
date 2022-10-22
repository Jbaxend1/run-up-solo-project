
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

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

    return (
        <>
            <h2>Taxi to Runway</h2>
            <button>Back</button>
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

            <button onClick={(event) => nextChecklist(aircraft)}>Next Phase: Run-up</button>
        </>
    )
}

export default Taxi;