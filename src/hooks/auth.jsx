import { createContext, useContext, useState, useEffect } from 'react'
import { api } from '../services/api'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})
  async function singIn({email, password}){
    try{
      const response = await api.post('/sessions', {email, password})
      const { user, token} = response.data
      localStorage.setItem('@foodExplorer:user', JSON.stringify(user))
      localStorage.setItem('@foodExplorer:token', token)
      
      api.defaults.headers.common['authorization']=`Bearer ${token}`
      setData({user, token})
    } catch(error){
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert('could not enter')
      }
    }
  }

  function signOut(){
    const token = localStorage.removeItem('@foodExplorer:token')
    const user = localStorage.removeItem('@foodExplorer:user')

    setData({token, user})
  }
  useEffect(() => {
    const token = localStorage.getItem('@foodExplorer:token')
    const user = localStorage.getItem('@foodExplorer:user')

    if(token && user){
      api.defaults.headers.common['authorization']=`Bearer ${token}`

      setData({token, user:JSON.parse(user)})
    }
  },[])
  
  return (
    <AuthContext.Provider value={{ 
      singIn, 
      user: data.user,
      signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth }
