import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
     
    const [user, setUser]= React.useState(null) //no need to import if used like this
    
    return (// yei dono vals issilie pass kri h prop sei taaki uss value sei koi data chahiye toh sirf user se wo data leke dedun pr agar iss state m koi val add krni ho toh mere pass method h na, setuser...usecontext sei setuser ka access milra h
        <UserContext.Provider value={{user, setUser}}>
        {children} //{/* This is where the nested components will be rendered   It essentially renders whatever is inside the <UserContextProvider> tags.  h1, 'login and profile*/}
        </UserContext.Provider>
    )
}

export default UserContextProvider 