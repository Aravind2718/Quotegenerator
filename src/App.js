import React from 'react';
import axios from 'axios';
import './index.css';
import ColorSchemesExample from './components/Nav';

class App extends React.Component {
  state = {
    advice: '',
    author: '',
    time: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.fetchAdvice();
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  }

  fetchAdvice = () => {
    axios.get('https://api.quotable.io/random')
      .then((response) => {
        const { content, author } = response.data;
        this.setState({ advice: content, author: author });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  copyToClipboard = () => {
    const quote = `${this.state.advice} - ${this.state.author}`;
    navigator.clipboard.writeText(quote);
    alert(`copied to clipboard!`);
  }
  
  render() {
    return (
      <>
        <div className="class1 flex flex-col h-screen justify-between ">
          <div className='class2 mt-5  p-5 w-500 m-lg-5 '>
            <div className='p-5'>
              <h3 className="text-center text-4xl text-light font-medium">{this.state.advice}</h3>
              <h1 className="text-center mt-3 text-3xl">- {this.state.author}</h1>
            </div>
            <div className='flex items-center justify-between mt-5'>
              <button className="text-white font-medium p-3 rounded bg-black" onClick={this.fetchAdvice}>Load Another</button>
            </div>
          </div>
          <h5 className='bg-pink-400 text-light text-center fs-5 py-2 flex-row'>{this.state.time} | Aravind's Work</h5>
        </div>
      </>
    );
  }
}

export default App;
