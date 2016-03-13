var React = require('react')
var CommentForm = require('./commentform.js')
var CommentList = require('./commentlist.js')



module.exports = React.createClass({
  render: function(){
    console.log(this.props.data)
    return (
      <div className="commentBox">
        <h1>CommentBox </h1>
        <CommentForm />
        <CommentList data={this.props.data}/>
      </div>
    )
  }
})
