import React from 'react';
import './style.css';
import "materialize-css";
import 'materialize-css/dist/css/materialize.min.css';
var view = function () {
    return (
        <button onClick={this.high} className="waves-effect waves-light btn-small" ><i className="material-icons left">thumb_up</i>Upvote</button>
    )
}
export default view;
