import { AddVideo } from '../AddVideo'
import { Video } from '../Video'

import { useAxios } from '../../hooks/useAxios'

export function VideoList() {

    const {data} = useAxios('videos')

    return(
        <div className="flex flex-col flex-1 justify-center items-center">
            <ul className="flex justify-center justify-self-center max-w-5xl flex-wrap gap-3">
                {
                    data?.videos?.map((video) => (
                        <Video 
                            key={video._id}
                            id={video._id}
                            title={video.title}
                            link={video.link}
                            liked={video.liked}
                        />
                    ))
                } 
                <AddVideo />
            </ul>
        </div>
    )
}