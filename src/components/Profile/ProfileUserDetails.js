import React from 'react'
import {TbCircleDashed} from "react-icons/tb";

const ProfileUserDetails = () => {
    return (
        <div className={"py-10"}>
            <div className={"flex items-center"}>
                <div className={"w-[15%]"}>
                    <img className={"w-32 h-32 rounded-full border border-l-slate-400"} src="https://elements-cover-images-0.imgix.net/ce9d54ab-4adf-4e40-9940-a51c1b495611?fit=max&fm=jpeg&q=80&w=316&s=241d6cef1008db889db2b4f1003474b3" alt=""/>
                </div>
                <div className={"space-y-5"}>
                    <div className={"flex space-x-10 items-center"}>
                        <p>username</p>
                        <button>
                            Edit Profile
                        </button>
                        <TbCircleDashed></TbCircleDashed>
                    </div>
                    <div className={"flex space-x-10"}>
                        <div>
                            <span className={"mt-10 font-semibold p-0.5"}>
                                10
                            </span>
                            <span>posts</span>
                        </div>
                        <div>
                            <span className={"mt-10 font-semibold p-0.5"}>5</span>
                            <span>followers</span>
                        </div>
                        <div>
                            <span className={"mt-10 font-semibold p-0.5"}>
                                5
                            </span>
                            <span>
                                following
                            </span>
                        </div>
                    </div>

                    <div>
                        <p className={"font-semibold"}>Full Name</p>
                        <p className={"font-light text-sm"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileUserDetails
