import React from "react";

interface IProps {
	name?: string;
	onClick?: any;
}
export default function Button({ name, onClick }: IProps) {
	return (
		<button
			className="flex ml-4 hover:text-teal-500 cursor-pointer" //
			name={name}
			onClick={onClick}
		>
			{name}
		</button>
	);
}
