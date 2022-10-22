import ClipLoader from "react-spinners/ClipLoader";

// константы
import { spinner } from "../../const/data";

// хуки
import { useAppSelector } from "../../store/store";

const Loading = () => {
	const loading = useAppSelector((state) => state.todosReducer.loading);

	return (
		<div>
			<ClipLoader color="red" loading={loading} cssOverride={spinner} size={75} />
		</div>
	);
};

export default Loading;
