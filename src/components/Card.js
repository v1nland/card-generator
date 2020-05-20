import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FontAwesome from '@fortawesome/free-solid-svg-icons';
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';

class ComponentToPrint extends React.Component {
    render(){
        return (
            <div className="blog-card">
                <div className="description">

                <ul className="details">
                    <li className="author"><FontAwesomeIcon icon={FontAwesome.faCalendar} /> John Doe</li>
                    <li className="date"><FontAwesomeIcon icon={FontAwesome.faCalendar} /> Aug. 24, 2015</li>
                    <li className="tags">
                        <ul>
                            <FontAwesomeIcon icon={FontAwesome.faCalendar} />
                            &nbsp;
                            <li><a href="#">Learn</a></li>
                            <li><a href="#">Code</a></li>
                        </ul>
                    </li>
                </ul>
                    <h1>Papeleria GatoBacam Bale Bale</h1>
                    <h2>¡Gracias por tu compra!</h2>
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
