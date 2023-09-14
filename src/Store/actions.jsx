import  superagent  from "superagent";

const api= `https://auth-api-akmm.onrender.com/api/v1/product`

const getAction =(name)=>{
    return {
        type:"GET",
        payload: name
    }
}

export const getData=()=>(dispatch)=>{
    return superagent.get(api)
    .then((data) => {
        dispatch(getAction(data.body))
    })
}