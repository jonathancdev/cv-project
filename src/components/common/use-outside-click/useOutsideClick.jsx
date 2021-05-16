import { useEffect, useState } from 'react';

function useOutsideClick (ref, func) {

    //const [clickOutside, setClickOutside] = useState(false);
    
    useEffect(() => {
      
        document.addEventListener('click', handleClick);
        
        return () => document.removeEventListener('click', handleClick);
      
    }, []);
    
    const handleClick = (e) => {

        if (!ref.current?.contains(e.target)) {
            func();
        }
    };
    //console.log(clickOutside)
    //return clickOutside;
};

export default useOutsideClick;