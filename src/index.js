// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }
//
// const user = {
//   firstName: 'Onishi',
//   lastName: 'Kazuma'
// }
//
// const element = (
//   <div>
//     <h1>
//       Hello, {formatName(user)}!
//     </h1>
//     <h2>I'm good at "コピペ".</h2>
//   </div>
// )
//
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }
//
// setInterval(tick, 1000);




// function Welcome(props) {
//   return <h1>今日の運勢、 {props.name}</h1>
// }
//
// // const element = <Welcome name="大西ライオン" />;
// //
// // const element = (
// //   <Welcome name="大西ライオン" />,
// //   <Welcome name="かずまっくす" />
// // );
//
// function App() {
//   return (
//     <div>
//       <Welcome name="大西" />
//       <Welcome name="中西" />
//       <Welcome name="小西" />
//     </div>
//   )
// }
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// function formatDate(date) {
//   return date.toLocaleDateString();
// }
//
// function Avatar(props) {
//   return (
//     <img className="Avatar"
//       src={props.author.avatarUrl}
//       alt={props.auther.name}
//     />
//   )
// }
//
// function UserInfo(props) {
//   return (
//     <div className="UserInfo">
//       <Avatar user={props.user} />
//       <div className="UserInfo-name">
//         {props.user.name}
//       </div>
//     </div>
//   )
// }
//
// function Comment(props) {
//   return (
//     <div className="Comment">
//       <UserInfo user={props.auther} />
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   )
// }
//
// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React!',
//   author: {
//     name: 'Hello Kitty',
//     avatarUrl: 'http://placekitten.com/g/64/64'
//   }
// };
//
// ReactDOM.render(
//   <Comment
//     date={comment.date}
//     text={comment.text}
//     author={comment.author} />,
//   document.getElementById('root')
// );

// Components and Propsの章 https://reactjs.org/docs/components-and-props.html
// function formatDate(date) {
//   return date.toLocaleDateString();
// }
//
// function Avatar(props) {
//   return (
//     <img className="Avatar"
//       src={props.user.avatarUrl}
//       alt={props.user.name}
//     />
//
//   );
// }
//
// function UserInfo(props) {
//   return (
//     <div className="UserInfo">
//       <Avatar user={props.user} />
//       <div className="UserInfo-name">
//         {props.user.name}
//       </div>
//     </div>
//   );
// }
//
// function Comment(props) {
//   return (
//     <div className="Comment">
//       <UserInfo user={props.author} />
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }
//
// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React!',
//   author: {
//     name: 'Hello Kitty',
//     avatarUrl: 'http://placekitten.com/g/64/64'
//   }
// };
// ReactDOM.render(
//   <Comment
//     date={comment.date}
//     text={comment.text}
//     author={comment.author} />,
//   document.getElementById('root')
// );


// State and Lifecycle https://reactjs.org/docs/state-and-lifecycle.html
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }
//
//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }
//
//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }
//
//   tick() {
//     this.setState({ date: new Date() });
//   }
//
//   render() {
//     return (
//       <div>
//         <h1>Hello World</h1>
//         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }
//
// function App() {
//   return (
//     <div>
//       <Clock />
//       <Clock />
//       <Clock />
//     </div>
//   );
// }
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};
//
//     // このbindは必要
//     this.handleClick = this.handleClick.bind(this);
//   }
//
//   handleClick() {
//     this.setState(prevState => ({
//       isToggleOn: !prevState.isToggleOn
//     }));
//   }
//
//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF' }
//       </button>
//     );
//   }
// }
//
// ReactDOM.render(
//   <Toggle />,
//   document.getElementById('root')
// );

// //// ログイン　ログアウト
// function UserGreeting(props) {
//   return <h1>おかえりなさい</h1>;
// }
//
// function GuestGreeting(props) {
//   return <h1>登録してくれ！</h1>
// }
//
// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }
//
// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       ログイン
//     </button>
//   )
// }
//
// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       ログアウト
//     </button>
//   );
// }
//
// class LoginControl extends React.Component
// {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick  = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }
//
//   handleLoginClick() {
//     this.setState({isLoggedIn: true});
//   }
//
//   handleLogoutClick() {
//     this.setState({isLoggedIn: false});
//   }
//
//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//
//     // let button = null;
//     // if (isLoggedIn) {
//     //   button = <LogoutButton onClick={this.handleLogoutClick} />
//     // } else {
//     //   button = <LoginButton onClick={this.handleLoginClick} />
//     // }
//
//     return (
//       <div>
//         {isLoggedIn ? (
//         <LogoutButton onClick={this.handleLogoutClick} />
//         ) : (
//           <LoginButton onClick={this.handleLoginClick} />
//         )}
//       </div>
//     );
//   }
// }
//
// ReactDOM.render(
//   <LoginControl />,
//   document.getElementById('root')
// );
//
// // // MailBox
// // function Mailbox(props) {
// //   const unreadMessages = props.unreadMessages;
// //   return (
// //     <div>
// //       <h1>Hello!</h1>
// //       {unreadMessages.length > 0 &&
// //         <h2>
// //           You have {unreadMessages.length} unread messages.
// //         </h2>
// //       }
// //     </div>
// //   );
// // }
// //
// // const messages = ['React', 'Re: React', 'Re:Re:React'];
// // ReactDOM.render(
// //   <Mailbox unreadMessages={messages} />,
// //   document.getElementById('root')
// // );

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="Warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true}
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
        <WarningBanner warn={this.state.showWarning} />
      </div>
    )
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
