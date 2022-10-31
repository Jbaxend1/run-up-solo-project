import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';
import List from '@mui/material/List';
import EditListItem from '../EditListItem/EditListItem';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import { Typography } from '@mui/material';

function EditBefore() {

    const items = useSelector(store => store.items);
    const aircraft = useSelector(store => store.aircraft.aircraft);

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
            <Typography variant='h4' sx={{textAlign: 'center', marginBottom: '14px'}}>EDIT Before Engine Start</Typography>

            <div className='form-items'>
                <div className='add-items'>
                    <TextField size='small' onChange={(e) => setDescription(e.target.value)} value={description} type="text" placeholder='description' />
                </div>
                <div className='add-items'>
                    <TextField size='small' onChange={(e) => setAction(e.target.value)} value={action} type="text" placeholder='action' />
                </div>
                <div className='add-items'>
                    <FormControl  size='small' sx={{ minWidth: 200 }}>
                        <InputLabel>Category</InputLabel>
                        <Select onChange={(e) => setCategory(e.target.value)} size='small'
                            label='Category'
                            placeholder='Before Engine'
                        >
                            <MenuItem value="before_engine">Before Engine Start</MenuItem>
                            <MenuItem value="taxi">Taxi</MenuItem>
                            <MenuItem value="run_up">Run-Up</MenuItem>
                            <MenuItem value="takeoff">Takeoff</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className='add-items'>
                    <Button onClick={addNewItem}>ADD</Button>
                </div>
                <div className='add-items'>
                    <Button onClick={() => { history.push('/edit-checklist') }}>Edit Home</Button>
                </div>
                <div className='add-items'>
                    <Button onClick={() => { history.push('/edit-taxi') }}>Next</Button>
                </div>
            </div>
            <div>
                <List>
                    {
                        items.map(item => {
                            return (
                                <EditListItem item={item} />
                            )
                        })
                    }

                </List>
            </div>
        </>
    )
}

export default EditBefore;