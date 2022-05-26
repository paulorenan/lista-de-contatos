import React, {useContext} from 'react'
import Header from '../components/Header'
import MyContext from '../context'

function Contacts() {
  const {handleLogout} = useContext(MyContext);
  return (
    <div>
      <Header voltar={handleLogout} />
    </div>
  )
}

export default Contacts