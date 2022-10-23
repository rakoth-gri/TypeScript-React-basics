import ClipLoader from "react-spinners/ClipLoader";

// константы
import { spinner } from "../../const/data";

type TLoading = { loading: boolean };

const Loading = ({ loading }: TLoading) => {
	return (
		<div>
			<ClipLoader color="red" loading={loading} cssOverride={spinner} size={75} />
		</div>
	);
};

export default Loading;
