// component.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

function imageUrl(withId, withGender) {
  if (withGender === 'female') {
    return 'https://randomuser.me/api/portraits/women/' + withId + '.jpg';
  } else {
    return 'https://randomuser.me/api/portraits/men/' + withId + '.jpg';
  }
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Avatar(props) {
  return (
    <div className="profile-picture big-profile-picture clear">
      <img width="150px" alt="Jessica Hartman picture"
           src={imageUrl(props.id, props.gender)} />
    </div>
  );
}

function Buddy(props) {
  return (
    <div className="profile block">
      <a className="add-button" href="#28"><span className="icon entypo-plus scnd-font-color"></span></a>

      <Avatar id={props.id} gender={props.gender}/>

      <h1 className="user-name"><a href={props.website}>{props.first_name} {props.last_name}</a></h1>
      <div className="profile-description">
        <p>Age: {props.age}</p>
        <p className="scnd-font-color">{props.quote}
        </p>
      </div>
      <ul className="profile-options horizontal-list">
        <li><a className="comments" href="#40">
          <p><span className="icon fontawesome-comment-alt scnd-font-color"></span>23
          </p></a>
        </li>
        <li><a className="views" href="#41">
          <p><span className="icon fontawesome-eye-open scnd-font-color"></span>841
          </p></a>
        </li>
        <li><a className="likes" href="#42">
          <p><span className="icon fontawesome-heart-empty scnd-font-color"></span>49
          </p></a>
        </li>
      </ul>
    </div>
  );
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      buddies: [
        { id: randomNumber(1,99), gender: 'female', first_name: 'Lisa', last_name: 'Yi', quote: faker.lorem.sentence(), age: randomNumber(25, 55), website: faker.internet.url() },
        { id: randomNumber(1,99), gender: 'female', first_name: 'Mary', last_name: 'Gunderson', quote: faker.lorem.sentence(), age: randomNumber(25, 55), website: faker.internet.url() },
        { id: randomNumber(1,99), gender: 'male', first_name: 'Lucas', last_name: 'Rose', quote: faker.lorem.sentence(), age: randomNumber(25, 55), website: faker.internet.url() },
        { id: randomNumber(1,99), gender: 'male', first_name: 'George', last_name: 'Fouché', quote: faker.lorem.sentence(), age: randomNumber(25, 55), website: faker.internet.url() }
      ]
    };
  }

  render() {
    return (
      <React.Fragment>
        {this.state.buddies.map(buddy => (<Buddy key={buddy.id} {...buddy}/>))}
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('profile'));
