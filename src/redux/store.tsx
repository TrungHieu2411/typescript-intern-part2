import { AnyAction, configureStore } from "@reduxjs/toolkit";
import thunkMiddleware, { ThunkDispatch } from "redux-thunk";
import { useDispatch } from "react-redux";
import { ticketSlice } from "./ticket/ticketSlice";

export const store = configureStore({
  reducer: {
    firestoreTicketData: ticketSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunkMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, null, AnyAction>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
