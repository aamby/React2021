import React, {Component} from 'react';
//import { useHistory } from 'react-router-dom'
import InventoryModel from '../models/Inventory'
import {Link} from 'react-router-dom'

class Inventories extends Component{
    
    state = {
        inventories: [],
    };

    componentDidMount()
    {
        this.setState({
            inventories: this.fetchDataFromAPI()
        })
    }



    removeInventory = (id) =>{
        console.log("Request to remove id ", id);
        let inventories = [...this.state.inventories].filter(i => i.id !== id);
        this.setState( {inventories});
        // Remove Inventories from DB.

    }

    addUpdateInventory = (inventory) => {
        this.setState({
            inventories: [...this.state.inventories].push(inventory)
        })
    }

    detailsInventory = (i)=>{
        console.log("Request to show details of id ", i);
        //history.push("/inventory");
    }

    fetchDataFromAPI = () => {
       return  [new InventoryModel("1","Desktop","i3","HP","3","2","Tower","","10"),new InventoryModel("2","Laptop","i5","Dell","3","2","","15.6","10")];
    }

    render() {
        return (
            <table className="table">
                <thead>
                <tr>
                <th scope="col">Type</th>
                <th scope="col">Processor</th>
                <th scope="col">Brand</th>
                <th scope="col">USB Ports</th>
                <th scope="col">Ram Slots</th>
                <th scope="col">Form Factor</th>
                <th scope="col">Screen Size</th>
                <th scope="col">Quantity</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
            {
            this.state.inventories.map(i => {
                return(
                        <tr key={i.id} >
                            <td>{i.type}</td>
                            <td>{i.processor}</td>
                            <td>{i.brand}</td>
                            <td>{i.usbPorts}</td>
                            <td>{i.ramSlots}</td>
                            <td>{i.formFactor}</td>
                            <td>{i.screenSize}</td>
                            <td>{i.quantity}</td>
                            <td colSpan="2">
                                <button className="btn btn-primary ml-2" onClick={() => {this.removeInventory(i.id)}}>Delete</button>
                                <Link className="btn btn-primary ml-2" to="/Inventory" 
                                        onClick={() => {this.detailsInventory(i)}}>Details</Link>
                            </td>
                        </tr>
                    )}
            )}
            </tbody>
        </table>
        );
    }
        
    }
export default Inventories;