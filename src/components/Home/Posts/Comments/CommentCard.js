import React, {useState} from 'react'
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";

const CommentCard = () => {

    const [isCommentLiked, setIsCommentLiked] = useState(false);

    const handleLikeComments = () => {
        setIsCommentLiked(!isCommentLiked);
    }

    return (
        <div>
            <div className={"flex items-center justify-between py-5"}>
                <div className={"flex items-center"}>
                    <div>
                        <img className={"h-9 w-9 rounded-full"}
                             src="https://cdn.pixabay.com/photo/2022/06/01/05/52/fruit-7234847_640.jpg" alt=""/>
                    </div>
                    <div className={"ml-3"}>
                        <p>
                            <span className={"font-bold"}>username</span>

                            <span className={"ml-2 font-light"}>nice post</span>
                        </p>
                        <div className={"flex items-center space-x-3 text-xs opacity-60 pt-0.5 py-1"}>
                            <span>1 min ago</span>
                            <span>22 likes</span>
                        </div>
                    </div>
                </div>
                {
                    isCommentLiked
                        ?
                        <AiFillHeart onClick={handleLikeComments} className={"text-lg hover:opacity-50 text-red-600 cursor-pointer"}/>
                        :
                        <AiOutlineHeart onClick={handleLikeComments} className={"text-lg  hover:opacity-50 cursor-pointer"}/>
                }
            </div>
        </div>
    )
}
export default CommentCard
