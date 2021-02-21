import { useEffect, useState } from 'react';

export const useResize = () => {
    const windowInnerSize = [window.innerWidth, window.innerHeight];
    const [size, setSize] = useState(windowInnerSize);

    useEffect(() => {
        const changeSize = () => {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener("resize", changeSize);

        return () => window.removeEventListener('resize', changeSize);
    }, []);
    return size;
}