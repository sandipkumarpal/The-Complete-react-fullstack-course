import React, { Component } from 'react';

class Controlled extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Jhone',
            lastName: 'Mickel' 
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.onhandleSubmit = this.onhandleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({
            name: event.target.value
        });
    }
    handleLastNameChange(event) {
        this.setState({
            lastName: event.target.value
        });
    }
    onhandleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.onhandleSubmit}>
                    <div className="form_element">
                        <label>Enter Name</label>
                        <input 
                            type="text"
                            value={this.state.name}
                            onChange = {this.handleNameChange}
                        />
                    </div>
                    <div className="form_element">
                        <label>Enter Last Name</label>
                        <input 
                            type="text"
                            value={this.state.lastName}
                            onChange = {this.handleLastNameChange}
                        />
                    </div>
                    <button type="submit">
                        Sign In
                    </button>
                </form>
            </div>
        )
    }
}

export default Controlled;