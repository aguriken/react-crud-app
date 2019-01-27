import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//     <React.Fragment>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onChange={() => {console.log("I am clicked!")}} />
//     </React.Fragment>
//     )
//   }
// }

const App = () => {
  const profiles = [
    {
      name: "Taro",
      age: 10
    },
    {
      name: "kenji",
      age: 25
    },
    {
      name: "Anonymous"
    }
  ]
  return (
    <div>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />
      })}
    </div>
  )
}

const User = (props) => {
  return <h2>Hi, I am {props.name}, and I am {props.age} years old</h2>
}

User.defaultProps = {
  age: 1
}

export default App;
