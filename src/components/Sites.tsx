import { ReactElement, useState } from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import Sanwitch from '../assets/img/sanwitch.png'
import Xmark from '../assets/img/xmark.png'

const Sites = (): ReactElement => {
	const NavSites = [
		{
			name: 'Home',
			route: './',
			refer: "#home",
		},
		{
			name: 'About',
			route: './about',
			refer: "#about",
		},
		{
			name: 'Works',
			route: './work',
			refer: "#works",
		},
		{
			name: 'Services',
			route: './services',
			refer: "#services",
		},
		{
			name: 'Contact',
			route: './contact',
			refer: "#contact",
		},
	]

	const smallMediaQuery = useMediaQuery("(min-width: 380px)")
	const [isMenuToggled, setIsMenuToggled] = useState<Boolean>(false);

	return (
		<>
			<ul className='flex items-center justify-center gap-14'>
				{NavSites.map((item, index) => (
					<li
						key={index}
						className='no-underline decoration-[#E94E35] decoration-2 hover:cursor-pointer hover:underline hover:underline-offset-8'
					>
						<a href={item.refer}>
							{item.name}
						</a>
					</li>
				))}
			</ul>
		{/* {
			smallMediaQuery ? 
			<ul className='flex items-center justify-center gap-14'>
				{NavSites.map((item, index) => (
					<li
						key={index}
						className='no-underline decoration-[#E94E35] decoration-2 hover:cursor-pointer hover:underline hover:underline-offset-8'
					>
						<a href={item.refer}>
							{item.name}
						</a>
					</li>
				))}
			</ul> :
			<div className='relative flex flex-col'>
				{
					isMenuToggled ? 
					<div className='flex flex-col absolute right-0 text-right bg-[#E94E35] pr-4 pt-4 h-screen gap-8'>
						<button
							onClick={() => setIsMenuToggled(prev => !prev)}
							className='flex justify-end mt-4'
						>
							<img src={Xmark} alt="xmark" className='h-6 w-6 flex' />
						</button>
						<ul className='flex flex-col gap-4'>
							{NavSites.map((item, index) => (
								<li
									key={index}
									className='no-underline decoration-[#E94E35] decoration-2 hover:cursor-pointer hover:underline hover:underline-offset-8'
								>
									<a href={item.refer}>
										{item.name}
									</a>
								</li>
							))}
						</ul>
					</div> : 
					<button
						onClick={() => setIsMenuToggled(prev => !prev)}
					>
						<img src={Sanwitch} alt="sanwitch" className='h-6 w-6 flex mr-4' />
					</button>
				}
			</div>
		} */}
		</>
	)
}

export default Sites
