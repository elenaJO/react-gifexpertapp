import React from 'react'

export const GifGridItem = ({ id, title, url}) => {
	// como trabajamos con js para q no se confunda con class de clase se le puso className
	return (
		<div className="card animate__animated animate__fadeIn">
			<img src={ url } alt={ title }/>
			<p>{ title }</p>
		</div>
	)
}
