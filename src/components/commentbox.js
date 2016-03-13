var React = require('react')
var CommentForm = require('./commentform.js')
var CommentList = require('./commentlist.js')
var ajax = require('../ajax.js')



module.exports = React.createClass({
  getInitialState: function(){
    console.log("get initial state", this.props.url, this.props.data)
    return {data: []}

  },
  componentDidMount: function() {

    console.log("componentdidmount", this.props.url, this.state.data)

    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
 },
 loadCommentsFromServer: function(){
   ajax(this.props.url, function(data) {
         this.setState({data: data})
       }
       .bind(this))
 },

  render: function(){
    console.log("in render", this.state.data)
    return (
      <div className="commentBox">
        <h1>CommentBox </h1>
        <CommentForm />
        <CommentList data={this.state.data}/>
      </div>
    )
  }
})
