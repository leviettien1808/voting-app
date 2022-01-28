/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

export default class Product extends Component {
  handleUpVote = () => {
    this.props.onVote(this.props.id);
  };

  render() {
    return (
      <div style={{ alignItems: "center", display: "flex", marginBottom: 12 }}>
        <div style={{ marginRight: 24 }}>
          <img src={this.props.productImageUrl} />
        </div>
        <div>
          <div>
            <a onClick={this.handleUpVote}>⏶</a>
            {this.props.votes}
          </div>
          <div>
            <a href={this.props.url}>{this.props.title}</a>
            <p style={{ fontWeight: "bold" }}>{this.props.description}</p>
          </div>
          <div style={{ alignItems: "center", display: "flex" }}>
            <span style={{ marginRight: 12 }}>Sumitted by:</span>
            <img
              src={this.props.submitterAvatarUrl}
              style={{ borderRadius: "50%" }}
            />
          </div>
        </div>
      </div>
    );
  }
}
