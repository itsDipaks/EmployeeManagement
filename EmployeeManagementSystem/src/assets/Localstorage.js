

export const getlocalsdata = (key) => {
    try {
        let data = localStorage.getItem(key);
        data = JSON.parse(data)
        return data;
    }catch(error){
        return null;
    }
}


export const saveLocalsdata = (key, data) =>{
    localStorage.setItem(key,JSON.stringify(data));
}