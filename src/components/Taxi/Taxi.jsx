
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Taxi() {

    const items = useSelector(store => store.items);

    const history = useHistory();

    return (
        <>
            <h2>Taxi to Runway</h2>
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

            <button>Next Phase: Run-up</button>
        </>
    )
}

export default Taxi;