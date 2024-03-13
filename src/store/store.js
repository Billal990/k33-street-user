import { configureStore  } from "@reduxjs/toolkit";
import createUserSlice from "./createUserSlice";



const store = configureStore({
    reducer: {
        createUser: createUserSlice,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store;