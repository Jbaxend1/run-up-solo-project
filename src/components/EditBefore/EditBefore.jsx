import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';


function EditBefore() {

    const items = useSelector(store => store.items);
    const aircraft = useSelector(store => store.aircraft);

    const [action, setAction] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('before_engine');

    const history = useHistory();

    const dispatch = useDispatch();

    useEffect(() => {
        // On Page Load
        fetchItems();
    }, []);

    function fetchItems() {
        dispatch({ type: 'ITEMS_BEFORE_ENGINE', payload: { id: aircraft.id } })
    }

    const addNewItem = (e) => {
        e.preventDefault();
        axios.post('/api/item', { desc: description, action: action, aircraft: aircraft.id, category: category }).then((response) => {
            fetchItems();
        }).catch((error) => {
            console.log(error);
            alert('Something went wrong in POST');
        });
    }


    return (
        <>
            <h2>EDIT Before Engine Start</h2>
            <form onSubmit={addNewItem}>
                <input onChange={(e) => setDescription(e.target.value)} value={description} type="text" placeholder='description' />
                <input onChange={(e) => setAction(e.target.value)} value={action} type="text" placeholder='action' />
                <label for='categories'>Category</label>
                <select onChange={(e) => setCategory(e.target.value)} id="categories" name="categories">
                    <option value="before_engine">Before Engine Start</option>
                    <option value="taxi">Taxi</option>
                    <option value="run_up">Run-Up</option>
                    <option value="takeoff">Takeoff</option>
                </select>
                <input type="submit" />
            </form>
            <button onClick={() => { history.push('/edit-checklist') }}>Edit Home</button>
            <button onClick={() => { history.push('/edit-taxi') }}>Next</button>
            <div>
                {
                    items.map(item => {
                        return (
                            <div key={item.id}>
                                <div>
                                    {item.description}: {item.action}
                                </div>
                                <button onClick={(event) => deleteItem(item)}>DELETE</button>
                                <button>EDIT</button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default EditBefore;