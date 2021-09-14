import React, { Component } from 'react'

class FetchBody extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bodies: "[]",
      isLoaded: false,

    }
  }

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
  

  render() {
    // const dummyArray = ["mike", "jayden"]
    const { isLoaded } = this.state

    if (!isLoaded) {
      return <div>Still loading...</div>
    }

    else {
     
    return (
      <div className="App">
        <ul>
          {this.state.bodies.map(body =>(
            <li>
              {body.id } | {body.englishName}
            </li>
            
          ))}
        </ul>
      </div>
    )
    }
  }
}

export default FetchBody