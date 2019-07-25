import React, { useEffect }from 'react';

import useLocalStorage from './useLocalStorage'

// useEffect(()=>{
//     if(!something)
// },[])

const useDarkMode = () => {
    
    const [someValue, setSomeValue] = useLocalStorage('mode')
    useEffect(()=>{
        if(someValue === true){
            document.body.classList.toggle('dark-mode')
        }
    },[someValue])
    return [someValue,setSomeValue];
}
 
export default useDarkMode;