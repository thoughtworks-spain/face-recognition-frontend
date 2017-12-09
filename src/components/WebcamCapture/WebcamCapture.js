import React, { Component } from 'react';
import Webcam from 'react-webcam';
import recognizePerson from '../../actions/recognizePerson';
import './WebcamCapture.css';

class WebcamCapture extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: '' };
  }

  setRef = (webcam) => {
    this.webcam = webcam;
  }

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    recognizePerson(imageSrc).then(user => this.setState(() => ({ userName: user.name })));
  };

  getUserName() {
    return this.state.userName ? `Hello ${this.state.userName}!` : '';
  }

  render() {
    return (
      <div>
        <Webcam audio={false} ref={this.setRef} screenshotFormat="image/jpeg" />
        <div>
          <button className="take-photo-button" onClick={this.capture}>Capture photo</button>
        </div>
        <h2 className="greeting">{this.getUserName()}</h2>
      </div>
    );
  }
}

export default WebcamCapture;
