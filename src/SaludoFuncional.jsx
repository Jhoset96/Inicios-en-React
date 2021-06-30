import React from "react";

export default function SaludoFuncional(props){
    const saludo = props.lang === "es" ? "Hola":"Hello";
    if(!props.lang) return <h3>{saludo} Soy Jhoset</h3>;
    return(
        <h1>{saludo} {props.nombre}</h1>
    )
}

