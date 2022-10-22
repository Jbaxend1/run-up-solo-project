import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Takeoff() {
    const items = useSelector(store => store.items);
    const aircraft = useSelector(store => store.aircraft);

    const history = useHistory();

    const dispatch = useDispatch();

    function nextChecklist() {
        console.log('Aircraft Id:', aircraft.id);
        // dispatch action for item checklist by id
        // dispatch({ type: 'ITEMS_RUNUP', payload: { id: aircraft.id } });
        history.push('/complete');
    }

    return (
        <>
            <h2>Takeoff</h2>
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

            <button onClick={(event) => nextChecklist(aircraft)}>COMPLETE</button>
        </>
    )
}

export default Takeoff;