import React, { Component } from 'react'

class FetchBody extends Component {
/* ok how this works: I have a state, this is where the information
from the api will be stored. i have a state of "isLoaded" as well so I can tell
react to render things conditionally. E.g. when the isLoaded is set to false, then bodies will render.
*/
  constructor(props) {
    super(props);
    this.state = {
      bodies: "[]",
      isLoaded: false,

    }
  }
  // Bodies is to be rendered as an array.
// I'm using component didMount to fetch data. This loads AFTER the "render".
// I fetch the data on l. 20, then l. 21 I take the response and convert it to json format
// then within that promise, which .then is, I'm setting the state to contain the array within the json.
// As well, the boolean will be true for isLoaded, which later in my code, I have an element rendered if the boolean is set to true.

  componentDidMount() {
    fetch("https://api.le-systeme-solaire.net/rest/bodies/")
    .then(res => res.json())
    .then(json => {
      console.log(json.bodies)
      this.setState({
        isLoaded: true,
        bodies: json.bodies,
      })
    }).catch((error) => {
      console.log(error)
    })
  }
// I also have a .catch promise to catch and console log any errors.

/**
 * JAYDEN REMEMBER: When you have an error, console log each step to see what 
 * Problem is!!!
 */

  render() {
    // declaring a variable for the state boolean.
    const { isLoaded } = this.state
    // if else chain for the boolean. Simply put: If the boolean for the state of IsLoaded is true,
    // then the following div will render. But then, if it's not loading, and it has fetched the data,
    // then it returns the intended elements.
    if (!isLoaded) {
      return <div>Still loading...</div>
    }

    else {
     
    return (
      <div className="App">
        <ul>
          {this.state.bodies.map(body =>(
            <li key="{id}">
               {body.englishName}
               {body.gravity} 
            </li>
            // fun fact, this "gravity" property measures in G's.
           // In here, I have englishName which is one of the objects within the array. I'm going to implement other elements of the array too! 
          ))}
        </ul>
        <div>
          {this.state.bodies.map(body =>(
            <div key="index">
              {body.density}
              {body.avgTemp}
            </div>
          ))}
        </div>
      </div>
    )
    }
  }
}

export default FetchBody