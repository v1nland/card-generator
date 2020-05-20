import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FontAwesome from '@fortawesome/free-solid-svg-icons';
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';

class ComponentToPrint extends React.Component {
    render(){
        return (
            <div className="blog-card">
                <div className="meta">
                    <div className="photo"></div>
                        <ul className="details">
                            <li className="author"><FontAwesomeIcon icon={FontAwesome.faCalendar} /> <a href="#">John Doe</a></li>
                            <li className="date"><FontAwesomeIcon icon={FontAwesome.faCalendar} /> Aug. 24, 2015</li>
                            <li className="tags">
                                <ul>
                                    <FontAwesomeIcon icon={FontAwesome.faCalendar} />
                                    &nbsp;
                                    <li><a href="#">Learn</a></li>
                                    <li><a href="#">Code</a></li>
                                    <li><a href="#">HTML</a></li>
                                    <li><a href="#">CSS</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                <div className="description">
                    <h1>Learning to Code</h1>
                    <h2>Opening a door to the future</h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                    <p className="read-more">
                        <a href="#">Read More</a>
                    </p>
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
