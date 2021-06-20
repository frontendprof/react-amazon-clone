
export const initialState={
    basket:[]
}

export const getBasketTotal=(basket)=>{
    return basket?.reduce((amount,item)=>item.price+amount,0)
}

function reducer(state,action){
    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket:[...state.basket, action.item]
            }
        case "REMOVE_FROM_BASKET":
            let newBasket=[...state.basket];

            const index=state.basket.findIndex(bItem=>bItem.id===action.id)
            if(index>=0){
                newBasket.splice(index,1)
            }
            return {...state,basket:newBasket}
        default:
            return state;
    }
}

export default reducer;