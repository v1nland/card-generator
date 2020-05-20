import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FontAwesome from '@fortawesome/free-solid-svg-icons';
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';

class ComponentToPrint extends React.Component {
    render(){
        return (
            <div className="blog-card">
                nombre: lalalalalal
                direccion: kasksksksk

                <h1>Bale Bale</h1>
                <h2>¡Gracias por tu compra!</h2>
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
