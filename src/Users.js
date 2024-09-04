import { Box } from "@mui/system";
import UserForm from "./UserForm.js";
import UsersTable from "./UsersTable.js";
import Axios from "axios";
import { useEffect, useState } from "react";

const Users =() => {

    const [users, setUsers] = useState([]);
    const [submitted ,setSubmitted] = useState([]); 

    useEffect(() => {
        getUsers();
    },[]);

    const getUsers = () => {
        Axios.get('http://localhost:3002/api/users')
            .then(response => {
                setUsers(response.data?.response || []);
            })
            .catch(error => {
                console.log("Axios Error : ",error);

            }
            );
    };

    const addUser =(data) => {
        const payload = {
            id : data.id,
            name : data.name,
        }
        Axios.post('http://localhost:3002/api/createuser')
        .then(() => {
            getUsers();
            setSubmitted(false);
        })
        .catch(error => {
            console.log("Axios Error : ",error);

        }
        );
    }

    return(
        <Box
            sx={{
                width:'calc(100% - 100px)',
                margin: 'auto',
                marginTop: '10px',
            }}
        >
            <UserForm 
            AddUser = {addUser}/>
            <UsersTable rows={users}/>
        </Box>

        
    )

}

export default Users;