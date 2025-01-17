import { configureStore } from "@reduxjs/toolkit";
import settingsSclice from "./settingsSclice";

export const store = configureStore({
    reducer: {
        settings: settingsSclice
    }
})