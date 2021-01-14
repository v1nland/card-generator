import React, { Component } from "react";
import gato from "../imagenes/gato3.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import * as FontAwesome from '@fortawesome/free-solid-svg-icons';

const options = (tipo, num) => {
	switch (tipo) {
		case "Starken por pagar (domicilio y retiro en Sucursal)":
			return <td className="overlay-starken">Nº Pedido: {num}</td>;
		case "Delivery Domicilio $2.500 (Todas las comunas de Santiago), Excluye Lo Barnechea.":
			return <td className="overlay-delivery">Nº Pedido: {num}</td>;
		case "Delivery Domicilio $3.500  (Lo Barnechea, Colina, Lampa, Padre Hurtado, Calera de Tango y Buin)":
			return <td className="overlay-delivery">Nº Pedido: {num}</td>;
		case "Delivery Domicilio $5.000  (Pirque, Isla de Maipo, El Monte, San José de Maipo, Paine, Talagante, Peñaflor y Melipilla)":
			return <td className="overlay-delivery">Nº Pedido: {num}</td>;
		case "ENVIO COLORFEST":
			return <td>Nº Pedido: {num}</td>;
		case "CORREOS DE CHILE $3.500 (Domicilio y Retiro sucursal deben ir previamente cancelados, Nos contactaremos a la Brevedad)":
			return <td className="overlay-correos">Nº Pedido: {num}</td>;
		default:
			return <td></td>;
	}
};

class Card extends Component {
	constructor(props, context) {
		super(props, context);

		this.componentRef = React.createRef();
	}

	render() {
		if (this.props.nombreUsuario === "" || this.props.nombreUsuario === null) {
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
								{options(this.props.tipoPedido, this.props.numeroPedido)}
							</tr>

							<tr>
								<td>Dirección:</td>
								<td>{this.props.direccionUsuario}</td>
								<td>{this.props.colorfest !== "" ? `CF: ${this.props.colorfest}` : ""}</td>
							</tr>

							<tr>
								<td> </td>
								<td>{this.props.comunaUsuario} </td>
								<td></td>
							</tr>
						</table>
					</div>
					<br />
					<h2>
						<u>
							<center>Muchas gracias por tu compra</center>
						</u>
					</h2>
					<br />
					<div className="datos-bbr">
						<p>Remitente: Bárbara Inayado Araya</p>
						<p>RUT: 19.513.795-1</p>
						<p>Celular: 930777736</p>
					</div>
				</div>
			);
		}
	}
}
export default Card;
