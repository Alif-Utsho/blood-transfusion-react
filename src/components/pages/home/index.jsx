import React from 'react'
import Form from './form'
import { Redirect } from 'react-router-dom'

class Home extends React.Component{

    state = {
        name: '',
        blood: ''
    }

    clickHandler = () => {
        alert(this.state.name + this.state.blood)
        if (this.state.name && this.state.blood) {
            <Redirect to="/home" />
        }
    }

    getName = () => {
        return this.state.name
    }

    changeHandler = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    selectHandler = (event) => {
        this.setState({
            blood: event.target.value
        })
    }

    render() {
        return (
            <>
                <Form
                    clickHandler={this.clickHandler}
                    changeHandler={this.changeHandler}
                    selectHandler={this.selectHandler}
                />
            </>
        )
    }
}

export default Home