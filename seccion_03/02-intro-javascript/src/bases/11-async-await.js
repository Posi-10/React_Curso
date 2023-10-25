/*------------Async - Await------------*/

const getImagen = async () => {

  try {

    const apiKey = 'jCmvCXa60Ekh1fyuTpnhYESkqV8kgU72'
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

    const { data } = await resp.json();

    const img = document.createElement('img');
    img.src = await data.images.original.url
    document.body.append(img);

  } catch (error) {

    console.error(error);

  }
};

getImagen();