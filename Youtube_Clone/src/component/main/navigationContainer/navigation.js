import "./navigation.css";

const NavigationContainer = () => {
  return (
    <div className="navigation_wrapper">
      <div className="box1">
        <div className="home background">
          <i class="fa-solid fa-house"></i>
          <p>Home</p>
        </div>
        <div className="home">
          <i class="fa-solid fa-house"></i>
          <p>Shorts</p>
        </div>
        <div className="home">
          <i class="fa-solid fa-house"></i>
          <p>Subscriptions</p>
        </div>
      </div>
      <div className="box1">
        <div className="home">
          <i class="fa-solid fa-house"></i>
          <p>Library</p>
        </div>
        <div className="home">
          <i class="fa-solid fa-house"></i>
          <p>History</p>
        </div>
      </div>
      <div className="box1">
        <div className="home">
          Sign in to like videos, comment, and subscribe.
        </div>
        <div className="header_signIn_container">
          <i class="fa-solid fa-ellipsis-vertical"></i>
          <div className="signIn_Wrapper">
            <i class="fa-regular fa-user"></i>
            sign in
          </div>
        </div>
      </div>
      <div className="box1">
        <p className="title">Explore</p>
        <div className="home">
          <i class="fa-solid fa-house"></i>
          <p>Trending</p>
        </div>
        <div className="home">
          <i class="fa-solid fa-house"></i>
          <p>Shopping</p>
        </div>
        <div className="home">
          <i class="fa-solid fa-house"></i>
          <p>Movies</p>
        </div>
        <div className="home">
          <i class="fa-solid fa-house"></i>
          <p>Live</p>
        </div>
        <div className="home">
          <i class="fa-solid fa-house"></i>
          <p>Music</p>
        </div>
        <div className="home">
          <i class="fa-solid fa-house"></i>
          <p>Gaming</p>
        </div>
        <div className="home">
          <i class="fa-solid fa-house"></i>
          <p>News</p>
        </div>
        <div className="home">
          <i class="fa-solid fa-house"></i>
          <p>Sports</p>
        </div>
        <div className="home">
          <i class="fa-solid fa-house"></i>
          <p>Learning</p>
        </div>
        <div className="home">
          <i class="fa-solid fa-house"></i>
          <p>Podcasts</p>
        </div>
      </div>
      <div className="box1">
        <div className="home">
          <i class="fa-solid fa-house"></i>
          <p>Browse Channel</p>
        </div>
      </div>
      <div className="box1">
      <p class="headline_ytb"> More from YouTube</p>
        <div className="home">
          <i class="fa-solid fa-house"></i>
          <p>Ytb Premium</p>
        </div>
        <div className="home">
          <i class="fa-solid fa-house"></i>
          <p>Ytb Music</p>
        </div>
        <div className="home">
          <i class="fa-solid fa-house"></i>
          <p>Ytb Kids</p>
        </div>
      </div>
      <div className="box1">
        <div className="home">
          <i class="fa-solid fa-house"></i>
          <p>Settings</p>
        </div>
        <div className="home">
          <i class="fa-solid fa-house"></i>
          <p>Report history</p>
        </div>
        <div className="home">
          <i class="fa-solid fa-house"></i>
          <p>Help</p>
        </div>
        <div className="home">
          <i class="fa-solid fa-house"></i>
          <p>Send feedback</p>
        </div>
      </div>
    </div>
  );
};

export default NavigationContainer;
