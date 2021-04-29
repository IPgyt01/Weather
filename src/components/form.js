import React from "react";

class Form extends React.Component
{
    city = "Samara"
    render() {
        return(
            <form onSubmit={this.props.weatherMethod}>
                <input type="text" name="city" placeholder="Город"/>
                <button>Get</button>
            </form>
        );
    }
}

export default Form;