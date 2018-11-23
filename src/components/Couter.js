import React, { Component } from 'react';

class Couter extends Component {
    onAdd = () => {
        this.props.onAdd(this.props.valueCouter);
    }
    onSub = () => {
        this.props.onSub(this.props.valueCouter);
    }

    render() {
        return (
            <div style={{ padding: '40px', background: '#ecf0f1' }}>
                <button
                    onClick={this.onAdd}
                    style={{ fontSize: '2em', width: '100px', border: 'none', outline: 'none', background: '#3498db', color: '#fff' }}> + </button>
                <h1 style={{ color: '#e67e22', padding: '5px' }}>{this.props.valueCouter}</h1>
                <button 
                onClick={this.onSub}
                style={{ fontSize: '2em', width: '100px', border: 'none', outline: 'none', background: '#3498db', color: '#fff' }}> - </button>
            </div>
        );
    }
}

export default Couter;
