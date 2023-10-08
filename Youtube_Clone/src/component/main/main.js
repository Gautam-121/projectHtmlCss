import NavigationContainer from "./navigationContainer/navigation";
import VideoContainer from "./VideoContainer/videoContainer";
import "./main.css"

const Main = ()=>{
    return(
        <div className="main_conatainer">
            <NavigationContainer/>
            <VideoContainer/>
        </div>
    )
}

export default Main