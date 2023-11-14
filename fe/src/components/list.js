import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
} from '@mui/x-data-grid-generator';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../getQueries';

export default function IsCellEditableGrid() {
  
    const { loading, error, data } = useQuery(GET_REPOSITORIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const repositories = data?.repositories?.map((item, index) => ({
        ...item,
        _id: index + 1, // Assign unique IDs (1, 2, 3, ...) based on the index
      }));

      const handleRowClick =(params)=>{
        console.log(`Row ${params.row._id} clicked!`);
        window.location.href=`/repository/${params?.row?.owner}/${params?.row?.name}`
      }
    return (
        <>
         <h1>Github Repository Details</h1>
          <br></br>
    <Box sx={{display:"flex", height:'100%',width:'100%',justifyContent:"center",alignItems:'center'}}>
    <Box
      sx={{
        height: "fit-content",
        width: '60%',
        '& .MuiDataGrid-cell--editable': {
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#376331' : 'rgb(217 243 190)',
        },
      }}
    >
      <DataGrid
        getRowId={(row) => row._id}
        rows={repositories}
        columns={columns}
        isCellEditable={(params) => params.row._id % 2 === 0}
        disableSelectionOnClick
        onRowClick={handleRowClick}
      />
    </Box>
    </Box>
    </>
  );
}

const columns = [
    { field: '_id', headerName: 'S.no', width: 10, editable: true},
  { field: 'name', headerName: 'Name', width: 250, editable: true ,renderCell: (rowData) => {
    return (
      <div>
        {/* <p>Name:<Link to={`/repository/${rowData?.row?.owner}/${rowData?.row?.name}`} >{rowData?.row?.name}</Link></p> */}
        <p style={{fontWeight:"bold"}}>{rowData?.row?.name}</p>
      </div>
    );
  },},
  {
    field: 'owner',
    headerName: 'Owner',
    editable: true,
    width:250
  },
  {
    field: 'size',
    headerName: 'Repo Size',
    width: 180,
    editable: true,
  },
  {
    field: 'isPrivate',
    headerName: 'Private',
    width: 140,
    editable: true,
    renderCell: (rowData) => {
        return (
          <div>
            {/* <p>Name:<Link to={`/repository/${rowData?.row?.owner}/${rowData?.row?.name}`} >{rowData?.row?.name}</Link></p> */}
            <p style={{fontWeight:"bold"}}>{rowData?.row?.isPrivate ? "Yes":"NO"}</p>
          </div>
        );
      }
  },
];

const rows = [
  {
    id: 1,
    name: randomTraderName(),
    age: 25,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 2,
    name: randomTraderName(),
    age: 36,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 3,
    name: randomTraderName(),
    age: 19,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 4,
    name: randomTraderName(),
    age: 28,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    name: randomTraderName(),
    age: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
];
