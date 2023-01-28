import Star from '../assets/img/star.png'
import ContactForm from './ContactForm'

const Contact = () => {
	return (
		<div className='layout-height flex flex-col gap-8 pt-32' id="contact">
			<div className='flex w-full flex-col items-center justify-center'>
				<img src={Star} alt='orange_star' className='h-12 w-12' />
				<h1 className=''>Contact</h1>
			</div>
			<p className='mx-auto w-full max-w-[32rem] text-center'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in ipsum
				nulla. Vivamus risus eros, accumsan at sem et, egestas iaculis metus.
				Suspendisse vitae nibh laoreet, condimentum metus eget, faucibus.
			</p>
			<ContactForm />
		</div>
	)
}

export default Contact
