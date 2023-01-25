import React from "react";

const MembersContext = React.createContext();

const allMembers = {fname:'rabsun', lname:'shrestha'};


const MemberProvider = ({children}) => {

    const [members,setMembers] =  React.useState(allMembers);

    return(
        <MembersContext.Provider value={{members}}>
            {children}
        </MembersContext.Provider>
    )
}

export const useMembersListContext = () => React.useContext(MembersContext);

export default MemberProvider