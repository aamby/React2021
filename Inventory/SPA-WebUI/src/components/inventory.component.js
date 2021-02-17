import React, { Component } from 'react'
import InventoryModel from '../models/Inventory';


class Inventory extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id:"",
            type:"",
            processor: "",
            brand:"",
            usbPorts:"",
            ramSlots:"",
            formFactor:"",
            screenSize:"",
            quantity:""
         }
    }

    

    handleChange = (event) => {
        let { name, value } = event.target;
        console.log(name, value);
        this.setState({
            [name]: value,
        })
    }

    submitForm =(event) =>{
        event.preventDefault();
        const inventory = {
            id:this.state.id,
            type:this.state.type,
            processor: this.state.processor,
            brand:this.state.brand,
            usbPorts:this.state.usbPorts,
            ramSlots:this.state.ramSlots,
            formFactor:this.state.formFactor,
            screenSize:this.state.screenSize,
            quantity:this.state.quantity
        }
        this.props.onAddUpdateInventory(inventory);
    }

    resetForm =() =>
    {
        this.setState({ 
            ...new InventoryModel()
          });
    }

    render() { 
        const formStyle={
            width: '20em',
        }
        return ( 
            <form style={formStyle}>
                <div className="form-group">
                    <label htmlFor="formType">Computer Type</label>
                    <select className="form-control" id="formType" name="type" required value={this.state.type} onChange={this.handleChange}>
                    <option value="">Select</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Desktop">Desktop</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="formProcessor">Processor</label>
                    <input type="text" className="form-control" id="formProcessor" placeholder="E.g: i3, i7, ARM" name="processor" required value={this.state.processor} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="formBrand">Brand</label>
                    <input type="text" className="form-control" id="formBrand" placeholder="E.g: HP, Dell" name="brand" required value={this.state.brand} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="formUSBPorts">USB Ports</label>
                    <input type="number" className="form-control" id="formUSBPorts" placeholder="E.g: 2,3" name="usbPorts" required value={this.state.usbPorts} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="formRamSlots">Ram Slots</label>
                    <input type="number" className="form-control" id="formRamSlots" placeholder="E.g: 2,3" name="ramSlots" required value={this.state.ramSlots} onChange={this.handleChange}/>
                </div>
                {this.state.type === "Desktop" ? (<div className="form-group">
                    <label htmlFor="formFormFactor">Form Factor</label>
                    <input type="number" className="form-control" id="formFormFactor" placeholder="E.g: Tower, Server" name="formFactor" value={this.state.formFactor} onChange={this.handleChange}/>
                </div>) : (<div className="form-group">
                    <label htmlFor="formScreenSize">Screen Size</label>
                    <input type="number" className="form-control" id="formScreenSize" placeholder="E.g: 15, 13" name="screenSize" value={this.state.screenSize} onChange={this.handleChange}/>
                </div>)}
                <div>
                    <label htmlFor="formQuantity">Quantity</label>
                    <input type="number" className="form-control" id="formQuantity" name="quantity" required value={this.state.quantity} onChange={this.handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary float-right mt-2" onClick={this.submitForm}>Submit</button>
            </form>
         );
    }
}
 
export default Inventory;
