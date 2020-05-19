import React, { Component } from 'react'


class ClickCounter extends Component {

    render() {
        const {counter,HandleClickCount} = this.props
        return (
            <div>
                <button onClick={HandleClickCount}> Count {counter} Number</button>
            </div>
        )
    }
}

export default ClickCounter
