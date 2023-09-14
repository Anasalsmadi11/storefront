const initialState={
    Categories:[
        {normalizedName:"ELECTRONICS",displayName:"ELECTRONICS",description:"Elcitronics Description Goes Here"},
        {normalizedName:"FOOD",displayName:"FOOD",description:"Food Description Goes Here"},
        {normalizedName:"GAMES",displayName:"GAMES",description:"Games Description Goes Here"},
        {normalizedName:"WEAPONS",displayName:"WEAPONS",description:"Weapons Description Goes Here"},
        
    ],
    activeCategory:'' ,
}

export default (state= initialState, action)=>{
    const {type, payload}= action

    switch(type){
        case 'ACTIVATE':
            let activeCategory= payload
        console.log("category",activeCategory)
        return {
            Categories:state.Categories,
            activeCategory:activeCategory
            // products: state.products
        }
        
        default:
            return state
    }
}

export const active=(name)=>{
    return {
        type:"ACTIVATE",
        payload: name
    }
}