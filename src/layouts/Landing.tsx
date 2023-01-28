import { ReactElement } from 'react'
import Navbar from '../components/Navbar'

type ChildrenType = {
	children?: ReactElement | ReactElement[] | any
}

const Landing = ({ children }: ChildrenType): ReactElement => {
	return (
		<div className='mx-auto container'>
				<Navbar />
				{children}
		</div>
	)
}

export default Landing
