import React from "react";

class Button extends React.Component {
    render(){

        const isActive = false;

        const styles = {
            backgroundColor: isActive ? 'green' : 'red'
        }
        
        return (
            <button style={
                styles
            }>
                Botão
            </button>
        )
    }
}

export default Button;