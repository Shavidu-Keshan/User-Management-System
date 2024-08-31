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
        <Box>
            <UserForm />
            <UsersTable />
        </Box>

        
    )

}

export default Users;