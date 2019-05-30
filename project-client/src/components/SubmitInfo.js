import React, { Component } from 'react';
import ToggleButton from 'react-toggle-button'
var Columns = require('react-columns');

export class SubmitInfo extends Component {

    constructor() {
        super()
        this.state = {
        phoneNumber: '',
        Case: true,
        Cooler: false,
        HDD: false,
        Headphones: false,
        SSD: false,
        Fan: false,
        PSU: false,
        Prebuilt: false,
        cpuCooler: false,
        Webcam: false,
        Controller: false,
        Laptop: false,
        Monitor: false,
        VR: false,
        RAM: false,
        Headset: false,
        OpticalDrive: false,
        CPU: false,
        OS: false,
        Motherboard: false,
        Speakers: false,
        Keyboard: false,
        Networking: false,
        Furniture: false,
        GPU: false,
        Mouse: false,
        Processor: false,
        HomeTheaterPC: false,
        Cables: false,
        flashDrive: false,
        Router: false,
        Mic: false,
          }
      }

    handleTextBoxChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
    }

    deleteClick = () => {
        let phoneNumber = this.state.phoneNumber
        fetch('http://localhost:1010/delete-number', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({phoneNumber:phoneNumber})
        })
    }

    handleProductClick = (e) => {
    this.setState({
        [e.target.name]: true
    })
    }

      submitClick = () => {
        let state = {state: this.state}
        // let Case = {state: this.state.case}
        fetch('http://localhost:1010/add-user/', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(state)
        })
        }

    render() {
        return (
            <div>
            <div>
                <input type="text" onChange={this.handleTextBoxChange} placeholder="Enter Phone Number" name="phoneNumber" />
                <button onClick={this.submitClick}>Submit</button>
                <button onClick={this.deleteClick}>Delete Number</button>
                
            </div>
            {/* <div>
            <ToggleButton
                value={ self.state.value || false }
                onToggle={(value) => {
                    self.setState({
                    value: !value,
                    })
                }} />
            </div> */}

            <div>
                <button onClick={this.handleProductClick} name="Case">Case</button>
            </div>
            <div>
            <button onClick={this.handleProductClick} name="Cooler">Cooler</button>
            </div>
            <div>
            <button onClick={this.handleProductClick} name="HDD">HDD</button>
            </div>
            <div>
            <button onClick={this.handleProductClick} name="Headphones">Headphones</button>
            </div>
            <div>
            <button>SSD</button>
            </div>
            <div>
            <button>Fan</button>
            </div>
            <div>
            <button>PSU</button>
            </div>
            <div>
            <button>Prebuilt</button>
            </div>
            <div>
            <button>CPU Cooler</button>
            </div>
            <div>
            <button>Webcam</button>
            </div>
            <div>
            <button>Speakers</button>
            </div>
            <div>
            <button>Controllers</button>
            </div>
            <div>
            <button>Laptop</button>
            </div>
            <div>
            <button>Monitor</button>
            </div>
            <div>
            <button>VR</button>
            </div>
            <div>
            <button>RAM</button>
            </div>
            <div>
            <button>Headset</button>
            </div>
            <div>
            <button>Optical Drives</button>
            </div>
            <div>
            <button>CPU</button>
            </div>
            <div>
            <button>OS</button>
            </div>
            <div>
            <button>Motherboard</button>
            </div>
            <div>
            <button>GPU</button>
            </div>
            <div>
            <button>Mouse</button>
            </div>
            <div>
            <button>Keyboard</button>
            </div>
            <div>
            </div>
            <div>
                <button></button>
            </div>
            </div>
        )
    }
}