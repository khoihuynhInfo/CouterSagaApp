import React, { Component } from 'react';
import Couter from './../components/Couter';
import { connect } from 'react-redux';
import {
    additionCouter,
    subtractionCouter
} from './../actions/index';

class CouterContainer extends Component {
    render() {
        return (
            <Couter
                valueCouter={this.props.valueCouter}
                onAdd={this.props.onAdd}
                onSub={this.props.onSub}
            />
        );
    }
}

const mapStateToProps = state => ({
    valueCouter: state.couterReducer
});

const mapDispatchToProps = dispatch=> ({
    onAdd: (value) =>{
        dispatch(additionCouter(value))
    },
    onSub: (value) => dispatch(subtractionCouter(value)),
})



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CouterContainer);
