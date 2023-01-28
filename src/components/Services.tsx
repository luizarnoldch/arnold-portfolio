import Star from '../assets/img/star.png'

const myServices = [
	{
		title: 'Web Development',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus a sem id consequat. Donec ornare dictum dolor, eget lobortis turpis sodales quis. Etiam non odio dui. Nam aliquam diam.',
	},
	{
		title: 'Database Administration',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus a sem id consequat. Donec ornare dictum dolor, eget lobortis turpis sodales quis. Etiam non odio dui. Nam aliquam diam.',
	},
	{
		title: 'Data Analisis',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus a sem id consequat. Donec ornare dictum dolor, eget lobortis turpis sodales quis. Etiam non odio dui. Nam aliquam diam.',
	},
	{
		title: 'English && Development',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus a sem id consequat. Donec ornare dictum dolor, eget lobortis turpis sodales quis. Etiam non odio dui. Nam aliquam diam.',
	},
]

const Services = () => {
	return (
		<div className='layout-height flex flex-col gap-8 pt-32' id="services">
			<div className='flex w-full flex-col items-center justify-center'>
				<img src={Star} alt='orange_star' className='h-12 w-12' />
				<h1 className=''>SERVICES</h1>
			</div>
			<div className='grid grid-cols-2 grid-rows-2 gap-5'>
				{myServices.map((item, index) => (
					<div className='flex flex-col gap-6 border-2 border-black p-6 hover:bg-black hover:text-white' key={index}>
						<h3>{item.title}</h3>
						<p className='text-sm'>{item.content}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default Services
