import React, {Component} from 'react';
import './Button.css';

class Button extends Component {
    render() {
        return(
            <div className="col-auto">
               <button className="button" onClick={()=>this.props.handleClick(this.props.children)}>
                    {this.props.children}
               </button>
            </div>
        )
    }
}

export default Button