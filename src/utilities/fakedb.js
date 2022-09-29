const addToDb = data => {
    localStorage.setItem('set-time', data);
}
const getSetTime=()=>{

    let getDbTime=0;
    //get the shopping cart from local storage
    const getTime = localStorage.getItem('set-time');
    if(getTime){
        getDbTime = getTime;
       
    }
    return getDbTime;
}
export {addToDb,getSetTime};