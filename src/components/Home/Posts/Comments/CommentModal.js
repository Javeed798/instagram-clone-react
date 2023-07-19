import React from 'react'
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
} from "@chakra-ui/react";
import {BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots} from "react-icons/bs";
import CommentCard from "./CommentCard";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {FaRegComment} from "react-icons/fa";
import {RiSendPlaneLine} from "react-icons/ri";
import "./CommentModal.css"

const CommentModal = ({onClose, isOpen, isSaved, isPostLiked, handlePostLiked, handleSavedPost}) => {

    return (

        <div>
            <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay/>
                <ModalContent>
                    <ModalBody>
                        <div className={"flex h-[75vh] relative"}>
                            <div className={"w-[45%] flex flex-col justify-center"}>
                                <img className={"max-h-full w-full"}
                                     src="https://cdn.pixabay.com/photo/2023/06/21/16/26/warnemunde-8079731_640.jpg"
                                     alt=""/>
                            </div>
                            <div className={"w-[55%] pl-10"}>
                                <div className={"flex justify-between items-center py-5"}>
                                    <div className={"flex items-center"}>
                                        <div>
                                            <img className={"w-9 h-9 rounded-full"}
                                                 src="https://cdn.pixabay.com/photo/2022/06/01/05/52/fruit-7234847_640.jpg"
                                                 alt=""/>
                                        </div>
                                        <div className={"ml-2"}>
                                            <p>username</p>
                                        </div>
                                    </div>
                                    <BsThreeDots/>
                                </div>
                                <hr/>
                                <div className={"comment"}>
                                    {
                                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => (
                                            <CommentCard/>
                                        ))
                                    }
                                </div>
                               <div className={"absolute bottom-0 w-[53%]"}>
                                   <div className={"flex justify-between items-center w-full py-4"}>
                                       <div className={"flex items-center space-x-6"}>
                                           {
                                               isPostLiked ? <AiFillHeart
                                                       className={"text-xl hover:opacity-50 text-red-700 cursor-pointer"}
                                                       onClick={handlePostLiked}/> :
                                                   <AiOutlineHeart className={"text-xl hover:opacity-50  cursor-pointer"}
                                                                   onClick={handlePostLiked}/>
                                           }
                                           <FaRegComment className={"text-xl hover:opacity-50 cursor-pointer"}/>

                                           <RiSendPlaneLine className={"text-xl hover:opacity-50 cursor-pointer"}/>
                                       </div>
                                       <div>
                                           {
                                               isSaved ?
                                                   <BsBookmarkFill onClick={handleSavedPost}
                                                                   className={"text-xl hover:opacity-50 cursor-pointer"}/>
                                                   :
                                                   <BsBookmark onClick={handleSavedPost}
                                                               className={"text-xl hover:opacity-50 cursor-pointer"}/>
                                           }
                                       </div>
                                   </div>
                                   <div className={"w-full py-2"}>
                                       <p>10 likes</p>
                                       <p className={"opacity-40 py-2 text-sm"}>1 day ago</p>
                                   </div>
                                   <div className={"border border-t w-full"}>
                                       <div className={"flex w-full items-center px-5 w-full"}>
                                           <BsEmojiSmile/>
                                           <input className={"comment-input"} type="text" placeholder="add a comment"/>
                                       </div>
                                   </div>
                               </div>
                            </div>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )
}
export default CommentModal
