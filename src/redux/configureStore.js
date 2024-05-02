import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

export function configureAppStore() {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  });

  // Обновление состояния корзины и сохранение его в Local Storage
  store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem("cart", JSON.stringify(state.products.cart));
  });

  return store;
}
