//snipet rafc y tab
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
	// asi no se hace por q si quiero agregar o cambiar react no tiene manera de saberlo para eso se usa los hooks
	// const categories = ['One Punch', 'Samura X', 'Dragon ball'];

	// useState recibe un parámetro: el valor inicial del estado (que será ['One Punch', 'Samura X', 'Dragon ball'])
  // y devuelve un array de dos posiciones:
  //  la primera (categories), tiene el valor del estado
  //  la segunda (setCategories), el método para actualizar el estado
	const [categories, setCategories] = useState(['One Punch']);

	// const handleAdd = () => {
	// 	// setCategories([ ...categories, 'game']);

	// 	// tmb un callback q es el estado anterior
	// 	setCategories(cat => [...categories, 'game']);
	// }


	// como props tmb le puedo pasar una funcion la referencia


	//custom hooks -> logica que quiro extraer y reutilzar, son como funcional compoenentes puedes tener states, reducer , components, preferible que su nombre empieze con use
	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory setCategories={ setCategories }/>
			<hr/>
			{/* <button onClick={ handleAdd }>Agregar</button> */}
			<ol>
				{
					categories.map(category => (
						<GifGrid
							key={ category }
							category={ category }/>
					))
				}
			</ol>
		</>
	)
}

export default GifExpertApp;