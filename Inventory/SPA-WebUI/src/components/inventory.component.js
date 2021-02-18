import React, { Component } from 'react'
import InventoryModel from '../models/Inventory';
import { Link, useHistory } from 'react-router-dom'

class Inventory extends Component {
    inventories = [];
    mode = 0;
    selectedId = 0;

    constructor(props) {
        super(props);
        this.state = {
            inv: new InventoryModel()
         }
    }

    componentWillMount() {
        this.inventories = [...JSON.parse(localStorage.getItem("inventories"))];

        if (window.location.href.indexOf("view") > -1) {
            this.mode = 1;
        } else if (window.location.href.indexOf("edit") > -1) {
            this.mode = 2;
        } else if (window.location.href.indexOf("add") > -1) {
            this.mode = 3;
        }

        const { id } = this.props.match.params
        this.selectedId = id;

        if (Number(this.selectedId) > 0) {
            let inv = this.inventories.find(i => Number(i.id) == Number(this.selectedId));
            this.setState({ inv });
        }

    }

    handleChange = (event) => {
        let { name, value } = event.target;
        let inv = this.state.inv;
        inv[name] = value;
        this.setState({ inv });
    }

    submitForm =(event) =>{
        event.preventDefault();
        let invFilter = this.inventories.filter(i => Number(i.id) != Number(this.selectedId));
        invFilter.push(this.state.inv)
        localStorage.setItem("inventories", JSON.stringify(invFilter));
        this.props.history.push("/");
    }

    render() { 
        const formStyle={
            width: '20em',
        }
        return ( 
            <form style={formStyle}>
                <div className="form-group">
                    <label htmlFor="formType">Computer Type</label>
                    <select className="form-control" id="formType" name="type" required value={this.state.inv.type} onChange={this.handleChange}>
                    <option value="">Select</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Desktop">Desktop</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="formProcessor">Processor</label>
                    <input type="text" className="form-control" id="formProcessor" placeholder="E.g: i3, i7, ARM" name="processor" required value={this.state.inv.processor} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="formBrand">Brand</label>
                    <input type="text" className="form-control" id="formBrand" placeholder="E.g: HP, Dell" name="brand" required value={this.state.inv.brand} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="formUSBPorts">USB Ports</label>
                    <input type="number" className="form-control" id="formUSBPorts" placeholder="E.g: 2,3" name="usbPorts" required value={this.state.inv.usbPorts} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="formRamSlots">Ram Slots</label>
                    <input type="number" className="form-control" id="formRamSlots" placeholder="E.g: 2,3" name="ramSlots" required value={this.state.inv.ramSlots} onChange={this.handleChange}/>
                </div>
                {this.state.inv.type === "Desktop" ? (<div className="form-group">
                    <label htmlFor="formFormFactor">Form Factor</label>
                    <input type="number" className="form-control" id="formFormFactor" placeholder="E.g: Tower, Server" name="formFactor" value={this.state.inv.formFactor} onChange={this.handleChange}/>
                </div>) : (<div className="form-group">
                    <label htmlFor="formScreenSize">Screen Size</label>
                    <input type="number" className="form-control" id="formScreenSize" placeholder="E.g: 15, 13" name="screenSize" value={this.state.inv.screenSize} onChange={this.handleChange}/>
                </div>)}
                <div>
                    <label htmlFor="formQuantity">Quantity</label>
                    <input type="number" className="form-control" id="formQuantity" name="quantity" required value={this.state.inv.quantity} onChange={this.handleChange}/>
                </div>
                {
                    (this.mode == 2 || this.mode == 3) ? <button type="submit" className="btn btn-primary float-right mt-2" onClick={this.submitForm}>Submit</button> : null
                }
                
            </form>
         );
    }
}
 
export default Inventory;
