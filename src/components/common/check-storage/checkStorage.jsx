
function checkStorage (item) {
    if (localStorage.getItem(item)) {
        return true
    } else {
        return false
    }
    
};

export default checkStorage;