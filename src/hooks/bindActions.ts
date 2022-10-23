import { bindActionCreators } from "redux";
import { useAppDispatch } from "../store/store";
import { allActions } from "../store/allActions";

export const useActionCreators = () => {
	const dispatch = useAppDispatch();
	return bindActionCreators(allActions, dispatch);
};
