// Actions :
import store, { RootState } from '../../store';
import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react'
import { setCredentials,logOut } from '../../features/auth/authSlice';

interface MyState
{
    LoginReducer : 
    {
        token : String
    }

}



const baseQuery = fetchBaseQuery({
    baseUrl: "http:localhost:8080",
    credentials: 'include' ,
    //sending http-only secure cookie
    //With every query the cookie is being sent 
    prepareHeaders:(headers , {getState})=>{

    }    

})




const baseQueryWithReauth:BaseQueryFn<string | FetchArgs , unknown , FetchBaseQueryError> = async (args,api ,extraOptions)=>{
    let result = await baseQuery(args,api,extraOptions);
    if(result?.error?.status === 403)
    {
        console.log("Sending refresh token");
    
    const refreshResult = await baseQuery('/refresh' , api , extraOptions);
    console.log(refreshResult);


    if(refreshResult?.data)
    {
       
        const {user} = api.getState ;
        api.dispatch(setCredentials({...refreshResult.data} ,user ))
    }
    else 
    {
       api.dispatch(logOut());
    }
    // backend endpoint to get the refreshToken
}
    return result ;

}

export const apiSlice = createApi({
    baseQuery:baseQueryWithReauth,
    endpoints:builder => ({

    })
    // Extended API Slices
})


/**
 * export const saveValue = (value: number): (dispatch: Dispatch<SaveValue>, getState: () => State): void => {
    return (dispatch: Dispatch<SaveValue>, getState: () => State): void => {
        axios.post('www.exampleurl.com', value)
            .then((response) => {
                const someValueFromState = getState().stateValue;
                const payload = {...response, someValueFromState}
                dispatch({ type: constants.SAVE_VALUE, payload });
            });
    };
};

interface MyState {
    LoginPageReducer: {
        token: string;
    }
}

 */