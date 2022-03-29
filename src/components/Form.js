import React, { Component } from "react"

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      URL: "",
    }
  }

  handleChange = (event) => {
    if (event.target.id === "name") {
      this.setState({ name: event.target.value })
    } 
    
    else {
      this.setState({ URL: event.target.value })
    }
  }

  onFormSubmit = (event) => {
    event.preventDefault()

    this.setState({ name: "", URL: "" })
    this.props.onSubmit(this.state)
  }

  render() {
    return (
      <form>
        <label>Name</label>
        <input type="text" value={this.state.name} id="name" onChange={this.handleChange} placeholder={'Insert Name Here'}></input>

        <label>URL</label>
        <input type="text" value={this.state.URL} id="URL" onChange={this.handleChange} placeholder={"Insert URL Here"} ></input>

        <button onClick={this.onFormSubmit}> Submit </button>
      </form>
    )
  }
}

export default Form