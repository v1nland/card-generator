import React, { Component } from 'react';
import { Container, Modal, Form, Col, Button, ButtonGroup, Row, Table } from 'react-bootstrap';
import CSVReader from 'react-csv-reader';
import Card from '../components/Card';
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';

import { FormatRUT } from '../functions/RUT';

class Home extends Component{
    constructor(props, context){
        super(props, context);

        this.HandleCSV = this.HandleCSV.bind(this);
        this.RenderCard = this.RenderCard.bind(this);

        this.state = {
            csv: [],
            newCsv: [],
            file: "Subir archivo CSV"
        }
    }

    HandleCSV( data ){
        this.setState({ csv: data }, () => {
            for (var i = 0; i < this.state.csv.length; i = i+2) {
                var newElem = [];
                newElem.push(this.state.csv[i][12])
                newElem.push(this.state.csv[i][36])
                newElem.push(this.state.csv[i][37])
                newElem.push(this.state.csv[i][13])
                newElem.push(this.state.csv[i][30])
                newElem.push(this.state.csv[i][0])

                if (i+1 < this.state.csv.length) {
                    newElem.push(this.state.csv[i+1][12])
                    newElem.push(this.state.csv[i+1][36])
                    newElem.push(this.state.csv[i+1][37])
                    newElem.push(this.state.csv[i+1][13])
                    newElem.push(this.state.csv[i+1][30])
                    newElem.push(this.state.csv[i+1][0])

                }

                this.state.newCsv.push(newElem);
            }
        })
        this.setState({ file: "Archivo subido exitosamente" })
    }

    RenderCard = ( csvData ) => (
        <Row>
            <Col>
                <Card
                    nombreUsuario={csvData[0]}
                    rutUsuario={FormatRUT(csvData[1])}
                    celularUsuario={csvData[2]}
                    direccionUsuario={csvData[3]}
                    comunaUsuario={csvData[4]}
                    Npedido={csvData[5]}
                />
            </Col>

            <Col>
                <Card
                    nombreUsuario={csvData[6]}
                    rutUsuario={FormatRUT(csvData[7])}
                    celularUsuario={csvData[8]}
                    direccionUsuario={csvData[9]}
                    comunaUsuario={csvData[10]}
                    Npedido={csvData[11]}
                />
            </Col>
        </Row>
    )

    render(){
        const { file } = this.state;
        const { newCsv } = this.state;

        return(
            <div className="main-container">
                {
                    !(Array.isArray(newCsv) && newCsv.length) ?
                    <Form>
                        <p>1. Sube tu archivo CSV a continuación</p>
                        <p>2. Espera a que se generen las tarjetas</p>
                        <p>3. Presiona Ctrl + P (en Mac, Command + P)</p>
                        <p>4. ¡Guarda el PDF listo para su impresión!</p>
                        <hr />
                        <p>De preferencia, utilizar Google Chrome.</p>
                        <p>El tiempo de generación de tarjetas depende de las características de tu computadora y del tamaño del archivo.</p>
                        <Form.Group as={Col} style={{textAlign: 'center'}}>
                            <Form.Label className="file-input" htmlFor="csv-button">{ file }</Form.Label>
                            <CSVReader
                                onFileLoaded={this.HandleCSV}
                                inputId="csv-button"
                                inputStyle={{display: 'none'}}
                            />
                        </Form.Group>
                    </Form>
                    :
                    null
                }

                { newCsv.map(this.RenderCard) }
            </div>
        );
    }
}

// class Home extends Component{
//     constructor(props, context){
//         super(props, context);
//
//         this.componentRef = React.createRef();
//     }
//
//     render(){
//         return(
//             <React.Fragment>
//                 <button onClick={() => exportComponentAsPDF(this.componentRef)}>
//                     Descargar como PDF
//                 </button>
//
//                 <ComponentToPrint ref={this.componentRef} />
//             </React.Fragment>
//         );
//     }
// }
export default Home;
