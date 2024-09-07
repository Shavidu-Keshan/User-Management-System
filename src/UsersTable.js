import { Button, TableContainer } from '@mui/material'
import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function UsersTable({ rows }) {
  return (
    <div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Actions</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {
            //inline if else condition(rows.length > 0 ?)
            rows.length > 0 ? rows.map((row) => (
            <TableRow key={row.id} sx={{'&:last-child td, &:last-child th' : {border: 0}}}>
            <TableCell component='th'>{row.id}</TableCell>
            <TableCell component='th'>{row.name}</TableCell>
            <TableCell>
              <Button
              sx={{margine : '0px 10px'}}
              onClick={() => {}}>
                Update
              </Button>
              <Button
              sx={{margine : '0px 10px'}}
              onClick={() => {}}>
                Delete
              </Button>
            </TableCell>
            </TableRow>
          )) :<TableRow  sx={{'&:last-child td, &:last-child th' : {border: 0}}}>
            <TableCell component='th'>No Data</TableCell>
          </TableRow> }
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default UsersTable
