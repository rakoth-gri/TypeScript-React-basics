import React from "react";

interface IHeaderProps {
	children: React.ReactElement;
}

const Header: React.FC<IHeaderProps> = ({ children }) => {
	return <header>{children}</header>;
};

export default Header;
