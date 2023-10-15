import "./videoCart.css"
import { videoInfo } from "../../../../../utils/constant"

const VideoCart = ()=>{
    return(
        <div className="video_cart_erapper">
            {
                videoInfo.map((videoObj , index)=>{
                return (
                <div className="video_Cart" >
                <img alt="this is img" src={videoObj?.videoTumbnail} className="video_img" width="250px" height="150px"/>
                <div className="video_info_wrapper">
                    <img src={videoObj?.profileLogo} alt="ytbuber logo" width="40px" height="40px" className="profile_logo"/>
                    <div className="video_name_info_wrapper">
                        <span className="title_video">{videoObj?.title}</span>
                        <div className="info_wrapper">
                        <span>{videoObj?.ytbName}</span>
                        <br />
                        <div className="view_wrapper">
                            <span>{videoObj?.view}</span>
                            <span class="dot"></span>
                             <span>{videoObj?.ago}</span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
                    )
                })
            }
        </div>
    )
}

export default VideoCart