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
        <div className="home background">
          <i class="fa-solid fa-house"></i>
          <p>Home</p>
        </div>
        <div className="home">
          <i class="fa-solid fa-house"></i>
          <p>Shorts</p>
        </div>
      </div>
      <div className="box1">
        <div className="home background">
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
    </div>
  );
};

export default NavigationContainer;
