
export const getGif = async(category) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=Nu3Nq1zEKjSsHDKK1LtgR5hy9xyNAcou&q=${encodeURI(category)}&limit=10`;
	const resp = await fetch(url);
	const { data } = await resp.json();
	const gifs = data.map( img => {
		return {
			id: img.id,
			title: img.title,
			url: img.images?.downsized_medium.url,
		};
	})
	// como es async devuelve una promesa q resulve la coleccio de mis imagenes
	return gifs;
}