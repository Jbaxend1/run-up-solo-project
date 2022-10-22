import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function EditChecklist () {

    const items = useSelector(store => store.items);
    const aircraft = useSelector(store => store.aircraft);

    const history = useHistory();

    const dispatch = useDispatch();

    return (
        <>
            <h2>Edit Checklist</h2>
            <form>
                <input type="text" />
                <input type="submit" />
            </form>

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

export default EditChecklist;