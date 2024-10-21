import React from 'react';
import {useState, useEffect} from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
// mocks data
const initialState = [
    { name: 'Obi wan kenobi' },
    { name: 'Darth Vader' },
    { name: 'Look skywalker' },
    { name: 'R2D2' },
    { name: 'R2D3' },
    { name: 'R2D3' },
];

export const StarWars = () => {
    const[response, setResponse] = useState([])
    const[load, setLoad] = useState(false);
    const[error, setError] = useState("");

    useEffect(() => {

        const promiseResponse = async() => {
            try{
                setLoad(true);
                const result = await fetch("https://swapi.dev/api/peoples"); //objeto de tipo response
                const response = await result.json();//regresa una promesa de tipo json, siempre que es una promesa usar el await
                setResponse(response.results) ;
            }catch(error){
                console.error(error);
                setError("Error getting data") ;
            }finally{
                setLoad(false);
            }
        }

        promiseResponse();

    }, []);


    // render
    console.log('render');
   // conditioanl rendedring {error&&<span>error</span>}
    return (
        <>
        
        <div>
            {error?
            <span>{error}</span>
            
            :load ? <Loader active></Loader>: <li>
                {response.map((p, i) => { return <ul key={i}> {p.name}</ul> })}
            </li>}
            
        </div>
        </>
        
    );
};
