import React from 'react'

// const UserContext = React.createContext()
//Default Context
const UserContext = React.createContext('Arun Solanki')

const UserProvider=UserContext.Provider
const UserConsumer=UserContext.Consumer

export {UserProvider,UserConsumer}
export default UserContext