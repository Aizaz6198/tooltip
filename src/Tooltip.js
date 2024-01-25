import React from 'react';
import './App.css';



class Tooltip extends React.Component{
    classn=()=>{
        
        return `${this.props.position}`;
    }

    render(){
        return (
            <div
            className={`${this.classn()}`}>
                <div className='tooltip '>
                I am a Tooltip :)

                </div>
            </div>
        )
    }
}


export default Tooltip;