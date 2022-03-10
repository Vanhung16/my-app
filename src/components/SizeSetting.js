import React, { Component } from "react";

class SizeSetting extends Component {

    changeSize(value){
        this.props.onChangeSize(value);
    }

    render() {
        return(
                <table className="table table-striped table-inverse table-responsive ">
                    <thead className="thead-inverse">
                        <tr>
                            <th>
                                <h3>Size : { this.props.fontsize }px</h3>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row">
                                <button className="btn btn-success mt-10" onClick={() => this.changeSize(-2) }> Giảm</button>
                                <button className="btn btn-info ml-10" onClick={ () => this.changeSize(2) }> Tăng</button>
                                </td>
                            </tr>
                        </tbody>
                </table>
        );
    }
}
export default SizeSetting;