import { useState, useEffect } from 'react';


const useFetch = (url) => {


    const [error, setError] = useState(null); 
    const [isPending, setIsPending] = useState(true);
    const [data, setData] = useState( null );



    useEffect( () => {

        const abortCont = new AbortController();


        fetch(url, {signal: abortCont.signal})

        .then(res => {

            if (!res.ok){
                throw Error("Respone not okay error"); 
            }
            return res.json();
        })
        .then(data => {
            console.log(data);
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch( err => {

            if (err.name === "AbortError"){
                console.log('fetch aborted');
            }
            else{
                setError(err.message);
                setIsPending(false);
            }
        })

        return () => abortCont.abort();
    } , [url] );

return {data, isPending, error} 

}
 
export default useFetch;