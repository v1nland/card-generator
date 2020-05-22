import React, { Component } from 'react';
import gato from '../imagenes/gato3.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import * as FontAwesome from '@fortawesome/free-solid-svg-icons';
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';

class ComponentToPrint extends React.Component {
    render(){
        return (
                <div className="blog-card">
                  <img className="logo" src={gato} alt="gato" />
                  <h1>Papeleria.Gatobacam </h1>
                  <div className="datos-usuario">
                    <p>Nombre: jgjgjgjhghjgjhghjghjghjgjh </p>
                    <p>Rut: 666666666666</p>
                    <p>Celular: 88888888</p>
                    <p>Dirección: mmmmmmmm</p>
                  </div>

                  <h2><u><center>Muchas gracias por tu compra</center></u></h2>

                  <div className="datos-bbr">
                    <p>Remitente: Bárbara Inayado Araya</p>
                    <p>Rut: 19.513.795-1</p>
                    <p>Celular: 930777736</p>
                  </div>
                </div>


       );
    }
}

class Card extends Component{
    constructor(props, context){
        super(props, context);
        this.componentRef = React.createRef();
    }

    render(){
        return(
            <React.Fragment>
                <ComponentToPrint ref={this.componentRef} />
                    <button onClick={() => exportComponentAsJPEG(this.componentRef)}>
                        JPEG
                    </button>
                    <button onClick={() => exportComponentAsPDF(this.componentRef)}>
                        PDF
                    </button>
                    <button onClick={() => exportComponentAsPNG(this.componentRef)}>
                        PNG
                    </button>
            </React.Fragment>
        );
    }
}
export default Card;
