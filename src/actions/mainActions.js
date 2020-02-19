//adds feature
export const ADD_FEATURE = "ADD_FEATURE"

export const Add = (feature) => {
    return {type: ADD_FEATURE, payload: feature}
}

//removes feature
export function Remove() {
    return {type:'REMOVE_FEATURE'}
}

//updates price
export function Update() {
    return {type:'UPDATE_TOTAL'}
}