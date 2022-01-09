import Navbar from "./components/Navbar";
import PreNavBar from "./components/PreNavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<PreNavBar />
			<Navbar />
		</Router>
	);
}

export default App;
