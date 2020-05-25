import React, { Component } from 'react';
import gato from '../imagenes/gato3.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import * as FontAwesome from '@fortawesome/free-solid-svg-icons';

class Card extends Component{
    constructor(props, context){
        super(props, context);

        this.componentRef = React.createRef();
    }

    render(){
        if ( this.props.nombreUsuario == "" || this.props.nombreUsuario == null ) {
            return null;
        } else {
            return (
                <div className="blog-card">
                  <img className="logo" src={gato} alt="gato" />
                  <h1>Papeleria.Gatobacam </h1>

                  <br />

                  <div className="datos-usuario">
                    <p>Nombre: {this.props.nombreUsuario} </p>
                    <p>RUT: {this.props.rutUsuario}</p>
                    <p>Celular: {this.props.celularUsuario}</p>
                    <p>Dirección: {this.props.direccionUsuario}</p>
                  </div>

                  <br />

                  <h2><u><center>Muchas gracias por tu compra</center></u></h2>

                  <br />

                  <div className="datos-bbr">
                    <p>Remitente: Bárbara Inayado Araya</p>
                    <p>Rut: 19.513.795-1</p>
                    <p>Celular: 930777736</p>
                  </div>
                </div>
            );
        }
    }
}
export default Card;
