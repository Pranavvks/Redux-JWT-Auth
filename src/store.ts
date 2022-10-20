import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import {
  TypedUseSelectorHook,
  useSelector as useGenericSelector,
  useDispatch as useGenericDispatch
} from 'react-redux';
import {apiSlice} from "./api/auth/apiSlice"
import authReducer from "./features/auth/authSlice"



export default configureStore({
  reducer: {
    [apiSlice.reducerPath] : apiSlice.reducer,
     auth: authReducer
    
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(apiSlice.middleware)
  //RTK Query to cache results
})

export type RootState = ReturnType<typeof configureStore>;
export const useAppDispatch = () => useGenericDispatch();
export const useSelector: TypedUseSelectorHook<RootState> = useGenericSelector;
export type AppThunk = ThunkAction<void , RootState , unknown , Action>

/**
 * 
 * ThunkAction : 
 * 
 */