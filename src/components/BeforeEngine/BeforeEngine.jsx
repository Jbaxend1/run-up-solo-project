import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function BeforeEngine () {

    const history = useHistory();

    const aircraft = useSelector(store => store.aircraft);

    const items = useSelector(store => store.items);

    return (
        <>
            <h2>Before Engine</h2>
            <button onClick={() => {history.push('/home')}}>Back</button>
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
        </>
    )
}

export default BeforeEngine;