import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../../app/store"
import { ActionCreator, bindActionCreators } from "@reduxjs/toolkit"

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

type ActionCreatorObject = Record<string, ActionCreator<unknown>>;

export function useBindActionCreators<P extends ActionCreator<unknown>>(action: P): P;
export function useBindActionCreators<P extends ActionCreatorObject>(actions: P): P;

export function useBindActionCreators<P extends ActionCreator<unknown> | ActionCreatorObject>(actions: P): P {
    const dispatch = useDispatch();
    return bindActionCreators(actions as unknown as ActionCreatorObject, dispatch) as P
}