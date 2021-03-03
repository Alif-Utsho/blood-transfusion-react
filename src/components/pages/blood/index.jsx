import React from 'react'
import BloodGroup from './bloodGroup'

class Blood extends React.Component{
    
    render() {
        return (
            <>
                <BloodGroup name={this.props.match.params.name} blood={this.props.match.params.blood} />
            </>
        )
    }
}

export default Blood