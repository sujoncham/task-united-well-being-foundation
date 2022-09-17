import { useEffect, useState } from 'react';

const usePsycoHook = () => {
    const [psycho, setPsycho] = useState([]);

    useEffect(()=>{
        const getData = async () =>{
            const res = await fetch('data.json');
            const data = await res.json();
            setPsycho(data);
        }
        getData()
    }, [])

    return [psycho];
};

export default usePsycoHook;