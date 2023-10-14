import "./videoContainer.css"
import FilterBar from "./FilterBar/filterBar"
import VideoFrammer from "./VideoFrame/videoFrame.js"

const VideoContainer = ()=>{
    return(
        <div className="videoContainer_wrapper">
            <FilterBar/>
            <VideoFrammer/>
        </div>
    )
}

export default VideoContainer