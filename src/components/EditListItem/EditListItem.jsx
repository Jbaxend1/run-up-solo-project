import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

function EditListItem({ item }) {

    const aircraft = useSelector(store => store.aircraft.aircraft);

    const dispatch = useDispatch();

    const deleteItem = (item) => {
        console.log(item.id);
        axios.delete(`/api/item/${item.id}`).then((response) => {
            fetchItems();
        }).catch((error) => {
            console.log(error);
            alert('Something wrong in DELETE');
        });
    }

    function fetchItems() {
        dispatch({ type: 'ITEMS_BEFORE_ENGINE', payload: { id: aircraft.id } })
    }

    return (
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <DeleteIcon onClick={(e) => deleteItem(item)} />
                </ListItemIcon>
                <ListItemText primary={item.description} secondary={item.action} />
            </ListItemButton>
        </ListItem>
    )
}

export default EditListItem;