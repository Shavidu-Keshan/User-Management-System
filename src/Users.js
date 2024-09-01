import { Box } from "@mui/system";
import UserForm from "./UserForm.js";
import UsersTable from "./UsersTable.js";

const Users =() => {
    //sample user data set
    const users = [
    {
        id : 1,
        name : Prsad,
    },
    {
        id : 2,
        name : Prasadi,
    },

]
    return(
        <Box
            sx={{
                width:'calc(100% - 100px)',
                margin: 'auto',
                margineTop: '10px',
            }}
        >
            <UserForm />
            <UsersTable rows={users}/>
        </Box>

        
    )

}

export default Users;