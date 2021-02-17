import React, { Component } from 'react'
import InventoryModel from '../models/Inventory'

class AddInventory extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            inventory: new InventoryModel()
            }
    }

    handleChange = (event) => {
        let { name, value } = event.target;
        this.setState({
            [name]: value,
        })
    }

    submitForm =() =>{

    }

    resetForm =() =>
    {
        this.setState({ 
            inventory: new InventoryModel()
         });
    }

    render() { 
        return ( 
            <form>
                <div className="form-group">
                    <label htmlFor="htmlFormType">Computer Type</label>
                    <select className="form-control" id="formType" name="type" required value={this.state.inventory.type} onChange={this.handleChange}>
                    <option>Laptop</option>
                    <option>Desktop</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="formProcessor">Processor</label>
                    <input type="text" className="form-control" id="formProcessor" placeholder="E.g: i3, i7, ARM" name="processor" required value={this.state.inventory.processor} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="formBrand">Brand</label>
                    <input type="text" className="form-control" id="formBrand" placeholder="E.g: HP, Dell" name="brand" required value={this.state.inventory.brand} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="formUSBPorts">USB Ports</label>
                    <input type="number" className="form-control" id="formUSBPorts" placeholder="E.g: 2,3" name="usbPorts" required value={this.state.inventory.usbPorts} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="formRamSlots">Ram Slots</label>
                    <input type="number" className="form-control" id="formRamSlots" placeholder="E.g: 2,3" name="ramSlots" required value={this.state.inventory.ramSlots} onChange={this.handleChange}/>
                </div>
                {this.state.type === "Desktop" ? (<div className="form-group">
                    <label htmlFor="formFormFactor">Form Factor</label>
                    <input type="number" className="form-control" id="formFormFactor" placeholder="E.g: Tower, Server" name="formFactor" value={this.state.inventory.formFactor} onChange={this.handleChange}/>
                </div>) : (<div className="form-group">
                    <label htmlFor="formScreenSize">Screen Size</label>
                    <input type="number" className="form-control" id="formScreenSize" placeholder="E.g: 15, 13" name="screenSize" value={this.state.inventory.screenSize} onChange={this.handleChange}/>
                </div>)}
                <div>
                    <label htmlFor="formQuantity">Quantity</label>
                    <input type="number" className="form-control" id="formQuantity" name="quantity" required value={this.state.inventory.quantity} onChange={this.handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.submitForm}>Submit</button>
            </form>
         );
    }
}
 
export default AddInventory;
