
import { connect } from "react-redux";
import Products from "../Products/Products";
import { active} from "../../Store/categories";
// import SimpleCart from "../SimpleCart/SimpleCart ";
function Categories(props) {
  return (
    <div >
        {props.activeChange.Categories.map((category,idx)=>{
            return(
                <span key={idx}>
                <span  key={idx} onClick={()=>props.active(category.normalizedName)}>
                    {` ${category.normalizedName} |`}
                </span>
            
                {/* {category.normalizedName === props.activeChange.activeCategory && <div>{category.description}</div>} */}
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

