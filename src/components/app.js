var React = require('react')
var CommentBox = require('./commentbox.js')
var CommentForm = require('./commentform.js')

var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
]

module.exports = React.createClass({

  render: function() {
    console.log('in app.js render function')
    return(
      <div className='app'  >
        <p>This is coming from the app.js smart component - the highest level</p>
        <div>
          <CommentBox data={data}/>

        </div>
      </div>

    )
  }
})
