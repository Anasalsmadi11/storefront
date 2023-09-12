const initialState={
  productsCart:[]
}

export default (state=initialState, action)=>{
  const {type, payload}= action

  switch(type){
    case 'ADD':
      console.log("cart payload", payload)
    if(!state.productsCart.includes(payload)) {
      state.productsCart.push(payload)
      return {
        productsCart: [...state.productsCart]
      }

    }else{
      return productsCart
    } 
    case "REMOVE":
      let newProduct= state.productsCart.filter((item) => item !== payload)
      return {
        productsCart:newProduct
      }
    
      default:
      return state

  }
}

export const addItem= (item)=>{
    return{
      type:"ADD",
      payload: item
    }
}

export const removeItem= (item)=>{
  return{
    type:"REMOVE",
    payload: item
  }
}