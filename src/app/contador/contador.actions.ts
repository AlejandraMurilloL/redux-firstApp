import { createAction, props } from '@ngrx/store';

export const incrementar = createAction('[App Component] Incrementar');
export const decrementar = createAction('[App Component] Decrementar');

export const multiplicar = createAction(
  '[Hijo Component] Multiplicar',
  props<{ numero: number }>()
);

export const dividir = createAction(
  '[Hijo Component] Dividir',
  props<{ numero: number }>()
);

export const resetear = createAction('[Nieto Component] Resetear');
