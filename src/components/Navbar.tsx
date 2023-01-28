import { ReactElement } from 'react'
import LogoArnold from './Logo'
import Sites from './Sites'

const Navbar = (): ReactElement => {
	return (
		<div className='container mx-auto fixed z-10 flex h-24 w-full items-center justify-between bg-[#F3F1EF] rounded-lg'>
			<LogoArnold />
			<Sites />
		</div>
	)
}

export default Navbar
