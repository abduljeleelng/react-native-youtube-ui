export const loadImages = async () => {
    try {
        const response = await fetch('https://unsplash.it/list');
        const images = await response.json();
        return images;
    } catch (error) {
        console.log(error)
    }
};

export const data = async () => {
    try{
        const response = await fetch(`https://unsplash.it/list`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json; charset=UTF-8',
                accept:'application/json',
            },
        }).catch(err => console.log(err));
        const data = await response.json();
        return data;
    }catch(e){console.log(e)}
};

export const getImageFromId = id => `https://unsplash.it/${600}/${600}?image=${id}`;