import TopStoryItem from "./TopStoryItem";
import React from "react";

const TopStoryList = ({topStories}) => {
    const topStoriesItems = topStories.map((topStory, index) => {

        return(
            <>
                <TopStoryItem key={index} topStory={topStory}/>            
            </>
        )

    })
    return(
        <ul>{topStoriesItems}</ul>
    )
}
export default TopStoryList