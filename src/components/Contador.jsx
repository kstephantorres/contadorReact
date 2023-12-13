import { useState } from "react";

const Contador = () => {
    
    const [numero, setNumero]= useState(0)
    return (
        <article className="text-center">
            <h2>Contador</h2>
            <h3>{numero}</h3>
            <button className="btn btn-success" onClick={() => setNumero(numero +1)}>+</button>
        </article>
    );
};

export default Contador;