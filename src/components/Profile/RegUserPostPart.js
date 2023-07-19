import React, {useState} from 'react'
import {AiOutlineTable, AiOutlineUser} from "react-icons/ai";
import {RiVideoLine} from "react-icons/ri";
import {BiBookmark} from "react-icons/bi";
import RegUserPostcard from "./RegUserPostcard";

const RegUserPostPart = () => {

    const [activeTab, setActiveTab] = useState();

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }

    const tabs = [
        {
            tab: "Posts",
            icon: <AiOutlineTable />,
            activeTab: ""
        },
        {
            tab: "Reels",
            icon: <RiVideoLine />,
            activeTab: ""
        },
        {
            tab: "Saved",
            icon: <BiBookmark />,
            activeTab: ""
        },
        {
            tab: "Tagged",
            icon: <AiOutlineUser />,
            activeTab: ""
        }
    ]
    return (
        <div>
            <div className={"flex space-x-14 border-t relative"}>
                {
                    tabs.map((item) => (
                        <div onClick={() => handleTabClick(item.tab)} className={`flex items-center cursor-pointer py-2 text-sm ${activeTab === item.tab ? "border-t border-black" : ""}`}>
                            <p className={"ml-2 pr-0.5 text-sm"}>{item.icon}</p>
                            <p className={`${activeTab === item.tab ? "font-bold" : "font-light"}`}>{item.tab}</p>
                        </div>
                    ))
                }
            </div>
            <div>
                <div className={"flex flex-wrap"}>
                    {
                        [1,1,1,1,1].map((item) => (
                            <div>
                                <RegUserPostcard />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default RegUserPostPart
