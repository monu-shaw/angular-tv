import { createAction, props } from '@ngrx/store';
export interface product {
    "id": number,
    "title": string,
    "price": number,
    "description": string,
    "category": string,
    "image": string,
    "rating": {
      "rate": number,
      "count": number
    }
    "quantity":number
  }
export const addAction = createAction('[Counter Component] Add',props<product>());
export const removeAction = createAction('[Counter Component] Remove',props<product>());
export const incrementAction = createAction('[Counter Component] Increment',props<product>());
export const decrementAction = createAction('[Counter Component] Decrement',props<product>());
export const clearAction = createAction('[Counter Component] Clear');