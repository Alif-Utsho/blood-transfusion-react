import React from 'react'
import Form from './form'


class Home extends React.Component{

    state = {
        name: '',
        blood: '',
        link: ''
    }

    clickHandler = () => {
        //alert(this.state.name + this.state.blood)
        var link= this.state.name + '/' + this.state.blood
        if (link === '/' || link===`${this.state.name}/` || link===`/${this.state.blood}`) {
            alert('Enter all required item')
        }
        else {
            this.props.history.push(link)
        }
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