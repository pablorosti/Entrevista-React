import {useState, useEffect} from 'react';

export const useStickyState = (defaultValue, key) => {
    const [value, setValue] = useState(() => {
        const stickyValue = localStorage.getItem(key);

        return stickyValue !== null 
            ? JSON.parse(stickyValue)
            : defaultValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, setValue, value])

    return [value, setValue]
} 