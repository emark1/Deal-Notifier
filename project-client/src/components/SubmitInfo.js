// import Toggle from 'react-toggle'
import React, { Component } from 'react';
import ToggleButton from 'react-toggle-button'
var Columns = require('react-columns');



export class SubmitInfo extends Component {

    constructor() {
        super()
        this.state = {
        phoneNumber: '',
        Case: false,
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
            <div>
            {/* <ToggleButton
                value={ this.state.SSD || false }
                onToggle={(value) => {
                    this.setState({
                    SSD: !value,
                    })
                }} /> */}
            
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={"Added"}
            value={this.state.SSD}
            onToggle={(value) => {
                this.setState({
                SSD: !value,
                })
            }} />
            SSD
                {/* <Toggle
                id='cheese-status'
                defaultChecked={this.state.cheeseIsReady}
                onChange={this.handleCheeseChange} />
                <label htmlFor='cheese-status'>Adjacent label tag</label> */}
            </div>
            <div>
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={"Added"}
            value={this.state.Case}
            onToggle={(value) => {
                this.setState({
                Case: !value,
                })
            }} />
            </div>
            <div>
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={"Added"}
            value={this.state.HDD}
            onToggle={(value) => {
                this.setState({
                HDD: !value,
                })
            }} />
            </div>
            <div>
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={"Added"}
            value={this.state.Headphones}
            onToggle={(value) => {
                this.setState({
                Headphones: !value,
                })
            }} />
            </div>
            <div>
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={"Added"}
            value={this.state.Fan}
            onToggle={(value) => {
                this.setState({
                Fan: !value,
                })
            }} />
            </div>
            <div>
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={"Added"}
            value={this.state.PSU}
            onToggle={(value) => {
                this.setState({
                PSU: !value,
                })
            }} />
            </div>
            <div>
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={"Added"}
            value={this.state.Prebuilt}
            onToggle={(value) => {
                this.setState({
                Prebuilt: !value,
                })
            }} />
            </div>
            <div>
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={"Added"}
            value={this.state.cpuCooler}
            onToggle={(value) => {
                this.setState({
                cpuCooler: !value,
                })
            }} />
            </div>
            <div>
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={"Added"}
            value={this.state.Webcam}
            onToggle={(value) => {
                this.setState({
                Webcam: !value,
                })
            }} />
            </div>
            <div>
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={"Added"}
            value={this.state.Controller}
            onToggle={(value) => {
                this.setState({
                Controller: !value,
                })
            }} />
            </div>
            <div>
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={"Added"}
            value={this.state.Laptop}
            onToggle={(value) => {
                this.setState({
                Laptop: !value,
                })
            }} />
            </div>
            <div>
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={"Added"}
            value={this.state.Monitor}
            onToggle={(value) => {
                this.setState({
                Monitor: !value,
                })
            }} />
            </div>
            <div>
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={"Added"}
            value={this.state.VR}
            onToggle={(value) => {
                this.setState({
                VR: !value,
                })
            }} />
            </div>
            <div>
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={"Added"}
            value={this.state.RAM}
            onToggle={(value) => {
                this.setState({
                RAM: !value,
                })
            }} />
            </div>
            <div>
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={"Added"}
            value={this.state.Headset}
            onToggle={(value) => {
                this.setState({
                Headset: !value,
                })
            }} />
            </div>
            <div>
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={"Added"}
            value={this.state.OpticalDrive}
            onToggle={(value) => {
                this.setState({
                OpticalDrive: !value,
                })
            }} />
            </div>
            <div>
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={"Added"}
            value={this.state.CPU}
            onToggle={(value) => {
                this.setState({
                CPU: !value,
                })
            }} />
            </div>
            <div>
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={"Added"}
            value={this.state.OS}
            onToggle={(value) => {
                this.setState({
                OS: !value,
                })
            }} />
            </div>
            <div>
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={"Added"}
            value={this.state.Motherboard}
            onToggle={(value) => {
                this.setState({
                Motherboard: !value,
                })
            }} />
            </div>
            <div>
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={"Added"}
            value={this.state.Speakers}
            onToggle={(value) => {
                this.setState({
                Speakers: !value,
                })
            }} />
            </div>
            <div>
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={"Added"}
            value={this.state.Keyboard}
            onToggle={(value) => {
                this.setState({
                Keyboard: !value,
                })
            }} />
            </div>
            <div>
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={"Added"}
            value={this.state.Networking}
            onToggle={(value) => {
                this.setState({
                Networking: !value,
                })
            }} />
            </div>
            <div>
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={"Added"}
            value={this.state.Furniture}
            onToggle={(value) => {
                this.setState({
                Furniture: !value,
                })
            }} />
            </div>
            <div>
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={"Added"}
            value={this.state.GPU}
            onToggle={(value) => {
                this.setState({
                GPU: !value,
                })
            }} />
            </div>
            <div>
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={"Added"}
            value={this.state.Mouse}
            onToggle={(value) => {
                this.setState({
                Mouse: !value,
                })
            }} />
            </div>
            <div>
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={"Added"}
            value={this.state.Processor}
            onToggle={(value) => {
                this.setState({
                Processor: !value,
                })
            }} />
            </div>
            <div>
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={"Added"}
            value={this.state.HomeTheaterPC}
            onToggle={(value) => {
                this.setState({
                HomeTheaterPC: !value,
                })
            }} />
            </div>
            <div>
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={"Added"}
            value={this.state.flashDrive}
            onToggle={(value) => {
                this.setState({
                flashDrive: !value,
                })
            }} />
            </div>
            <div>
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={"Added"}
            value={this.state.Router}
            onToggle={(value) => {
                this.setState({
                Router: !value,
                })
            }} />
            </div>
            <div>
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={"Added"}
            value={this.state.Mic}
            onToggle={(value) => {
                this.setState({
                Mic: !value,
                })
            }} />
            </div>
            <div>
            <ToggleButton
            inactiveLabel={"X"}
            activeLabel={"Added"}
            value={this.state.Cooler}
            onToggle={(value) => {
                this.setState({
                Cooler: !value,
                })
            }} />
            </div>

            {/* <div>
            <label>
                <Toggle
                    defaultChecked={this.state.baconIsReady}
                    onChange={this.handleBaconChange} />
                <span>Wrapper label tag</span>
                </label>
            </div> */}

            </div>
        )
    }
}