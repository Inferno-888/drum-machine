class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      triggered: "Play!",
      drumPadStyle1: {},
      drumPadStyle2: {},
      drumPadStyle3: {},
      drumPadStyle4: {},
      drumPadStyle5: {},
      drumPadStyle6: {},
      drumPadStyle7: {},
      drumPadStyle8: {},
      drumPadStyle9: {},
    }
    
    this.handleClick = this.handleClick.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
  }
  
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown)
    window.addEventListener("keyup", this.handleKeyUp)
  }
  
  handleKeyDown(event) {
    let pressedButtonAudio
    let id
    const style = { outline: "none", border: "none", boxShadow: "1px 1px 2px 2px gray" }
    let display
    
    switch(event.keyCode) {
      case(81):
        pressedButtonAudio = document.getElementById("Q")
        id = "Heater-1"
        display = id.replace(/[-]+/g, " ")
        this.setState({triggered: display, drumPadStyle1: style})
        break;
      case(87):
        pressedButtonAudio = document.getElementById("W")
        id = "Heater-2"
        display = id.replace(/[-]+/g, " ")
        this.setState({triggered: display, drumPadStyle2: style})
        break;
      case(69):
        pressedButtonAudio = document.getElementById("E")
        id = "Heater-3"
        display = id.replace(/[-]+/g, " ")
        this.setState({triggered: display, drumPadStyle3: style})
        break;
      case(65):
        pressedButtonAudio = document.getElementById("A")
        id = "Heater-4"
        display = id.replace(/[-]+/g, " ")
        this.setState({triggered: display, drumPadStyle4: style})
        break;
      case(83):
        pressedButtonAudio = document.getElementById("S")
        id = "Clap"
        display = id.replace(/[-]+/g, " ")
        this.setState({triggered: display, drumPadStyle5: style})
        break;
      case(68):
        pressedButtonAudio = document.getElementById("D")
        id = "Open-HH"
        display = id.replace(/[-]+/g, " ")
        this.setState({triggered: display, drumPadStyle6: style})
        break;
      case(90):
        pressedButtonAudio = document.getElementById("Z")
        id = "Kick-n'-Hat"
        display = id.replace(/[-]+/g, " ")
        this.setState({triggered: display, drumPadStyle7: style})
        break;
      case(88):
        pressedButtonAudio = document.getElementById("X")
        id = "Kick"
        display = id.replace(/[-]+/g, " ")
        this.setState({triggered: display, drumPadStyle8: style})
        break;
      case(67):
        pressedButtonAudio = document.getElementById("C")
        id = "Closed-HH"
        display = id.replace(/[-]+/g, " ")
        this.setState({triggered: display, drumPadStyle9: style})
        break;
      default: 
        pressedButtonAudio = null
        id = null
        break;
    }
    
    pressedButtonAudio !== null ? pressedButtonAudio.currentTime = 0 : null
    pressedButtonAudio !== null ? pressedButtonAudio.play() : null
  }
  
  handleKeyUp(event) {
    const style = { boxShadow: "2px 2px 3px 3px gray" }
    
    switch(event.keyCode) {
      case(81):
        this.setState({drumPadStyle1: style})
        break;
      case(87):
        this.setState({drumPadStyle2: style})
        break;
      case(69):
        this.setState({drumPadStyle3: style})
        break;
      case(65):
        this.setState({drumPadStyle4: style})
        break;
      case(83):
        this.setState({drumPadStyle5: style})
        break;
      case(68):
        this.setState({drumPadStyle6: style})
        break;
      case(90):
        this.setState({drumPadStyle7: style})
        break;
      case(88):
        this.setState({drumPadStyle8: style})
        break;
      case(67):
        this.setState({drumPadStyle9: style})
        break;
      default:
        break;
    }
  }
  
  handleClick(event) {
    let audio
    switch(event.target.id) {
        case("Heater-1"):
          audio = document.getElementById("Q")
          break;
        case("Heater-2"):
          audio = document.getElementById("W")
          break;
        case("Heater-3"):
          audio = document.getElementById("E")
          break;
        case("Heater-4"):
          audio = document.getElementById("A")
          break;
        case("Clap"):
          audio = document.getElementById("S")
          break;
        case("Open-HH"):
          audio = document.getElementById("D")
          break;
        case("Kick-n'-Hat"):
          audio = document.getElementById("Z")
          break;
        case("Kick"):
          audio = document.getElementById("X")
          break;
        case("Closed-HH"):
          audio = document.getElementById("C")
          break;
        default:
          audio = null
          break;
    }
    
    audio.currentTime = 0
    audio.play()
    
    const display = event.target.id.replace(/[-]+/g, " ")
    this.setState({triggered: display})
  }
  
  render() {
    return (
      <div id="drum-machine">
        <div id="button-div">
          <button className="drum-pad btn btn-primary" id="Heater-1" onClick={this.handleClick} style={this.state.drumPadStyle1}>Q
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className="clip" id="Q"></audio>
          </button>
          <button className="drum-pad btn btn-primary" id="Heater-2" onClick={this.handleClick} style={this.state.drumPadStyle2}>W
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" className="clip" id="W"></audio>
          </button>
          <button className="drum-pad btn btn-primary" id="Heater-3" onClick={this.handleClick} style={this.state.drumPadStyle3}>E
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" className="clip" id="E"></audio>
          </button>
          <button className="drum-pad btn btn-primary" id="Heater-4" onClick={this.handleClick} style={this.state.drumPadStyle4}>A
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" className="clip" id="A"></audio>
          </button>
          <button className="drum-pad btn btn-primary" id="Clap" onClick={this.handleClick} style={this.state.drumPadStyle5}>S
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" className="clip" id="S"></audio>
          </button>
          <button className="drum-pad btn btn-primary" id="Open-HH" onClick={this.handleClick} style={this.state.drumPadStyle6}>D
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" className="clip" id="D"></audio>
          </button>
          <button className="drum-pad btn btn-primary" id="Kick-n'-Hat" onClick={this.handleClick} style={this.state.drumPadStyle7}>Z
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" className="clip" id="Z"></audio>
          </button>
          <button className="drum-pad btn btn-primary" id="Kick" onClick={this.handleClick} style={this.state.drumPadStyle8}>X
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" className="clip" id="X"></audio>
          </button>
          <button className="drum-pad btn btn-primary" id="Closed-HH" onClick={this.handleClick} style={this.state.drumPadStyle9}>C
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" className="clip" id="C"></audio>
          </button>
        </div>
        <div id="display">
          <h1 id="display-text">{this.state.triggered}</h1>
        </div>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById("root"))
