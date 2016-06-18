var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [
  {
    id: 1,
    text: 'Choco',
  },
  {
    id: 2,
    text: 'Coffee',
  },
  {
    id: 3,
    text: 'Cookies',
  }
];

var List = React.createClass({
  render(){

    var listItems = ingredients.map(function(item) {
      return <ListItem key={item.id} ingredient={item.text} />
    })

    return(
      <ul>{listItems}</ul>
    )

  }
})

module.exports = List;
