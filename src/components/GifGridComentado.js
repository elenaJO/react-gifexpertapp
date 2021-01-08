import React, { useState, useEffect } from 'react'
import { getGif } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

	// const [count, setCount] = useState(0);
	const [images, setImages] = useState([]);

	useEffect(() => {
		getGif(category)
			.then(setImages);
			// imgs => setImages(imgs), es igual ya q devuelve y envia otra a setImages

		// solo se ejecuta la primera ve q renderiza el componente si esta []
	}, [category]);  // cada ves q cambia la categoria se ejecuta no va a pasara por q la catgoria no va a cambiar solo es por el warning
	
	// cada ves que apretaba el boton + se realizaba la peticion por q cuano se actualiza el count vuele a renderizar el componente para eso podemos usar el useEffect
	// useEffect ejecutar cierto codigo de manera condicional
	// el primer parametro es la funcion que se va a ejecutar, el segundo es el arreglo de dependencias
	// si esta [] vacio solo se ejecuta una vez

	// encodeURI es de js que reemplaza los espacios en blanco %20 etc

	// no es necesario q este en el componente lo podeos sacar en los helpers
	// const getGif = async() => {
	// 	const url = `https://api.giphy.com/v1/gifs/search?api_key=Nu3Nq1zEKjSsHDKK1LtgR5hy9xyNAcou&q=${encodeURI(category)}&limit=10`;
	// 	const resp = await fetch(url);
	// 	const { data } = await resp.json();
	// 	const gifs = data.map( img => {
	// 		return {
	// 			id: img.id,
	// 			title: img.title,
	// 			url: img.images?.downsized_medium.url,
	// 		};
	// 	})
	// 	setImages(gifs);
	// 	console.log(gifs);
	// }
	// getGif();

	// { ...img } mande el operador spret de img en el otro componete recibe de frentre el objeto img ya no dentro de props
	// mando las propiedades de las imagenes como propiedades independientes
	return (
		<>
		<h3>{ category }</h3>
		<div className="card-grid">
			{/* <h3>{ count }</h3>
			<button onClick={ () => setCount(count + 1) }>+</button> */}
			{
				images.map(img => (
					<GifGridItem 
						key={ img.id }
						{ ...img }
					/>
				))
			}
		</div>
		</>
	)
}
