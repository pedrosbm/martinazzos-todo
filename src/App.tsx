import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import Done from './pages/Done'
import Store from './pages/Store'

function App() {
	return (
		<>
			<Router>
				{/* Routes */}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/completed" element={<Done />} />
					<Route path="/store" element={<Store />} />
				</Routes>
			</Router>
		</>
	)
}

export default App