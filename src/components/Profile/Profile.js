import React from 'react'
import ProfileUserDetails from "./ProfileUserDetails";
import RegUserPostPart from "./RegUserPostPart";

const Profile = () => {
    return (
        <div className={"px-20"}>
           <div>
               <ProfileUserDetails />
           </div>
            <div>
                <RegUserPostPart />
            </div>
        </div>
    )
}
export default Profile
