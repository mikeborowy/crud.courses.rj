import * as types from '../../constants/actionTypes';

export function ajaxCallStart(){
    return { type: types.AJAX_CALL_START }
}

export function ajaxCallEnd(){
    return { type: types.AJAX_CALL_END }
}

export function ajaxCallError(){
    return { type: types.AJAX_CALL_ERROR }
}