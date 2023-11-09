import React from 'react';

const Report = () => {
	return (
		<>
			<h1>Reportar situación</h1>
			<form action=''>
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
                <label htmlFor='image'>Imagen:</label>
                <input type='file' name='image' id='image' />
                <label htmlFor='location'>Ubicación:</label>
                <input type='text' name='location' id='location' />
                <label htmlFor='date'>Fecha:</label>
                <input type='date' name='date' id='date' />
                <label htmlFor='time'>Hora:</label>
                <input type='time' name='time' id='time' />

			</form>
		</>
	);
};

export default Report;
