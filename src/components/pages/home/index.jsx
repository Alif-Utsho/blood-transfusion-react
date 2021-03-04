import React from 'react'
import Form from './form'

class Home extends React.Component{

    state = {
        name: '',
        blood: '',
        link: ''
    }

    clickHandler = () => {
        alert(this.state.name + this.state.blood)
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
                    path={this.state.link}
                />
            </>
        )
    }
}

export default Home