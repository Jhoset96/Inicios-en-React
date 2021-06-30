import React, {useState, Fragment} from 'react';

const Contador = ( ) => {
    const [numero,setNumero] = useState(0);

    const aumentar = () => {
        console.log("numero oprimido");
        setNumero(numero + 1);
    }
     
    return (
    <Fragment>
        <h3>primer Componente {numero}</h3>
        <button onClick={aumentar}>Oprime aqui</button>
    </Fragment>);
}
 
export default Contador;