import Header from "../../components/User/Header";
import Ufooter from "../../components/User/Ufooter";
import UworkerList from "../../components/User/UworkerList";

function UserWorkerList() {
  return (
    <div>
      <div className="p-1">
        <Header />
        <UworkerList />
        <Ufooter />
      </div>
    </div>
  )
}

export default UserWorkerList;
