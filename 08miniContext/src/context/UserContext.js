import React from "react";

const UserContext = React.createContext()

export default UserContext;
//context, provider dega
//every context is a provider as what is context? context provides variable only na
//usercontext is also a provider
//context ko global variable k tarah hi maano

/*
<UserContext>  
<Login/>//12 to 15 (wrapped inside UserContext, usercontext becomes a provider now, that means all the components inside it(usercontxt) can access the global userContext   )
<Card>
    <Data/>
<Card/>
<UserContext/>

ab iske baad ek provider bhi banana padta hai
2 ways
*/