import React from 'react'
import Sidebar from "../../components/Sidebar/Sidebar";
import {Route, Routes} from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Profile from "../../components/Profile/Profile";
import CreatePostModal from "../../components/CreatePost/CreatePostModal";

const Router = () => {
    return (
        <div className={"flex"}>
            <div className={"w-[20%] border border-l-sky-300"}>
                <Sidebar />
            </div>
            <div className={"w-full"}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="username" element={<Profile />} />
                    <Route path="createPost" element={<CreatePostModal />} />
                </Routes>
            </div>
        </div>
    )
}
export default Router
