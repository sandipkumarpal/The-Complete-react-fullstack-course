import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import '../css/App.css';

class Fade extends Component{
    state = {
        show: false
    }

    showDiv() {
        this.setState({
            show: !this.state.show
        })
    }

    render(){
        return(
            <div>
                <CSSTransition
                    in={this.state.show}
                    timeout={5000}
                    classNames="square"
                >
                    <div>
                        Hello CSSTransition
                    </div>
                </CSSTransition>

                <div className="showDiv" onClick={this.showDiv.bind(this)}>Show and Hide</div>
            </div>
        )
    }
}


export default Fade;