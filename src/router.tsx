import { BrowserRouter, Route, Routes } from "react-router-dom";

import Index from "./Pages/Front/index";
import Vaerksted from "./Pages/vaerksted/Vaerkted";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" Component={Index} />
				<Route path="/vaerksted" Component={Vaerksted} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
