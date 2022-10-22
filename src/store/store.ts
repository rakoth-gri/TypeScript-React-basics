import { createStore, applyMiddleware, combineReducers } from "redux";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

// сервисы
import { LS } from "../services/ls";

// константы
import { completedKey } from "../const/data";

// редьюсеры
import { allReducers } from "./allReducers";

export const rootReducer = combineReducers(allReducers);

const composedEnhancers = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(rootReducer, composedEnhancers);

// Подписываемся на стор

store.subscribe(() => {
	let completed = store.getState().todosReducer.completed;
    LS.setToLS(completedKey, completed)
});

// типизируем составные стора и хуки:
// useSelector
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// типизируем диспатч
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
