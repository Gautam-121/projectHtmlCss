import "./videoCart.css"

const VideoCart = ()=>{
    return(
        <div className="video_cart_erapper">
            <div className="video_Cart">
                <img alt="this is img" src="https://i.ytimg.com/vi/vFxQyZX84Ro/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAsighpJ967W94onqVm-q1xZ_Zo7w" className="video_img" width="250px" height="150px"/>
                <div className="video_info_wrapper">
                    <img src="" alt="" />
                    <div className="video_name_info_wrapper">
                        <p>How Dukkan Moved Out Of Cloud and are hosting their infra on Bare Metal ft...</p>
                        <p>Asli Engineering by Arpit</p>
                    </div>

                </div>
            </div>
            <div className="video_Cart">
                <img alt="this is img" src="https://i.ytimg.com/vi/vFxQyZX84Ro/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAsighpJ967W94onqVm-q1xZ_Zo7w" className="video_img" width="250px" height="150px"/>
            </div>
        </div>
    )
}

export default VideoCart