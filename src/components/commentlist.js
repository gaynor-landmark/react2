var React = require('react')
var Comment = require('./comment.js')
var marked = require('react-marked')



module.exports = React.createClass({
  render: function(){
    console.log('incommentlist', this.props.data)

    var commentNodes = this.props.data.map(function(comment){
      return (
      <Comment author={comment.author} key={comment.id}>
        {comment.text}
      </Comment>)
    })

    return (

        <div className='commentlist'>
          {commentNodes}
        </div>
      )
  }
})
