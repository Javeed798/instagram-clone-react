import React, {useState} from 'react'
import {BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots} from "react-icons/bs";
import "./Postcard.css"
import { AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {FaRegComment} from "react-icons/fa";
import {RiSendPlaneLine} from "react-icons/ri";
import CommentModal from "./Comments/CommentModal";
import {useDisclosure} from "@chakra-ui/react";
const PostCard = () => {
    const [dropdown,setDropdown] = useState(false);
    const [isPostLiked, setIsPostLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleClick = () => {
        setDropdown(!dropdown)
    }
    const handlePostLiked = () => {
        setIsPostLiked(!isPostLiked)
    }

    const handleSavedPost = () => {
        setIsSaved(!isSaved)
    }

    const handleOpenCommentModel = () => {
        onOpen();
    }

    return (
        <div>
            <div className={"border rounded-md w-full"}>
                <div className={"flex justify-between w-full items-center py-4 px-5"}>
                    <div className={"flex items-center"}>
                        <img className={"h-12 w-12 rounded-full"} src="https://cdn.pixabay.com/photo/2022/06/01/05/52/fruit-7234847_640.jpg" alt=""/>
                        <div className={"pl-2"}>
                            <p className={"font-semibold text-sm items-center"}>username</p>
                            <p className={"font-thin text-sm"}>location</p>
                        </div>
                    </div>
                    <div className={"dropdown"}>
                        <BsThreeDots className={"dots"} onClick={handleClick} />
                        <div  className={"dropdowm-content"}>
                            {
                                dropdown &&  <p className={"bg-black text-white py-1 px-4 rounded-md cursor-pointer"}>Delete</p>
                            }
                        </div>
                    </div>

                </div>
                <div className={"w-full"}>
                    <img className={"w-full"} src="https://cdn.pixabay.com/photo/2023/06/21/16/26/warnemunde-8079731_640.jpg" alt=""/>
                </div>
                <div className={"flex justify-between items-center w-full px-5 py-4"}>
                    <div className={"flex items-center space-x-6"}>
                        {
                            isPostLiked ? <AiFillHeart className={"text-xl hover:opacity-50 text-red-700 cursor-pointer"} onClick={handlePostLiked} /> :
                                <AiOutlineHeart  className={"text-xl hover:opacity-50  cursor-pointer"}  onClick={handlePostLiked} />
                        }
                        <FaRegComment onClick={handleOpenCommentModel} className={"text-xl hover:opacity-50 cursor-pointer"} />

                        <RiSendPlaneLine className={"text-xl hover:opacity-50 cursor-pointer"} />
                    </div>
                    <div>
                        {
                            isSaved ?
                                <BsBookmarkFill onClick={handleSavedPost}  className={"text-xl hover:opacity-50 cursor-pointer"} />
                                :
                                <BsBookmark onClick={handleSavedPost}  className={"text-xl hover:opacity-50 cursor-pointer"} />
                        }
                    </div>
                </div>
                {/* for rendering number of likes and comments*/}
                <div className={"w-full py-2 px-5"}>
                    <p>10 likes</p>
                    <p className={"opacity-40 py-2 cursor-pointer"}>view all 10 comments</p>
                </div>
               <div className={"border border-t w-full"}>
                   <div className={"flex w-full items-center px-5"}>
                       <BsEmojiSmile />
                       <input className={"comment-input"} type="text" placeholder="add a comment"/>
                   </div>
               </div>
            </div>
            <CommentModal handlePostLiked={handlePostLiked} onClose={onClose} isOpen={isOpen} handleSavedPost={handleSavedPost} isPostLiked={isPostLiked} isSaved={isSaved} />
        </div>
    )
}
export default PostCard
