import Star from '../assets/img/star.png'

const workPages = [
	{
		number: '1',
		name: "Pet's Work",
		description: 'Ecommerce de servicios para mascotas',
		time: {
			begin: '2020-05-01',
			end: '2021-02-04',
		},
	},
	{
		number: '2',
		name: 'ECOTURISMO',
		description: 'Landing Page de destinos turísticos variados en Perú',
		time: {
			begin: '2020-05-01',
			end: '2021-02-04',
		},
	},
	{
		number: '3',
		name: "SMAYLI'S",
		description: 'Dashboard de Veterinaria',
		time: {
			begin: '2020-05-01',
			end: '2021-02-04',
		},
	},
	{
		number: '4',
		name: 'DON JUAN',
		description: 'Restaurante virtual con emisión de boletas',
		time: {
			begin: '2020-05-01',
			end: '2021-02-04',
		},
	},
]

const Works = () => {
	return (
		<div className='layout-height mx-20 flex flex-col gap-10 pt-32' id="works">
			<div className='flex w-full flex-col items-center justify-center'>
				<img src={Star} alt='orange_star' className='h-12 w-12' />
				<h1 className='text-center'>WORKS</h1>
			</div>
			<div className='flex max-h-[28rem] flex-col gap-5'>
				{workPages.map((item, index) => (
					<div
						className='work-container flex h-36 w-full gap-5 border-2 border-black p-4 ease-out hover:bg-black hover:text-white'
						key={index}
					>
						<div className='work-box flex w-1/12 items-center justify-center border border-black bg-black font-bold text-white'>
							{item.number}
						</div>
						<div className='flex w-9/12 flex-col'>
							<span className='flex items-center justify-start'>
								{item.name}
							</span>
							<p className='flex items-center justify-start'>
								{item.description}
							</p>
						</div>
						<div className='w-2/12flex flex-col'>
							<span className='flex items-center justify-start'>
								{item.time.end}
							</span>
							<span className='flex items-center justify-start'>
								{item.time.begin}
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Works
