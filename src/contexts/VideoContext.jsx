import { createContext, useState } from "react";

import api from '../services/api'

import { useAxios } from "../hooks/useAxios";

export const VideoContext = createContext()

export function VideoContextProvider({children}) {
    const { data, mutate } = useAxios('videos')

    const [title, setTitle] = useState("")
    const [link, setLink] = useState("")
    const [id, setId] = useState(false)

    function titleHandler(event) {
        setTitle(event.target.value)
    }

    function linkHandler(event) {
        setLink(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()

        const video = {
            title, 
            link
        }

        if(id){
            api.put(`videos/${id}`, video)

            const updateVideos = {
                videos: data.videos?.map((video) => {
                    if(video._id === id){
                        return {...video, title, link}
                    }
                    return video
                })
            }


            mutate(updateVideos, false)
        } else{
            api.post("video", video)

            const updateVideos = {
                videos: [...data.videos, video]
            }

            console.log(updateVideos)

            mutate(updateVideos, false)
        }
    }

    function handleEdit(videoId, videoTitle, videoLink) {
        setTitle(videoTitle)
        setLink(videoLink)
        setId(videoId)
        console.log(videoTitle, videoLink)
    }

    function handleLiked(id) {
        api.patch(`videos/${id}`)

        const updateVideos = {
            videos: data.videos?.map((video) => {
                if(video._id === id){
                    return {...video, title: video.title, link: video.link, liked: !video.liked}
                }
                return video
            })
        }
        console.log(updateVideos)

        mutate(updateVideos, false)
    }

    function handleDelete(id) {
        api.delete(`videos/${id}`)

        const updateVideos = {
            videos: data.videos?.filter((video) => video._id !== id)
        }

        mutate(updateVideos, false)
    }

    return(
        <VideoContext.Provider value={{title, setTitle, link, setLink, titleHandler, linkHandler, handleSubmit, handleEdit, id, setId, handleLiked, handleDelete}}>
            {children}
        </VideoContext.Provider>
    )
}