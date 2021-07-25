import { add,update} from "./actions";

const initialState = {
    allContacts : []
};

const contactReducer = (state = initialState , action) =>{
    switch(action.type){
        case add:
            return {
                ...state,
                allContacts:[action.payload]
            };
        case update:
            return{
                ...state,
                allContacts:[allContacts.map(i=>{
                    if(i.id === action.payload.id){
                        i.click += 1
                    }
                })]
            }
        
        default:
            return state;

    }
}
export default contactReducer;