
// ********************** Como referencia ******************************

import { createReducer, on } from "@ngrx/store";
import { decrementar, incrementar } from "./contador.actions";

// export function contadorReducer(state: number = 10, action: Action) {

//   switch (action.type) {
//     case incrementar.type:
//       return state + 1;
//     case decrementar.type:
//       return state - 1;
//     default:
//       return state;
//   }
// }

// La misma funcionalidad anterior pero con el createReducer de ngRX

export const initialState = 20;

export const contadorReducer = createReducer(
  initialState,
  on(incrementar, (state) => state + 1),
  on(decrementar, (state) => state - 1),
);
