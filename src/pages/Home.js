import React, { Component } from "react";
import { Form, Col, Row } from "react-bootstrap";
import CSVReader from "react-csv-reader";
import Card from "../components/Card";

import { FormatRUT } from "../functions/RUT";

class Home extends Component {
	constructor(props, context) {
		super(props, context);

		this.HandleCSV = this.HandleCSV.bind(this);
		this.RenderCard = this.RenderCard.bind(this);

		this.state = {
			csv: [],
			newCsv: [],
			file: "Subir archivo CSV"
		};
	}

	HandleCSV(data) {
		this.setState({ csv: data }, () => {
			for (var i = 0; i < this.state.csv.length; i = i + 2) {
				var newElem = [];

				newElem.push(this.state.csv[i][12]); // Letra M: Nombre envio -- ok
				newElem.push(this.state.csv[i][18]); // Letra AK: RUT -- cambiar por letra S de sapo
				newElem.push(this.state.csv[i][5]); // Letra AL: Telefono -- cambiar por letra F de foca
				newElem.push(this.state.csv[i][13]); // Letra N: Direccion de envio -- ok
				newElem.push(this.state.csv[i][19]); // Letra T: Municipio de facturacion -- ok
				newElem.push(this.state.csv[i][0]); // Letra A: Numero de pedido -- ok
				newElem.push(this.state.csv[i][20]); // Letra U: Tipo de envío -- ok
				newElem.push(this.state.csv[i][41] || ""); // Letra AP: Envío colorfest -- ok

				if (i + 1 < this.state.csv.length) {
					newElem.push(this.state.csv[i + 1][12]); // Letra M: Nombre envio
					newElem.push(this.state.csv[i + 1][18]); // Letra AK: RUT
					newElem.push(this.state.csv[i + 1][5]); // Letra AL: Telefono
					newElem.push(this.state.csv[i + 1][13]); // Letra N: Direccion de envio
					newElem.push(this.state.csv[i + 1][19]); // Letra T: Municipio de facturacion
					newElem.push(this.state.csv[i + 1][0]); // Letra A: Numero de pedido
					newElem.push(this.state.csv[i + 1][20]); // Letra U: Tipo de envío
					newElem.push(this.state.csv[i + 1][41] || ""); // Letra AP: Envío colorfest
				}

				this.state.newCsv.push(newElem);
			}
		});

		this.setState({ file: "Archivo subido exitosamente" });
	}

	RenderCard = (csvData) => (
		<Row>
			<Col>
				<Card
					nombreUsuario={csvData[0]}
					rutUsuario={FormatRUT(csvData[1])}
					celularUsuario={csvData[2]}
					direccionUsuario={csvData[3]}
					comunaUsuario={csvData[4]}
					numeroPedido={csvData[5]}
					tipoPedido={csvData[6]}
					colorfest={csvData[7]}
				/>
			</Col>

			<Col>
				<Card
					nombreUsuario={csvData[8]}
					rutUsuario={FormatRUT(csvData[9])}
					celularUsuario={csvData[10]}
					direccionUsuario={csvData[11]}
					comunaUsuario={csvData[12]}
					numeroPedido={csvData[13]}
					tipoPedido={csvData[14]}
					colorfest={csvData[15]}
				/>
			</Col>
		</Row>
	);

	render() {
		const { file } = this.state;
		const { newCsv } = this.state;

		return (
			<div className="main-container">
				{!(Array.isArray(newCsv) && newCsv.length) ? (
					<Form>
						<p>1. Sube tu archivo CSV a continuación</p>
						<p>2. Espera a que se generen las tarjetas</p>
						<p>3. Presiona Ctrl + P (en Mac, Command + P)</p>
						<p>4. ¡Guarda el PDF listo para su impresión!</p>

						<hr />

						<p>De preferencia, utilizar Google Chrome.</p>
						<p>El tiempo de generación de tarjetas depende de las características de tu computadora y del tamaño del archivo.</p>

						<Form.Group as={Col} style={{ textAlign: "center" }}>
							<Form.Label className="file-input" htmlFor="csv-button">
								{file}
							</Form.Label>
							<CSVReader onFileLoaded={this.HandleCSV} inputId="csv-button" inputStyle={{ display: "none" }} />
						</Form.Group>
					</Form>
				) : null}

				{newCsv.map(this.RenderCard)}
			</div>
		);
	}
}
export default Home;
