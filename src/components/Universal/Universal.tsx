import React from "react";

interface UniversalProps<T> {
	elems: T[];
	cb: (elem: T) => React.ReactElement | React.ReactNode;
}

function Universal<T>(props: UniversalProps<T>) {
	return <>{props.elems.map(props.cb)}</>;
}

export default Universal;
