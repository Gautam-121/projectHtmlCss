import "./header.css"
import {useState} from "react"

const Header = ()=>{
    const [searchItem , setSearchItem] = useState("")
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
                <div className="search-icon">
                    <i class="fa-solid fa-magnifying-glass "></i>
                </div>
                <input type="text" placeholder="Search for products, brands and more" className="search_input" value={searchItem} onChange={(e)=>setSearchItem(e.target.value)
}/>
            </div>
            <div className="profile_section">
                <div className="profile_container">
                   <i class="fa-regular fa-user"></i>
                   <span>Profile</span>
                </div>
                <div className="profile_container">
                   <i class="fa-regular fa-heart"></i>
                   <span>Wishlist</span>
                </div>
                <div className="profile_container">
                    <i class="fa-solid fa-bag-shopping"></i>
                   <span>Bag</span>
                </div>
            </div>
        </div>
    )
}

export default Header