import { useEffect } from 'react';

function useOutsideClick (ref, func) {
    console.log('click')
    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    });
    
    const handleClick = (e) => {
        if (!ref.current?.contains(e.target)) {
            func();
        }
    };
};

export default useOutsideClick;