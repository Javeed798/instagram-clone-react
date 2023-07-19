import React from 'react'
import SuggestionCard from "../Suggestion/SuggestionCard";

const HomeRight = () => {
    return (
        <div>
            <div>
                <div className={"flex justify-between items-center"}>
                    <div className={"flex items-center"}>
                        <div>
                            <img className={"w-12 h-12 rounded-full"} src="https://cdn.pixabay.com/photo/2022/06/01/05/52/fruit-7234847_640.jpg" alt="img"/>
                        </div>
                        <div className={"ml-3"}>
                            <p>FullName</p>
                            <p className={"opacity-70"}>username</p>
                        </div>
                    </div>
                    <div>
                        <p className={"text-blue-700 font-bold cursor-pointer"}>Switch</p>
                    </div>
                </div>
                <div className={"space-y-5 mt-5"}>
                    {
                        [1,1,1,1,1,].map((item) => (
                            <SuggestionCard />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default HomeRight
