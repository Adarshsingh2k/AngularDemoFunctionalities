import { createAction, props } from "@ngrx/store";

export const loginRequest= createAction(
    'getIn',
    props<{ email:string,password:string}>()
)