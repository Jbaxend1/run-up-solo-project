import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function RunUp () {

    const items = useSelector(store => store.items);
    const aircraft = useSelector(store => store.aircraft);

    const history = useHistory();

    const dispatch = useDispatch();

    function nextChecklist(aircraft) {
        console.log('Aircraft Id:', aircraft.id);
        // dispatch action for item checklist by id
        dispatch({ type: 'ITEMS_TAKEOFF', payload: { id: aircraft.id } });
        history.push('/takeoff');
    }

    return (
        <>
            <h2>Run-up</h2>
            <button>Back</button>
            <ul>
                {
                    items.map( item => {
                        return (
                            <li>
                                {item.description}
                            </li>
                        )
                    })
                }
            </ul>

            <button onClick={(event) => nextChecklist(aircraft)}>Next Phase: Takeoff</button>
        </>
    )
}

export default RunUp;