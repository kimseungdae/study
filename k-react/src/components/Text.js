import React, {Component} from 'react';

class Text extends Component{
    render(){
        return (
            <h2>{this.props.movie}</h2>
        )
    }
}

const style = {
    border : '2px solid black',
    padding : '10px',

};



export default Text;
