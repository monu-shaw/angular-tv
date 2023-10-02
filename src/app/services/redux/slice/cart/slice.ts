import { createReducer, on } from '@ngrx/store';
import { addAction, removeAction, clearAction, product, incrementAction, decrementAction } from './actions';



export const initialState:Array<any> = [];

export const cartReducer = createReducer(
  initialState,
  on(addAction, (state,actions) => {
    state = [...state,...[{...actions,quantity:1}]]
    return state
  }),
  on(removeAction, (state,actions) => {
    return state.filter(i=>i.id!==actions.id);
  }),
  on(incrementAction,(state,action)=>{
    return state.map(i=>i.id===action.id?({...i,quantity:i.quantity+1}):i)
  }),
  on(decrementAction,(state,action)=>{
    return state.map(i=>i.id===action.id?({...i,quantity:i.quantity-1}):i)
  }),
  on(clearAction, (state) => [])
);