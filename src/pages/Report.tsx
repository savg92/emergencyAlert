
const Report = () => {
    if (!navigator.geolocation) {
        console.log("Geolocation is not supported by your browser");
    } else {
        console.log("Geolocation is supported by your browser");
    }
    
    
    function success(position: GeolocationPosition) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
        
        console.log(`Latitude: ${latitude} °, Longitude: ${longitude} °`);
    }

    function error() {
        console.log("Unable to retrieve your location");
    }

    const handleGetLocation = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event?.preventDefault();
        navigator.geolocation.getCurrentPosition(success, error);
    }

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const preview = document.getElementById('preview') as HTMLImageElement;
                preview.src = reader.result as string;
                preview.alt = 'Image preview';
            }
            reader.readAsDataURL(file);
        }
    }

	return (
		<>
			<h1>Reportar situación</h1>
			<form action='' className="flex flex-col gap-4">
                <label htmlFor='type'>
                    Tipo de situación:    
                </label>
                <select name='type' id='type'>
                    <option value=''>Seleccione una opción</option>
                    <option value='1'>Incendio</option>
                    <option value='2'>Inundación</option>
                    <option value='3'>Accidente</option>
                    <option value='4'>Robo</option>
                    <option value='5'>Asalto</option>
                    <option value='6'>Otro</option>
                </select>

                <label htmlFor='title'>Título:</label>
                <input type='text' name='title' id='title' />
				
                <label htmlFor='description'>Descripción:</label>
                <textarea name='description' id='description' cols={30} rows={10}></textarea>
                
                <label htmlFor='image'>Image:</label>
                <img id='preview' src='#' alt='preview' className="w-32 h-32" />
                <input type='file' name='image' id='image' onChange={handleImageChange} />
                
                <label htmlFor='location'>Ubicación:</label>
                <input type='text' name='location' id='location' />
                <button 
                onClick={handleGetLocation}
                className="bg-blue-500 text-white p-2 rounded shadow-md"
                >
                    Obtener ubicación
                </button>
                
                <label htmlFor='date'>Fecha:</label>
                <input type='date' name='date' id='date' />
                
                <label htmlFor='time'>Hora:</label>
                <input type='time' name='time' id='time' />

			</form>
		</>
	);
};

export default Report;
