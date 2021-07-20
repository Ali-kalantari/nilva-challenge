import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import contactReducer from "./reducer";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";

const rootreducer = combineReducers({
  contacts: contactReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["contacts"],
};
const persistedReducer = persistReducer(persistConfig, rootreducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistedStore = persistStore(store);
