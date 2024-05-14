import UworkerDetails from '../../components/User/UworkerDetails'
import Header from '../../components/User/Header'
import Ufooter from '../../components/User/Ufooter'

function UserWorkerDetails() {
  return (
    <div>
      <div className="p-1">
        <Header/>
        <UworkerDetails />
        <Ufooter/>
      </div>
    </div>
  )
}

export default UserWorkerDetails
