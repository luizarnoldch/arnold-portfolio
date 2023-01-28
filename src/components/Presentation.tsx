import Arnold from '../assets/img/arnold.png'
import Band from './Band'

const Presentation = () => {
	return (
		<div className='item-center layout-height flex w-full' id="home">
			<div className='m-auto flex w-3/5 flex-col gap-10'>
				<div>
					<h1>
						HI, I'M ARNOLD. <br />
						I'M SOFTWARE ENGINEER <br />
						FROM LIMA - PERÚ
					</h1>
				</div>
				<div>
					<h3>
						FRONT-END <span className='text-[#E94E35]'>*</span> BACK-END{' '}
						<span className='text-[#E94E35]'>*</span> DATABASES
					</h3>
				</div>
				<div className='flex h-16 w-96 border-2 border-black'>
					<p className='flex h-full w-48 cursor-default items-center justify-center bg-black text-lg tracking-wider text-[#F3F1EF]'>
						Got a project?
					</p>
					<p className='flex h-full w-48 cursor-pointer items-center justify-center bg-[#F3F1EF] text-lg tracking-wider text-black'>
						Let's talk.
					</p>
				</div>
			</div>
			<div className='flex w-2/5 items-center'>
				<div className='w-full'>
					<img src={Arnold} alt='foto_arnold' className='w-full rounded-full' />
				</div>
			</div>
			<Band />
		</div>
	)
}

export default Presentation
