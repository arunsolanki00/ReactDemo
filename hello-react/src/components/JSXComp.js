import React from 'react'
const Hello =() => {

// return(
//     <div className='dummyClass'>
//         <h1>Heelo Arun</h1>
//     </div>
// )

    return React.createElement(
        'div',
        {id:'propID',className:'propName'},
        React.createElement('h1',null,'Hello Arun')
        )
}

export default Hello