import { Component } from "react";
import ColorPicker from "./components/ColorPicker";
import Reset from "./components/Reset";
import Result from "./components/Result";
import SizeSetting from "./components/SizeSetting";
import './App.css';
class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      color: 'red',
      fontSize: 15
    }
  }

  onSetColor = (params) => {
    this.setState({
      color: params
    });
  }
  onChangeSize = (value) => {
    if(this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36){
      this.setState({
        fontSize : this.state.fontSize + value
      });
    }
}  
  onSettingDefault = (value) => {
      if(value){
        this.setState({
          color: 'red',
          fontSize: 15
        });
      }

  }

  render(){
    return(
      <div className="container mt-50">
        <div className="row">
        <ColorPicker color={this.state.color} onReceiColor={ this.onSetColor } />
        <div className="col-xs-6 col-sm-6 col-lg-6">
            <SizeSetting fontsize={this.state.fontSize} 
            onChangeSize = {this.onChangeSize}
            />
            <Reset onSettingDefault={this.onSettingDefault}/>
          </div>
          <Result color={this.state.color}
           fontsize={this.state.fontSize}
           />
        </div>

      </div>
    );
  }
}
export default App;