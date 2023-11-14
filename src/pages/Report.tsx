import { useState } from 'react';

const Report = () => {
	const [photoUrl, setPhotoUrl] = useState<string | null>(null);
	const [latitude, setLatitude] = useState<number | null>(null);
	const [longitude, setLongitude] = useState<number | null>(null);

	if (!navigator.geolocation) {
		console.log('Geolocation is not supported by your browser');
	} else {
		console.log('Geolocation is supported by your browser');
	}

	const success = (position: GeolocationPosition) => {
		setLatitude(position.coords.latitude);
		setLongitude(position.coords.longitude);
	};

	function error() {
		console.log('Unable to retrieve your location');
	}

	const handleGetLocation = (
		event: React.MouseEvent<HTMLInputElement, MouseEvent>
	) => {
		event.preventDefault();
		navigator.geolocation.getCurrentPosition(success, error);
	};

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();

		const reader = new FileReader();
		const file = e.target.files![0];

		reader.onloadend = () => {
			setPhotoUrl(URL.createObjectURL(file));
		};

		reader.readAsDataURL(file);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);
		const data = Object.fromEntries(formData.entries());
		console.log(data);
	};

	return (
		<>
			<section className='flex flex-col gap-4 max-w-2xl mx-auto p-4'>
				<h1>Reportar situación</h1>
				<form
					action=''
					onSubmit={handleSubmit}
					className='flex flex-col gap-4'
				>
					<label htmlFor='type'>Tipo de situación:</label>
					<select
						name='type'
						id='type'
						required
						className='text-center'
					>
						<option value=''>Seleccione una opción</option>
						<option value='Incendio'>Incendio</option>
						<option value='Inundación'>Inundación</option>
						<option value='Deslave'>Deslave</option>
						<option value='Derrumbe'>Derrumbe</option>
						<option value='Choque'>Choque</option>
						<option value='Ayuda a la comunidad'>Ayuda a la comunidad</option>
						<option value='Otro'>Otro</option>
					</select>

					<label htmlFor='description'>Descripción:</label>
					<textarea
						name='description'
						id='description'
						cols={30}
						rows={10}
					></textarea>

					<label htmlFor='image'>Image:</label>
					<div className='flex flex-col gap-4 items-center justify-center'>
						{photoUrl && (
							<img
								id='preview'
								src={photoUrl}
								alt='preview'
								className='w-32 h-32'
							/>
						)}
						<input
							type='file'
							name='image'
							id='image'
							onChange={handleImageChange}
							accept='image/*, image/heic, image/heif, image/jpeg, image/png'
							className='text-center pl-20'
						/>
					</div>

					<label htmlFor='location'>Ubicación:</label>
					<div className='flex flex-col gap-4 items-center justify-center'>
						<input
							type='button'
							name='location'
							id='location'
							value='Obtener ubicación'
							onClick={handleGetLocation}
							className='bg-blue-500 text-white p-2 rounded shadow-md w-fit'
						/>
					</div>
					{latitude && longitude && (
						<p>
							Latitud: {latitude}
							<br />
							Longitud: {longitude}
						</p>
					)}

					<button
						type='submit'
						className='bg-blue-500 text-white p-2 rounded shadow-md'
					>
						Enviar
					</button>
				</form>
			</section>
		</>
	);
};

export default Report;
