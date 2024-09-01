import React, { useState } from 'react';
import { Button, Grid, Input, Typography } from '@mui/material';

const UserForm = (props) => {
  const[id ,setId] = useState(0);
  const[name,setName] = useState("")
  return (
    <form name="userForm" id="userForm"> {/* Adding form name and id */}
      <Grid
        container
        spacing={2} // Use spacing to add space between Grid items
        sx={{
          backgroundColor: "#ffffff",
          marginBottom: "30px",
          display: "flex",
          flexDirection: "column", // Use column to stack items vertically
        }}
      >
        <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography component={"h1"} sx={{ color: "#000000" }}>
            User Form
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            component={'label'}
            htmlFor='id'
            sx={{
              color: '#000000',
              marginRight: '20px',
              fontSize: '16px',
              width: '100px',
              display: 'block',
            }}
          >
            ID
          </Typography>
          <Input
            type="number"
            id='id'
            name='id'
            sx={{ width: '400px' }}
            value={id}//passe the value id
            onChange={e => setId(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            component={'label'}
            htmlFor='name'
            sx={{
              color: '#000000',
              marginRight: '20px',
              fontSize: '16px',
              width: '100px',
              display: 'block',
            }}
          >
            Name
          </Typography>
          <Input
            type="text"
            id='name'
            name='name'
            sx={{ width: '400px' }}
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            sx={{
              margin: 'auto',
              marginBottom: '20px',
              backgroundColor: '#00c6e6',
              color: '#000000',
              '&:hover': {
                opacity: '0.7',
                backgroundColor: '#00c6e6',
              }
            }}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default UserForm;

