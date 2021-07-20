import { add} from "./actions";

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
        
        default:
            return state;

    }
}
export default contactReducer;