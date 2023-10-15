import "./main.css"
import { offers  , categories} from "../../utils/contant"

const Main = ()=>{
    return(
        <div className="main_contain_wrapper">
            <div className="banner_wrapper">
                <div className="banner"></div>
            </div>
            <div className="category_title">
                <h4>Medal Worthy Brands To Bag</h4>
            </div>
            <div className="categoty_item_wrapper">
                {
                    offers.map((offer , index)=>(
                        <div key={index}>
                            <a href="1" key={index}><img src={offer} alt=""/></a>
                        </div>
                    ))
                }
            </div>
            <div className="category_title">
                <h4>Shop By Category</h4>
            </div>
            <div className="categoty_item_wrapper">
                {
                    categories.map((category , index)=>(
                        <div key={index}>
                            <a href="1" key={index}><img src={category} alt=""/></a>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Main