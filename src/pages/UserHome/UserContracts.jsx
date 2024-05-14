import MainContracts from "../../components/User/Contracts/MainContract"
import Header from "../../components/User/Header"
import Ufooter from "../../components/User/Ufooter"

const UserContracts = () => {
  return (
    <div className="p-1">
      <Header/>
      <MainContracts/>
      <Ufooter/>
    </div>
  )
}

export default UserContracts
