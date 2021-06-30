import React from "react";

export default class saludo extends React.Component{
    render(){
        const saludo = this.props.lang === "es" ? "Hola":"Hello";
        return(
            <h1>{saludo} soy jhoset</h1>
        )
    }
}
