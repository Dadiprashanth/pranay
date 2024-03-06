import { SET_TAG,SET_CHECK, SET_DELETE} from "./Type";

const initial = {
    tag: [],
    checked:[]
}

const Reducer = (state = initial, action) => {
    switch (action.type) {
        
        case SET_TAG: return {
            ...state,
            tag: [...state.tag,action.payload]
        }
        case SET_CHECK:
            
            return{
                ...state,
                checked:action.payload
            }

            case SET_DELETE:
            
                return{
                    ...state,
                    checked:action.payload.delVal1,
                    tag:action.payload.delItem
                }
    
            default: return state
    }
}
export default Reducer