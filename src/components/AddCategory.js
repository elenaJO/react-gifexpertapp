import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories }) => {
	// para guardar lo que escribo tiene q ver un estado
	// si no pones nada te da error ya que es como si comenzara undefined
	const [inputValue, setInputValue] = useState('');

	const handleInputValue = (e) => {
		setInputValue(e.target.value);
	}

	const handleSubmit = (e) => {
		//para que no recargue la pantalla
		e.preventDefault();
		if (inputValue.trim().length > 2) {
			// no es necesario pasar las categoorias por q es un callback osea que tiene el valor del estado anterior de las categorias.
			setCategories(cats => [inputValue, ...cats]);
			setInputValue('');
		}
	}

	return (
		<form onSubmit={ handleSubmit }>
			<input 
				type="text"
				value={ inputValue }
				onChange={ handleInputValue }
			/>
		</form>
	)
}


AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired
}