import Header from "../../components/User/Header"
import Ufooter from "../../components/User/Ufooter"
import UserUpdateProfile from "../../components/User/UserUpdateProfile"

const UpdateProfile = () => {
  return (
    <div className="p-1">
        <Header/>
        <UserUpdateProfile/>
        <Ufooter/>      
    </div>
  )
}

export default UpdateProfile
