import { ActionType } from "../actionTypes";

interface SearchRepositoriesAction {
    type: ActionType.SEARCH_REP;
}
interface SearchRepositoriesSuccessAction {
    type: ActionType.SEARCH_REP_SUCCESS;
    payload: string[];
}
interface SearchRepositoriesErrorAction {
    type: ActionType.SEARCH_REP_ERROR;
    payload: string;
}

export type Action =
    | SearchRepositoriesAction
    | SearchRepositoriesSuccessAction
    | SearchRepositoriesErrorAction;
