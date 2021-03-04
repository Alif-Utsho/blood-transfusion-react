import React from 'react'
import Form from './form'
import { useHistory } from "react-router-dom";

class Home extends React.Component{

    state = {
        name: '',
        blood: '',
        link: ''
    }

    linkGenerate = () => {
        this.setState({
            link: this.state.name + '/' + this.state.blood
        })
    }

    clickHandler = () => {
        //alert(this.state.name + this.state.blood)
        var link= this.state.name + '/' + this.state.blood
        this.props.history.push(link)
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