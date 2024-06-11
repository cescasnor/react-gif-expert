export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/stickers/search?api_key=v2aEP3sQjCdho9jeJwU4Alszn0CRKKsA&q=${category}&limit=2`;
    const resp = await fetch(url);
    const {data = []} = await resp.json();

    const gifs = data.map( image => ({
        id: image.id,
        title: image.title,
        url: image.images.downsized_medium.url,
    }))

    return gifs;
}