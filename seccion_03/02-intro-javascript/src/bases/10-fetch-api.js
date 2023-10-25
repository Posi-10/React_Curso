/*------------Fetch API------------*/

const apiKey = 'jCmvCXa60Ekh1fyuTpnhYESkqV8kgU72'

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

peticion
  .then(resp => resp.json())
  .then(({ data: { images: { original } } }) => {
    console.log(original.url);

    const img = document.createElement('img');
    img.src = original.url
    document.body.append(img);
  })
  .catch(console.warn);