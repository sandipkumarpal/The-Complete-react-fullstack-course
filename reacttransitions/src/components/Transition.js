import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';

import '../css/App.css';

class TransitionComp extends Component{
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
                <Transition
                    in={this.state.show}
                    timeout={2000}
                >
                    { state => <div className={`square square-${state}`}> {`square square-${state}`} </div> }
                </Transition>

                <div className="showDiv" onClick={this.showDiv.bind(this)}>Show and Hide</div>
            </div>

        )
    }
}


export default TransitionComp;