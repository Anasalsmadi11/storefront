const initialState={
    Categories:[
        {normalizedName:"ELECTRONICS",displayName:"ELECTRONICS",description:"Elcitronics Description Goes Here"},
        {normalizedName:"FOOD",displayName:"FOOD",description:"Food Description Goes Here"},
        
    ],
    activeCategory:'' ,
    products:[
        {cateAssociation:"FOOD", name:"burger",description:"burger discription",price:10, count:0},
        {cateAssociation:"FOOD", name:"shawarma",description:"shawarma discription",price:5, count:0},
        {cateAssociation:"FOOD", name:"flafl",description:"flafl discription",price:2, count:0},
        {cateAssociation:"ELECTRONICS", name:"TV",description:"TV discription",price:500, count:0},
        {cateAssociation:"ELECTRONICS", name:"iPad",description:"iPad discription",price:200, count:0},
        {cateAssociation:"ELECTRONICS", name:"computer",description:"computer discription",price:800, count:0}
    ]
}

export default (state= initialState, action)=>{
    const {type, payload}= action

    switch(type){
        case 'ACTIVATE':
            let activeCategory= payload
        console.log("category",activeCategory)
        return {
            Categories:state.Categories,
            activeCategory:activeCategory,
            products: state.products
        }
        
        default:
            return initialState
    }
}

export const active=(name)=>{
    return {
        type:"ACTIVATE",
        payload: name
    }
}