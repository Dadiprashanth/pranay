import { SET_CHECK, SET_TAG } from "./Type";
import { SET_DELETE } from "./Type";

export const setTag = (tag) => {
    return {
        type: SET_TAG,
        payload: tag
    }
}

export const setCheck= (tag) => {
    return {
        type: SET_CHECK,
        payload: tag
    }
}

export const delFilter= (obj) => {
    return {
        type: SET_DELETE,
        payload: obj
    }
}