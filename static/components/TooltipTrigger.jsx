/*** @jsx React.DOM */
var React = require("react");
import ReactDOM from "react-dom";
import {findDOMNode} from 'react';
import ReactDOMServer from 'react-dom/server';

var $ = require("jquery");
require("bootstrap/js/tooltip");

var TooltipTrigger = React.createClass({
  propTypes: {
    title: React.PropTypes.node.isRequired,
    placement: React.PropTypes.string,
    viewport: React.PropTypes.shape({
      selector: React.PropTypes.string,
      padding: React.PropTypes.number
    })
  },

  getDefaultProps() {
    return {
      placement: "left",
      viewport: {
        selector: "body",
        padding: 5
      }
    };
  },

  componentDidMount() {
    // These can be configured via options; this is just a demo
  $(ReactDOM.findDOMNode(this)).tooltip({
      html: true,
      placement: this.props.placement,
      title: ReactDOMServer.renderToString(this.props.title),
      viewport: this.props.viewport
    });
  },

  componentWillUnmount() {
    var node = $(ReactDOM.findDOMNode(this));
    node.tooltip("destroy");
    node.unbind("show.bs.tooltip", "shown.bs.tooltip", "hide.bs.tooltip", "hidden.bs.tooltip");
  },

  render() {
    return this.props.children;
  }
});

export default TooltipTrigger;
