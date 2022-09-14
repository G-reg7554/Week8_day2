import React, {useState, useEffect} from "react"
import TopStoryItem from "../components/TopStoryItem";
import TopStoryList from "../components/TopStoryList";

const HackerNewsContainer = () => {
    const [topStories, setTopStories] = useState([]);
    const [story, setStory] = useState([]);

    useEffect(()=>{
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then((res)=> res.json())
        .then((data) => {
            const newData = data.slice(0, 20)
            const storyPromises = newData.map((id) => return (fetch(id).then((res)=> res.json())))
            //map and fetch for each id in the data

        
            //promise.all to set
        })
    },[])
    


Promise.all(topStoryPromises).then((storyTitles)=>{
    setStory(storyTitles)
})

    return(
        <>
            <TopStoryList topStories={topStories} />
        </>
    )
}

export default HackerNewsContainer