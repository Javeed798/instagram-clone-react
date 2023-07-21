import React, {useState} from 'react'
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
    Button

} from "@chakra-ui/react";
import {FaPhotoVideo} from "react-icons/fa"
import {GrEmoji} from "react-icons/gr"
import {GoLocation} from "react-icons/go"
import "./CreatePostModal.css"


const CreatePostModal = ({onClose, isOpen}) => {

    const [isDragOver, setIsDragOver] = useState(false)
    const [file, setFile] = useState()
    const [caption,setCaption] = useState('')

    const handleDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "copy"
        setIsDragOver(true)
    }
    const handleDrop = (event) => {
        event.preventDefault();
        const droppedFile = event.dataTransfer.files[0]
        if (droppedFile.type.startsWith("image/") || droppedFile.type.startsWith(
            'video/')) {
            setFile(droppedFile)
        }
    }
    const handleDragLeave = () => {
        setIsDragOver(false);
    }

    const hanldeCaptionChange = (e) => {
        e.preventDefault()
    }

    const handleOnChange = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        if (file && (file.type.startsWith("image/") || file.type.startsWith("video/"))) {
            setFile(file);
        } else {
            setFile(null);
            alert("PLease select an image or video")
        }
    }
    return (
        <div>
            <Modal size="4xl" onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay/>
                <ModalContent>
                    <div className={"flex justify-between py-1 px-10 items-center"}>
                        <p>Create New Post</p>
                        <Button variant={"ghost"} size={"sm"} colorSchema={"blue"}>Share</Button>
                    </div>
                    <hr/>
                    <ModalBody>
                        <div className={"h-[70vh] justify-between pb-5 flex"}>
                            <div className={"w-[50%]"}>
                                {
                                    !file && <div
                                        onDrop={handleDrop}
                                        onDragOver={handleDragOver}
                                        onDragLeave={handleDragLeave}
                                        className={"drag-drop h-full"}
                                    >
                                        <div>
                                            <FaPhotoVideo/>
                                            <p>Create Photos and Videos</p>
                                        </div>
                                        <label htmlFor="file-upload" className={"custom-file-upload"}>Select From
                                            Computer</label>
                                        <input type="file" id={"file-upload"} accept={"image/*","/video/*"}
                                               onChange={handleOnChange}/>
                                    </div>
                                }
                                {
                                    file && <img className={"max-h-full"} src={URL.createObjectURL(file)} alt=""/>
                                }
                            </div>
                            <div className={"w-[1px] border w-full"}></div>
                            <div className={"w-[50%]"}>
                                <div className={"flex items-center px-2"}>
                                    <img src="https://cdn.pixabay.com/photo/2023/04/12/21/52/mountain-7921253_640.png"
                                         className={"w-7 h-7 rounded-full"} alt=""/>
                                    <p className={"font-semibold ml-4"}>username</p>
                                </div>
                                <div>
                                    <textarea placeholder="write your caption" rows="8" className={"captionInput px-2"}
                                              name={"caption"}
                                              onChange={hanldeCaptionChange}
                                    ></textarea>
                                </div>

                                <div className={"flex justify-between px-2 opacity-70]"}>
                                    <GrEmoji />
                                    <p>{caption?.length} /250</p>
                                </div>
                                <hr/>

                                <div className={"p-2 justify-between items-center flex"}>
                                    <input type="text" placeholder="Add Location" name="location" className={"locationInput"}/>
                                    <GoLocation />
                                </div>
                                <hr/>
                            </div>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>

        </div>
    )
}
export default CreatePostModal
