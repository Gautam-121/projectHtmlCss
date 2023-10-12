import "./header.css";

const Header = () => {
  return (
    <div className="header_wrapper">
      <div className="header_logo_conatiner">
        <i class="fa-solid fa-bars menu_bar"></i>
        <div className="logo_wrapper">
          <div className="logo"></div>
        </div>
      </div>
      <div className="header_search_container">
        <div className="search_wrapper">
          <input
            type="text"
            placeholder="Search"
            value=""
            name=""
            class="search_bar"
          />
          <div className="search_Wrapper">
            <div className="search_icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="mike_icon">
              <i class="fa-solid fa-microphone"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="header_signIn_container">
         <i class="fa-solid fa-ellipsis-vertical"></i>
         <div className="signIn_Wrapper">
         <i class="fa-regular fa-user"></i>
         sign in
         </div>
      </div>
    </div>
  );
};

export default Header;
