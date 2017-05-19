import * as types from '../../constants/actionTypes';
import initialState from '../../constants/initialState';


export default function loaderReducer(prevState = initialState.loader, action) {

    console.log(`action`, prevState.loader)

    switch (action.type) {
        case types.LOADER_IS_LOADING:
            return prevState
            break;

        case types.LOADER_IS_PENDING:
            return action.loader;
            break;

        case types.LOADER_IS_COMPLETE:
            return prevState;
            break;

        case types.LOADER_ERROR:
            return [
                ...prevState,
                Object.assign({}, prevState, action.loader.error)
                ];
            break;
        default:
            return prevState;
    }

}