import { ADD_TASK,DELETE_TASK, EDIT_TASK, FILTER_TASK, HANDLE_DATE_CHANGE, HANDLE_DESCRIPTION_CHANGE, HANDLE_FILTER_CHANGE, HANDLE_TITLE_CHANGE } from "./actions-type";

export const addTask = task => {
    return {
        type: ADD_TASK,
        payload: task
    }
}
export const deleteTask = key => {
    return {
        type: DELETE_TASK,
        payload: key
    }
}

// export const handlefilterchange = value => {
//     return {
//         type: HANDLE_FILTER_CHANGE,
//         payload: value
//     }
// }
// export const handletitlechange = value => {
//     return {
//         type: HANDLE_TITLE_CHANGE,
//         payload: value
//     }
// }
// export const handledescriptionchange = value => {
//     return {
//         type: HANDLE_DESCRIPTION_CHANGE,
//         payload: value
//     }
// }
// export const handledatechange = value => {
//     return {
//         type: HANDLE_DATE_CHANGE,
//         payload: value
//     }
// }
export const editTask = key => {
    return {
        type: EDIT_TASK,
        payload: key
    }
}