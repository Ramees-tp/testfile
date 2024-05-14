import axiosInstance from "../../../api/axios"
import { useEffect, useState } from "react"

const PaymentsDone = () => {
  const [data, setData] = useState([])


  const fetchData = async () =>{
    const res = await axiosInstance.get("/master/gotWageTrue") 
    if (res.status===200) {
      setData(res.data.data)
    }
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div className="overflow-x-auto">
    <table className="w-full whitespace-nowrap sm:overflow-auto">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-3 sm:px-6 sm:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee Name</th>
          <th className="px-4 py-3 sm:px-6 sm:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date of Work</th>
          <th className="px-4 py-3 sm:px-6 sm:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Work Type</th>
          <th className="px-4 py-3 sm:px-6 sm:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount Paid</th>
          <th className="px-4 py-3 sm:px-6 sm:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((data, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
            <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap">{data.workerId.firstName} {data.workerId.lastName}</td>
            <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap">{new Date(data.date).toLocaleDateString()}</td>
            <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap">{data.workerId.jobType}</td>
            <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap">{data.wage}</td>
            <td className="px-4 py-3 sm:px-6 sm:py-4 whitespace-nowrap">{data._id}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  
  )
}

export default PaymentsDone
