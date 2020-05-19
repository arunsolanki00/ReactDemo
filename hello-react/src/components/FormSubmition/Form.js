import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comment:'',
             topic:'react'
            }
    }
    HandleEventUsername = (event) => {
        this.setState
        ({
            username:event.target.value
        })
    }
    HandleEventComment = (event) => {
        this.setState({
            comment : event.target.value
        })
    }
    HandleEventTopic = (event) => {
        this.setState({
            topic : event.target.value
        })
    }
    HandleSubmit = event => {
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        const { username,topic,comment } = this.state
        return (
            <form onSubmit={this.HandleSubmit}>
                <div>
                  <label>  UserName </label>
                  <input type='text' value={username} 
                  onChange={this.HandleEventUsername} />
                </div>
                <div>
                    <label> Comment </label>
                    <textarea value={comment} 
                    onChange={this.HandleEventComment} />
                </div>
                <div>
                    <label> Topic </label>
                    <select value={topic} onChange={this.HandleEventTopic}> 
                    <option value='react'> React </option>    
                    <option value='angular'> Angular </option>    
                    <option value='vue'> Vue </option>    
                     </select>
                </div>
                <button type='submit'> Submit </button>
            </form>
        )
    }
}
export default Form 

