import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	// <React.StrictMode>
	<div className="fixed flex inset-0 bg-zinc-800 justify-center text-white sm:px-8">
		<div className="flex w-full h-full max-w-7xl lg:px-8 ">
			<div className="flex w-full bg-zinc-900 ring-1 ring-zinc-300/20 ">
				<App />
			</div>
		</div>
	</div>
	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
