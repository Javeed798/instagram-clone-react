import React from 'react'
import {AiFillHeart} from "react-icons/ai";
import {FaComment} from "react-icons/fa6";
import "./RegUserPostcard.css"
const RegUserPostcard = () => {
    return (
        <div className={"p-2"}>
            <div className="post w-60 h-60">
                <img className={"cursor-pointer"} src="https://cdn.pixabay.com/photo/2023/06/20/10/06/cocktail-8076619_640.jpg" alt=""/>
                <div className={"overlay"}>
                    <div className={"overlay-text flex justify-between"}>
                        <div>
                            <AiFillHeart/>
                            <span>10</span>
                        </div>
                        <div>
                            <FaComment/>
                            <span>10</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RegUserPostcard
