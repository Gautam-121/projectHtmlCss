import "./videoCart.css"
import { videoInfo } from "../../../../../utils/constant"

const VideoCart = ()=>{
    return(
        <div className="video_cart_erapper">
            {
                videoInfo.map((videoObj , index)=>{
                return (
                <div className="video_Cart" >
                <img alt="this is img" src="https://i.ytimg.com/vi/vFxQyZX84Ro/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAsighpJ967W94onqVm-q1xZ_Zo7w" className="video_img" width="250px" height="150px"/>
                <div className="video_info_wrapper">
                    <img src="https://yt3.ggpht.com/q4pQdGZdT9Suk5Yu7cm0KI9pLMSaFhEeKQtyZCYjFeJRcbODjS4V5J9AQhN96TYOHXI-rgZ5TA=s68-c-k-c0x00ffffff-no-rj" alt="ytbuber logo" width="40px" height="40px" />
                    <div className="video_name_info_wrapper">
                        <span className="title_video">How Dukkan Moved Out Of Cloud and are hosting their infra on Bare Metal ft...</span>
                        <div className="info_wrapper">
                        <span>Asli Engineering by Arpit Bhayani</span>
                        <br />
                        <div className="view_wrapper">
                            <span>20K views</span>
                            <span class="dot"></span>
                             <span>1 day ago</span>
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