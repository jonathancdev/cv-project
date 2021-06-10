
function checkStorage (item) {
    console.log(localStorage)
    if (localStorage.getItem(item)) {
        return true
    } else {
        return false
    }
    
};

export default checkStorage;