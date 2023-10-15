import "./header.css"

const Header = ()=>{
    return(
        <div className="header_wrapper">
            <div className="logo_wrapper">
                <div className="myntra_logo"></div>
            </div>
            <nav className="nav_bar">
                <a href="#">Men</a>
                <a href="#">Women</a>
                <a href="#">Kids</a>
                <a href="#">Home & Living</a>
                <a href="#">Beauty</a>
                <a href="#">Studio <sup>New</sup></a>
            </nav>
            <div className="search_bar">
                <i class="fa-solid fa-magnifying-glass search-icon"></i>
                <input type="text" placeholder="Search for products, brands and more" name="" value={""} className="search_input" />
            </div>
            <div className="profile_section">Profile</div>
        </div>
    )
}

export default Header