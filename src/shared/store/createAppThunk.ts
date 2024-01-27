import { AsyncThunk, AsyncThunkOptions, AsyncThunkPayloadCreator, Dispatch, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export type AsyncThunkConfig = {
    state?: unknown;
    dispatch?: Dispatch;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
};

type TypedCreateAsyncThunk<ThunkApiConfig extends AsyncThunkConfig = object> = <Returned, ThunkArg = void>(
    typePrefix: string,
    payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, ThunkApiConfig>,
    options?: AsyncThunkOptions<ThunkArg, ThunkApiConfig>
  ) => AsyncThunk<Returned, ThunkArg, ThunkApiConfig>;

export const createAppAsyncThunk: TypedCreateAsyncThunk<{
    state: RootState;
  }> = createAsyncThunk;