import React, { Component } from 'react';
import Webcam from 'react-webcam';
import './WebcamCapture.css';

class WebcamCapture extends React.Component {
  setRef = (webcam) => {
    this.webcam = webcam;
  }

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
  };

  render() {
    return (
      <div>
        <Webcam audio={false} ref={this.setRef} screenshotFormat="image/jpeg" />
        <div>
          <button className="take-photo-button" onClick={this.capture}>Capture photo</button>
        </div>
      </div>
    );
  }
}

export default WebcamCapture;
