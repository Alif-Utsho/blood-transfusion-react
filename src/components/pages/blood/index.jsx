import React from 'react'
import BloodGroup from './bloodGroup'

class Blood extends React.Component {

    state = {
        name: this.props.match.params.name,
        bloodgroup: this.props.match.params.blood,
        bloodDist: [
            {
                name: 'apos',
                value: 'A+',
                receive: ['A+', 'A-', 'O+', 'O-'],
                donate: ['A+', 'AB+'],
            },
            {
                name: 'bpos',
                value: 'B+',
                receive: ['B+', 'B-', 'O+', 'O-'],
                donate: ['B+', 'AB+'],
            },
            {
                name: 'abpos',
                value: 'AB+',
                receive: ['A+', 'A-','B+', 'B-','AB+', 'AB-', 'O+', 'O-'],
                donate: ['AB+'],
            },
            {
                name: 'opos',
                value: 'O+',
                receive: ['O+', 'O-'],
                donate: ['A+', 'B+', 'AB+', 'O+'],
            },
            {
                name: 'aneg',
                value: 'A-',
                receive: ['A-', 'O-'],
                donate: ['A+', 'A-', 'AB+', 'AB-'],
            },
            {
                name: 'bneg',
                value: 'B-',
                receive: ['B-', 'O-'],
                donate: ['B+', 'B-', 'AB+', 'AB-'],
            },
            {
                name: 'abneg',
                value: 'AB-',
                receive: ['A-', 'B-', 'AB-', 'O-'],
                donate: ['AB+', 'AB-'],
            },
            {
                name: 'oneg',
                value: 'O-',
                receive: ['O-'],
                donate: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
            }
        ],
        
    }

    render() {
        return (
            <>
                <BloodGroup
                    name={this.state.name}
                    blood={this.state.bloodgroup}
                    bloodDist={this.state.bloodDist}
                />
                
            </>
        )
    }
}

export default Blood