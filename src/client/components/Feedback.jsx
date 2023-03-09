import React, { Component } from "react";

class Feedback extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    /*
      event.preventDefault();
      const data = new FormData(event.target);

      fetch('/api/form-submit-url', {
        method: 'POST',
        body: data,
      });
      */
  }

  render() {
    return (
      <div>
        <h1>Feedback</h1>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="username">Name</label>
            <input id="username" name="username" type="text" />
          </p>
          <p>
            <label htmlFor="email">From</label>
            <input id="email" name="email" type="email" />
          </p>
          <p>
            <label htmlFor="subject">Subject</label>
            <input id="subject" name="subject" type="text" />
          </p>
          <p>
            <textarea
              cols="20"
              rows="5"
              wrap="hard"
              id="content"
              name="content"
            />
          </p>
          <p>
            <button>Send</button>
          </p>
        </form>
      </div>
    );
  }
}

export default Feedback;
