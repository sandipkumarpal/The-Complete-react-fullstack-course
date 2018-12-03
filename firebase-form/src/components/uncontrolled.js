import React, { Component } from 'react';

class Uncontrolled extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastName: '' 
        }
        this.handleSubmitClick = this.handleSubmitClick.bind(this);
    }

    handleSubmitClick(event) {
        event.preventDefault();
        const values = {
            name: this.name.value,
            lastName: this.lastName.value
        }
        console.log(values);
    }

    render(){
        return(
            <div className="container">
                <form>
                    <div className="form_element">
                        <label>Enter Name</label>
                        <input 
                            type="text"
                            ref={input => this.name = input}                            
                        />
                    </div>
                    <div className="form_element">
                        <label>Enter Last Name</label>
                        <input 
                            type="text"
                            ref={input => this.lastName = input}
                        />
                    </div>
                    <button onClick={this.handleSubmitClick}>
                        Sign In
                    </button>
                </form>
            </div>
        )
    }
}

export default Uncontrolled;