// component.jsx
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="profile block">
                <a className="add-button" href="#28"><span className="icon entypo-plus scnd-font-color"></span></a>
                <div className="profile-picture big-profile-picture clear">
                    <img width="150px" alt="Jessica Hartman picture"
                        src="https://randomuser.me/api/portraits/women/30.jpg"/>
                </div>
                <h1 className="user-name">Jessica REACT Hartman</h1>
                <div className="profile-description">
                    <p className="scnd-font-color">Lorem ipsum dolor sit amet consectetuer adipiscing</p>
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
}

ReactDOM.render(<App />, document.getElementById('profile'));
