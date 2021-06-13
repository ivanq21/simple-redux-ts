import axios from "axios";
import { Dispatch } from "react";
import { ActionType } from "../actionTypes";
import { Action } from "../actions";

export const searchRepositories = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_REP
        })

        try {
            const { data } = await axios.get('https://registry.npmjs.org/-/v1/search',{
                params: {
                    text: term
                }
            })
            const names = data.objects.map((res: any) => {
                return res.package.name
            })

            dispatch({
                type: ActionType.SEARCH_REP_SUCCESS,
                payload: names
            })

        } catch(err){
            dispatch({
                type: ActionType.SEARCH_REP_ERROR,
                payload: err.message,
            })
        }
    }
}
