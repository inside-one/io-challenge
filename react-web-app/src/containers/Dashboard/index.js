import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { Container } from '../../components';

import './style.css'

class Dashboard extends Component {
    constructor(props){
        super(props);

        this.dispatch = this.props.dispatch;

        this.state = {

        }
    }

    componentDidMount(){
        
        console.log('================TICKET STORE====================');
        console.log(this.props.tickets);
        console.log('=================REDUX===================');

    }

    render(){
        return(
            <Container extraClass="dashboard">
                <h1>DASHBOARD</h1>
                <h3>Tickets Store: { JSON.stringify(this.props.tickets) }</h3>
            </Container>
        )
    }

}

const mapStateToProps = (state) =>({
    ...state,
    tickets :  state.tickets
})


export default connect(mapStateToProps) (Dashboard);


