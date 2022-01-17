import React, { Component } from 'react'
import styled from 'styled-components'
class DemoForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      comment: '',
      language: '',
      gender: '',
      languageprogram: '',
      fileUpload: '',
      date: '',
      month: '',
    }
  }
  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    })
  }
  handleCommentChange = (event) => {
    this.setState({
      comment: event.target.value,
    })
  }
  handleLanguageChange = (event) => {
    this.setState({
      language: event.target.value,
    })
  }
  onChangeValue = (event) => {
    this.setState({
      gender: event.target.value,
    })
  }
  handleInputChange = (event) => {
    this.setState({
      languageprogram: event.target.value,
    })
    console.log(this.state.languageprogram)
  }
  handleFileUpload = (event) => {
    this.setState({
      fileUpload: event.target.value,
    })
  }
  handleDate = (event) => {
    this.setState({
      date: event.target.value,
    })
  }

  handleMonth = (event) => {
    this.setState({
      month: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(
      `Email:${this.state.email}  
      Comment: ${this.state.comment} 
      Language: ${this.state.language} 
      Gender: ${this.state.gender}
    Upload file:${this.state.fileUpload}
    Programming-Languages:${this.state.languageprogram}
    Date:${this.state.date}
    Month:${this.state.month}
    `,
    )
  }
  render() {
    const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;
    return (
      <form onSubmit={this.handleSubmit} className="form-style">
        <div  className="mb-20">
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
        </div>
        <div className="mb-20">
          <label htmlFor="comment">Comment: </label>
          <textarea
            value={this.state.comment}
            id="comment"
            onChange={this.handleCommentChange}
          ></textarea>
        </div>
        <div  className="mb-20">
          <label htmlFor="language">Language: </label>
          <select
            value={this.state.language}
            id="language"
            onChange={this.handleLanguageChange}
          >
            <option value="react">React</option>
            <option value="js">JS</option>
            <option value="angular">Angular</option>
            <option value="html">HTML</option>
          </select>
        </div>
        <div  className="mb-20" onChange={this.onChangeValue}>
          <label htmlFor="gender">Gender:</label>
          <input id="male" type="radio" value="Male" name="gender" /> Male
          <input id="female" type="radio" value="Female" name="gender" /> Female
          <input id="Other" type="radio" value="Other" name="gender" /> Other
        </div>
        <div  className="mb-20">
          <label>Upload file:</label>
          <input type="file" onChange={this.handleFileUpload} />
        </div>
        <div  className="mb-20" onChange={this.handleInputChange}>
          <label>Programming-Languages:</label>
          <input type="checkbox" value="Python" />
          Python
          <input type="checkbox" value="JavaScript" />
          JavaScript
          <input type="checkbox" value="React" />
          React
          <input type="checkbox" value="NodeJS" />
          NodeJS
        </div>
        <div  className="mb-20">
          <label>Date:</label>
          <input type="date" onChange={this.handleDate} />
        </div>
        <div  className="mb-20">
          <label>Month:</label>
          <input type="month" onChange={this.handleMonth} />
        </div>
        <Button primary type="submit">Submit</Button>
      </form>
    )
  }
}
export default DemoForm
