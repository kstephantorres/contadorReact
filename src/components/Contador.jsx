
const Contador = () => {
    const numero= 0
    
    return (
        <article className="text-center">
            <h2>Contador</h2>
            <h3>{numero}</h3>
            <button className="btn btn-success" onClick={(numero) => numero++}>+</button>
        </article>
    );
};

export default Contador;