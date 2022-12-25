export const getImagen = async () => {
  try {
    const apiKey = "zN1BpUR0dE0QKDYHS0jl8D1e3NPQHBFa";
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;
    return url;
  } catch (error) {
    // manejo del error
    return "no se encontro la imagen";
  }
};

getImagen();
