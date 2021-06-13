import { Action } from "../actions";
import { ActionType } from "../actionTypes";

interface ReposetoriesState {
    loading: boolean;
    error: string | null;
    data: string[];
}

const initialState = {
    loading: false,
    error: null,
    data: [],
}

const reducer = (
    state: ReposetoriesState = initialState,
    action: Action

): ReposetoriesState => {
    switch(action.type) {
        case ActionType.SEARCH_REP:
            return { loading: true, error: null, data: [] };
        case ActionType.SEARCH_REP_SUCCESS:
            return { loading: false, error: null, data: action.payload };
        case ActionType.SEARCH_REP_ERROR:
            return { loading: false, error: action.payload, data: [] };
        default:
            return state;
    }
}

export default reducer;