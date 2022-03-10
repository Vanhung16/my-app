import React, { Component } from "react";

class ColorPicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color : ['red', 'green', 'blue', '#ccc']
        };
    }

    showcolor(color){
        return {
            backgroundColor : color,
            width:50,
            height:50
        };
    }
    setActiveColor(color){
        this.props.onReceiColor(color);
    }
    render() {

        var elmcolors = this.state.color.map((color, index) =>
        {
            return <span className={this.props.color === color ? 'active' : ''}
            key={index} 
            style={this.showcolor(color)}
            onClick={ () => this.setActiveColor(color) }
            ></span>
        });

        return(
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 border">
               <div className="row ">
                <h3>
                    Color Picker
                </h3>
                </div>
                <hr/>
                <div className="row">
                    {elmcolors}
                </div>
            </div>
        );
    }
}
export default ColorPicker;