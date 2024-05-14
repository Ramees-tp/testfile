import Header from "../../components/User/Header"
import Ufooter from "../../components/User/Ufooter"
import UserProfile from "../../components/User/UserProfile"

const UserProfilePage = () => {
  return (
    <div className="p-1">
      <Header/>
      <UserProfile/>
      <Ufooter/>
    </div>
  )
}

export default UserProfilePage
