var React = require('react');

var Square = function(props) {
    return (
        <div id={props.squareID} className={props.classNames + " " + props.onWin} onClick={props.onclick}>{props.text}</div>
    );
};

module.exports = Square;
