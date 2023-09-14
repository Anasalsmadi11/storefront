const initialState={


    products:[
        // {cateAssociation:"FOOD", name:"burger",description:"burger discription",price:10, count:6},
        // {cateAssociation:"FOOD", name:"shawarma",description:"shawarma discription",price:5, count:3},
        // {cateAssociation:"FOOD", name:"flafl",description:"flafl discription",price:2, count:4},
        // {cateAssociation:"ELECTRONICS", name:"TV",description:"TV discription",price:500, count:4},
        // {cateAssociation:"ELECTRONICS", name:"iPad",description:"iPad discription",price:200, count:4},
        // {cateAssociation:"ELECTRONICS", name:"computer",description:"computer discription",price:800, count:5}
    ]
}



export default (state = initialState, action) => {

    const { type, payload } = action;
    switch (type) {
        case 'ADD':
            let counter= state.products.map((item)=>{
                console.log("payload",payload)
                if(payload.name == item.name ){
                    
                    return{
                            //   cateAssociation:item.cateAssociation,
                            //   name:item.name,
                            //   description:item.description,
                            //   price:item.price,
                            //   count:item.count -1
                            // ++++++++  or  +++++++++
                        ...item,
                        count:item.count-1  // ...item and then the property i wont to overwrite the origninal one
                        }
                    
                }else{
                    return item
                }

                
            })
        return {
           products:counter
        }
        case "REMOVE":
            let counter1= state.products.map((item)=>{
                console.log("payload",payload)
                if(payload.name == item.name ){
                    
                    return{
                          
                        ...item,
                        count:item.count+1
                        }
                    
                }else{
                    return item
                }

                
            })
        return {
           products:counter1
        }
        case 'GET':
            return{
            products: payload 
            }
        default:
            return state;
    }
}


// export const addItem= (item)=>{
//     return{
//       type:"ADD",
//       payload: item
//     }
// }
