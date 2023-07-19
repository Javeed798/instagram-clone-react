import React from 'react'
import Sidebar from "../../components/Sidebar/Sidebar";
import {Route, Routes} from "react-router-dom";
import HomePage from "../HomePage/HomePage";

const Router = () => {
    return (
        <div className={"flex"}>
            <div className={"w-[20%] border border-l-sky-300"}>
                <Sidebar />
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </div>
        </div>
    )
}
export default Router
