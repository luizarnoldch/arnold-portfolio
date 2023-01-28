import Landing from './layouts/Landing'
import Presentation from './components/Presentation'
import About from './components/About'
import Works from './components/Works'
import Services from './components/Services'
import Contact from './components/Contact'
import { useRef } from 'react'

function App() {
	const homeRef = useRef()

	return (
		<div className='bg-[#F3F1EF]'>
			<Landing>
				<Presentation />
				<About />
				<Works />
				<Services />
				<Contact />
			</Landing>
		</div>
	)
}

export default App
