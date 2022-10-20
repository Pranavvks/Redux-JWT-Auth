import {createSlice, PayloadAction} from "@reduxjs/toolkit"


export interface User 
{
    email: string
    first_name:string
    last_name : string 
    
}

export interface Token 
{
    token:string
}

const initialState : User & Token = {
    email : "" ,
    first_name : "" ,
    last_name : "" ,
    token : ""

}

const authSlice = createSlice({
    name: 'auth' ,
    initialState: initialState ,
    reducers: {
        setCredentials: (state,action:PayloadAction<User&Token>)=>{
            
            state.email = action.payload.email ;
            state.first_name = action.payload.first_name ;
            state.last_name = action.payload.last_name ;
            state.token = action.payload.token ;
        },
        logOut : (state , action)=>{
            state.email = "" 
            state.first_name = ""
            state.last_name = ""
            state.token = ""
        }
    }
});

export  const {setCredentials ,logOut} = authSlice.actions ;

export default authSlice   ;

export const selectCurrentUser = (state: { auth: { user: User } })=> state.auth.user ;

export const selectCurrentToken  = (state:{auth:{token:Token}})=> state.auth.token ;