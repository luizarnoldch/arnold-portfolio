import Media from './Media'
import Star from '../assets/img/star.png'

const About = () => {
	return (
		<div className='layout-height flex flex-col pt-32' id="about">
			<div className='flex w-full flex-col items-center justify-center'>
				<img src={Star} alt='orange_star' className='h-12 w-12' />
				<h1 className=''>ABOUT ME</h1>
			</div>
			<div className='flex h-full w-full items-center justify-center'>
				<div className='my-auto flex flex-col gap-10 rtl:text-base'>
					<div className='scroll-bar max-w-[50rem]'>
						<p className='scroll-bar-text ml-4 max-h-[16rem] overflow-y-auto text-center'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
							aliquet et diam sed eleifend. Sed at arcu tincidunt ante aliquet
							congue. Nullam at vestibulum lectus. Sed posuere ornare posuere.
							Sed tempor egestas ipsum, a interdum urna imperdiet vitae. Fusce
							elementum justo at dignissim tincidunt. Vivamus semper et dui
							feugiat iaculis. Nulla et condimentum nulla. Donec et felis in
							mauris suscipit suscipit at quis lacus. Nam maximus a lacus
							tincidunt mattis. Sed dignissim tristique diam, quis efficitur
							quam ultrices sed. Sed eu vehicula tellus. Cras vel gravida ante.
							Donec vitae feugiat tortor. Cras ultricies libero massa, sit amet
							accumsan elit varius a. Phasellus magna ex, porta sed sapien a,
							ultrices ornare lorem. Pellentesque vel fermentum nisl, et commodo
							justo. Morbi id augue ut nunc semper faucibus. Vivamus varius nunc
							vitae posuere facilisis. Nunc cursus tempor erat, a lobortis
							mauris porta faucibus.
						</p>
					</div>
					<Media />
				</div>
			</div>
		</div>
	)
}

export default About
