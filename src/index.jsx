import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { ThemeProvider } from "styled-components";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = {
	neutral: "#eeeeee",
	black: "#111111",
	primary: "#ffffff",
	accent: "#98A8F8",
	accentHover: "#BCCEF8",
	lightGray: "#dddddd",
	gray: "#777777",
	darkGray: "#555555",
};

root.render(
	<React.StrictMode>
		<AuthContextProvider>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</AuthContextProvider>
	</React.StrictMode>
);
