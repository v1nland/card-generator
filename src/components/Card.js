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
        if ( this.props.nombreUsuario === "" || this.props.nombreUsuario === null ) {
            return null;
        } else {
            return (
                <div className="blog-card">
                    <img className="logo" src={gato} alt="gato" />
                    <h1>Papeleria.Gatobacam </h1> <br />

                    <div className="datos-usuario">
                        <table className="tablita">
                            <tr>
                                <td className="fijacion2">Nombre:</td>
                                <td className="fijacion">{this.props.nombreUsuario}</td>
                                <td></td>
                            </tr>

                            <tr>
                                <td>RUT:</td>
                                <td>{this.props.rutUsuario} </td>
                                <td></td>
                            </tr>

                            <tr>
                                <td>Celular:</td>
                                <td>{this.props.celularUsuario} </td>
                                { this.props.tipoPedido !== 'Envíos por Starken a domicilio (modalidad por pagar)'?
                                    <td className="overlay">Nº Pedido: {this.props.numeroPedido}</td>
                                    :
                                    <td>Nº Pedido: {this.props.numeroPedido}</td>
                                }
                            </tr>

                            <tr>
                                <td>Dirección:</td>
                                <td>{this.props.direccionUsuario}</td>
                                <td></td>
                            </tr>

                            <tr>
                                <td> </td>
                                <td>{this.props.comunaUsuario} </td>
                                <td></td>
                            </tr>
                        </table>
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
