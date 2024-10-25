//utility function to get dynamic images
function getImgUrl(name){
    return new URL(`../assets/players-images/${name}`, import.meta.url).href
}

export {getImgUrl}