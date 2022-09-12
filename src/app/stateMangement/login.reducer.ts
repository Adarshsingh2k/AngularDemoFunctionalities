import { createReducer, on } from "@ngrx/store"
import { loginRequest } from "./login.actions"
import { initialState } from "./login.state"


const _loginReducer=createReducer(initialState,
        on(loginRequest,(state,action)=>{
            console.log(action)
            return{
                ...state,
                email:action.email,
                password:action.password
            }
        })
    )

export function loginReducer(state: any,action: any){
    return _loginReducer(state,action)
}


