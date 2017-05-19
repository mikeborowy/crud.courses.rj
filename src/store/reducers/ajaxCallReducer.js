import * as types from '../../constants/actionTypes';
import initialState from '../../constants/initialState';

function actionTypeEndsInSuccess(type) {
    return type.substring(type.length - 8) == '_SUCCESS';
}

export function ajaxCallsInProgress(prevState = initialState.ajaxCallsInProgress, action) {
    if (action.type == types.AJAX_CALL_START) {
        return prevState + 1;
    } else if (action.type == types.AJAX_CALL_ERROR || actionTypeEndsInSuccess(action.type)) {
        return prevState - 1;
    }

    return prevState;
}