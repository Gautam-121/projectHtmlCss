import "./filterBar.css"
import { filterContain } from "../../../../utils/constant"

const FilterBar = ()=>{
    return(
        <div className="filter_wrapper">
            <div className="filter_container">
              {
                filterContain.map((filter , index)=>{
                    return (
                        <p className="select">{filter}</p>
                    )
                })
              }
            </div>
        </div>
    )
}

export default FilterBar