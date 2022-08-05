import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main'

function App() {
	const [mode, setMode] = useState({
		darkMode: false,
	})

	function switchMode() {
		setMode(prevMode => !prevMode)
	}

	return (
		<div>
			<Header onHandleClick={switchMode} mode={mode} />
			<Main mode={mode} />
		</div>
	)
}

export default App
