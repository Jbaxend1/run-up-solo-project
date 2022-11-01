import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';

export default function DataTable() {

    const items = useSelector(store => store.items);

    const columns = [
        {field: 'description', headerName: 'Description', width: 150},
        {field: 'action', headerName: 'Action', width: 150},

    ]


    return (
        <div style={{ height: 500, width: '100%'}}>
            <DataGrid
                rows={items}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
                sx={{ fontSize: '16px'}}
            />
        </div>
    );
}