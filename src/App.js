import React, { Component } from 'react';
import './App.css';
import Toggle from './Toggle';
import Portal from './Portal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="bg-black tc pv4 avenir flex items-center justify-center absolute top-0 bottom-0 right-0 left-0">
          <div>
            <Toggle>
              {({on, toggle}) => (
                <div>
                  <button
                    className="f6 grow no-underline br-pill ph3 pv2 mr2 dib white bg-hot-pink"
                    onClick={toggle}>Inline Squirrel</button>
                  {on && (<div>
                    <h1 className="washed-red">Hey look. A squirrel.</h1>
                    <img className="br-100 h4 w4 dib ba b--black-05 pa2" src="https://upload.wikimedia.org/wikipedia/commons/9/93/Common_Squirrel.jpg" />
                  </div>)}
               </div>
              )}
            </Toggle>
          </div>
          <div>
            <Toggle>
              {({on, toggle}) => (
                <div>
                  <button
                    className="f6 grow no-underline br-pill ph3 pv2 mh2 dib white bg-hot-pink"
                    onClick={toggle}>Portal Squirrel</button>
                  <Portal>
                    { on && (<div className="bg-white absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center">
                      <div className="mw5 mw7-ns center bg-light-gray pa3 ph5-ns">
                        <img className="db w-100 br2 br--top5" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Eastern_Grey_Squirrel_in_St_James%27s_Park%2C_London_-_Nov_2006_edit.jpg" />
                        <h1>Hey look. Another squirrel.</h1>
                        <button
                          className="f6 grow no-underline br-pill ph3 pv2 mt2 dib white bg-hot-pink"
                          onClick={toggle}>Enough Squirrel</button>
                      </div>
                    </div>)}
                  </Portal>
                </div>
              )}
            </Toggle>
          </div>
          <div>
            <Toggle>
              {({on, toggle}) => (
                <div>
                  <button
                    className="f6 grow no-underline br-pill ph3 pv2 ml2 dib white bg-hot-pink"
                    onClick={toggle}>Portal Squirrel 2</button>
                  { on && (<div className="bg-white absolute bottom-0 right-0 flex items-center justify-center">
                  <div className="mw5 mw7-ns center bg-light-gray pa3 ph5-ns">
                    <iframe src="https://giphy.com/embed/oZgy3v1UMQ3QY" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/water-squirrel-oZgy3v1UMQ3QY">via GIPHY</a></p>
                    <div>
                      <button
                        className="f6 grow no-underline br-pill ph3 pv2 ml2 dib white bg-hot-pink"
                        onClick={toggle}>Enough Squirrel</button>
                    </div>
                  </div>
                  </div>)}
                </div>
              )}
            </Toggle>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
