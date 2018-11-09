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
                {/* {this.state.show ? <div style={{
                    background: '#ff9900',
                    height: '100px'
                }}></div> : null} */}
                <Transition
                    in={this.state.show}
                    timeout={2000}
                    mountOnEnter
                    unmountOnExit
                >
                    {/* {state => <p>{ state }</p>} */}
                    { state => <div style={{
                        background: '#ff9900',
                        height: '100px',
                        transition: 'all 2s ease',
                        opacity: state === 'exited' || state === 'exiting' ? 0 : 1
                    }}> { state } </div> }
                </Transition>

                <div class="showDiv" onClick={this.showDiv.bind(this)}>Show and Hide</div>
            </div>

        )
    }
}


export default TransitionComp;