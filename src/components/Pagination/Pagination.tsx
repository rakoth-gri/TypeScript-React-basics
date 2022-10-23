import React, { useMemo, useState, memo, useCallback } from "react";
import "./Pagination.css";

// хуки
import { useAppDispatch} from "../../store/store";

// типы
interface IPaginationProps {
	limit: number;
	length: number;
	setPage: (data: number) => void;
}

const Pagination: React.FunctionComponent<IPaginationProps> = memo(({ limit, length, setPage }) => {

	const [isActive, setIsActive] = useState(0);

	const array = useMemo(() => new Array(Math.ceil((length) / limit)).fill("").map((_, ind) => ind), []);

	const handler = useCallback((data: number) => {
		setIsActive(data);
		setPage(data);
	}, []);

	return (
		<section className="pagination">
			{array.map((item) => (
				<button
					key={item}
					className={`${item === isActive ? "activeBtn" : ""} text text-warning`}
					onClick={() => handler(item)}
				>
					{" "}
					{item + 1}
				</button>
			))}
		</section>
	);
});

export default Pagination;
