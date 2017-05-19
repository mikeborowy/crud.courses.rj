import * as types from '../../constants/actionTypes';

export function startLoading() {
    return { type: types.LOADER_IS_LOADING }
}

export function pendingLoads() {
    return { type: types.LOADER_IS_PENDING, loader }
}

export function loadingComplete() {
    return { type: types.LOADER_IS_COMPLETE, loader }
}

export function loaderError() {
    return { type: types.LOADER_ERROR, loader }
}

