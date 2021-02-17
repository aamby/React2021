export default class InventoryModel {
    
    id = "";
    type = "";
    processor =  "";
    brand = "";
    usbPorts = "";
    ramSlots = "";
    formFactor = "";
    screenSize = "";
    quantity = ""

    constructor(id, type, processor, brand, usbPorts, ramSlots, formFactor, screenSize, quantity){
        this.id = id;
        this.type = type;
        this.processor = processor;
        this.brand = brand;
        this.usbPorts = usbPorts;
        this.ramSlots = ramSlots;
        this.formFactor = formFactor;
        this.screenSize = screenSize;
        this.quantity = quantity;
    }
}