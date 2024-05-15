import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./router";

import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
	palette: {
		primary: {
			main: "#f44336",
		},
		secondary: {
			main: "#3f51b5",
		},
	},
});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Router />
		</ThemeProvider>
	</React.StrictMode>
);
