import { useMembersListContext } from "../providers/MemberProvider";

const MembersList = () => {

    const { members } = useMembersListContext();

    return(
        <div> {members}</div>
    
)
}

export default MembersList;