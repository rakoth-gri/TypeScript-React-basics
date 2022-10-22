import React, { memo, useRef, useEffect } from "react";

// хуки
import { useAppDispatch } from "../../store/store";
import { useActionCreators } from "../../hooks/bindActions";

const Search = memo(() => {
	const { setSearch } = useActionCreators();

	const elem = useRef<HTMLInputElement>(null);

	useEffect(() => elem.current?.focus(), []);

	const SearchHandler: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => setSearch(target.value);

	return (
		<section className="search my-4 text-center">
			<input
				className="form-control"
				list="datalistOptions"
				id="exampleDataList"
				placeholder="Type to search..."
				onChange={SearchHandler}
				ref={elem}
			></input>
		</section>
	);
});

export default Search;
