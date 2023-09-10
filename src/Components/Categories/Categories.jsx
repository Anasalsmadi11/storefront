// import React from 'react'
import { connect } from "react-redux";
import Products from "../Products/Products";
import { active} from "../../Store/categories";

function Categories(props) {
  return (
    <div >
        {props.activeChange.Categories.map((category,idx)=>{
            return(
                <span  key={idx} onClick={()=>props.active(category.normalizedName)}>
                    {` ${category.normalizedName} |`}
                </span>
            )
        })}
        <section>
             <Products/>
        </section>
    </div>
  )
}
const mapStateToProps = (state) => ({ 
    activeChange: state.activateReducer
    
})
const mapDispatchToProps = {active}; 
export default connect(mapStateToProps,mapDispatchToProps)(Categories);

