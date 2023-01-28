const ContactForm = () => {
	return (
		<div className='mx-auto w-full max-w-[50rem]'>
			<form className='flex w-full flex-col gap-2'>
				<input
					type='text'
					className='h-10 w-full border-2 border-black bg-[#F3F1EF] px-4 py-6'
					placeholder='Nombre y Apellido'
				/>
				<input
					type='text'
					className='h-10 w-full border-2 border-black bg-[#F3F1EF] px-4 py-6'
					placeholder='E-mail'
				/>
				<input
					type='text'
					className='h-32 w-full border-2 border-black bg-[#F3F1EF] px-4'
					placeholder='Message...'
				/>
				<button type='submit' className='mx-auto h-12 w-36 bg-black text-white'>
					Enviar
				</button>
			</form>
		</div>
	)
}

export default ContactForm
