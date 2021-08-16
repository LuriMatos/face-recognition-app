import React, {Component} from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

// Please, take your API KEY on Clarifai and change on line 13

const app = new Clarifai.App({
  apiKey: 'API KEY'
})

const particlesParams = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    },
    move: {
      enable: true,
      speed: 1,
    },
    color: {
      value: '#b17dc2'
    },
    line_linked: {
      color: '#b17dc2'
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {}
  }
}

calculateFaceLocation = (data) => {
  const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
  const image = document.getElementById('inputimage');
  const width = Number(image.width);
  const height = Number(image.height);
  return {
    leftCol: clarifaiFace.left_col * width,
    topRow: clarifaiFace.top_row * height,
    rightCol: width - (clarifaiFace.right_col * width),
    bottomRow: height - (clarifaiFace.bottom_row * height)
  }
}

displayFaceBox = (box) => {
  this.setState({box: box});
}

onInputChange = (event) => {
  this.setState({input: event.target.value});
}

onButtonSubmit = () => {  
  this.setState({imageUrl: this.state.input});
  app.models
    .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => {
      return this.displayFaceBox(this.calculateFaceLocation(response))}
      )
    .catch(err => console.log('Error on predict, must verify the API', err));  
}

  render() {
    return (
      <div className="App">
        <Particles 
          className='particles' 
          params={particlesParams}/>
        <Navigation />
        <Logo />
        <ImageLinkForm 
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition 
          box={this.state.box}
          imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
