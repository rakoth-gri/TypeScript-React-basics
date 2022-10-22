import React, { useMemo, useState, memo, useCallback } from "react";
import "./Pagination.css";

// хуки
import { useAppDispatch } from "../../store/store";
import { useActionCreators } from "../../hooks/bindActions";


// типы
interface IPaginationProps {
	limit: number;
	allTodosLength: number;
}

const Pagination: React.FunctionComponent<IPaginationProps> = memo(({ limit, allTodosLength }) => {
	const { setPageNumberAction } = useActionCreators();

	const [isActive, setIsActive] = useState(1);

	const array = useMemo(
		() => new Array(Math.ceil((allTodosLength - 1) / limit)).fill("").map((i, ind) => ind + 1),
		[]
	);

	const handler = useCallback((data: number) => {
		setIsActive(data);
		setPageNumberAction(data);
	}, []);

	return (
		<section className="pagination">
			{array.map((number) => (
				<button
					key={number}
					className={`${number === isActive ? "activeBtn" : ""} text text-warning`}
					onClick={() => handler(number)}
				>
					{" "}
					{number}
				</button>
			))}
		</section>
	);
});

export default Pagination;
