import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App2 extends Component {
    render () {
        return (
          <Router>
            <Route path="/" component={App}>
              <Route path="about" component={About} />
              <Route path="inbox" component={Inbox}>
                <Route path="messages/:id" component={Message} />
              </Route>
            </Route>
            </Router>
        )
    }
}
// // this is the default behavior/ 
// const getConfirmation = (message, callback) => {
//     const allowTransition = window.confirm(message)
//     callback(allowTransition)
//   }
  
// const BasicExample = () => (
//     <Router basename="/calendar" getUserConfirmation={getConfirmation('123', (e) => console.log(e))}>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/topics">Topics</Link>
//           </li>
//         </ul>
  
//         <hr />
  
//         <Route exact path="/" component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/topics" component={Topics} />
//       </div>
//     </Router>
//   );
  
//   const Home = () => (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
  
//   const About = () => (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
  
//   const Topics = ({ match }) => (
//     <div>
//       <h2>Topics</h2>
//       <ul>
//         <li>
//           <Link to={`${match.url}/rendering`}>Rendering with React</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//         </li>
//       </ul>
  
//       <Route path={`${match.url}/:topicId`} component={Topic} />
//       <Route
//         exact
//         path={match.url}
//         render={() => <h3>Please select a topic.</h3>}
//       />
//     </div>
//   );
  
//   const Topic = ({ match }) => (
//     <div>
//       <h3>{match.params.topicId}</h3>
//     </div>
//   );

const App = props => {
  return (
    <div>
      <h1>App</h1>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/inbox">Inbox</Link></li>
      </ul>
      {props.children}
    </div>
  )
}

const About = props => {
  return <h3>About</h3>
}

const Inbox = props => {
  return (
    <div>
      <h2>Inbox</h2>
      {props.children || "Welcome to your Inbox"}
    </div>
  )
}

const Message = props => {
  return <h3>Message {props.params.id}</h3>
}

export default App2