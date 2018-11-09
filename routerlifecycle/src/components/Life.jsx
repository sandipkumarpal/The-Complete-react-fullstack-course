import React from 'react';

class Life extends React.Component {
    state = {
        title: 'Life Cycles'
    }

    // Before Render
    componentWillMount() {
        console.log('ComponentWillMount Before Render');
    }

    // Component Update Before render
    componentWillUpdate() {
        console.log('componentWillUpdate Before Update Component')
    }

    // Component of State Update
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps);
        console.log(nextState);

        return true;
    }

    // Before recived Props
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps Recived Props before render');
    }


    // Render JSX
    render() {
        console.log(this.props);
        return (
            <div>
                <h2>{this.state.title}</h2>
                <div onClick={() => this.setState({title: 'Something else'})}>Click to Change</div>
            </div>
        )
    }

    // After Render
    componentDidMount() {
        console.log('ComponentDidMount After Render');
    }

    // Component Update After render
    componentDidUpdate() {
        console.log('componentDidUpdate After Update Component')
    }
}

export default Life;
