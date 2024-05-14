import { useState } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faSquareCheck
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";

import PaymentsToDo from './PaymentsToDo';
import PaymentsDone from './PaymentsDone';

const Payment = () => {
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(false);

  const handleButtonClick = (buttonIndex) => {
    setShow(false);
    setShow1(false);

    switch (buttonIndex) {
      case 1:
        setShow(true);
        break;
      case 2:
        setShow1(true);
        break;
      default:
        break;
    }
  };

  return (
    <div>
       <div>
       <main className="p-6 sm:p-10 space-y-6">
        {/* Dashboard Heading Section */}
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
          <div className="mr-6">
            <h1 className="sm:text-4xl text-3xl font-semibold mb-2">Payment Section</h1>
            <h2 className="text-gray-600 ml-0.5">All payments to do and Completed</h2>
          </div>
          <div className="flex flex-wrap items-start justify-end -mb-3">
            <button className="inline-flex px-5 py-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md mb-3">
              {/* Manage dashboard button content */}
            </button>
            <button className="inline-flex px-5 py-3 text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-6 mb-3">
              {/* Create new dashboard button content */}
            </button>
          </div>
        </div>
        {/* Statistics Section */}
        <section className="grid md:grid-cols-2 xl:grid-cols-2 gap-6">
          {/* Student Statistics */}
          <div className="flex items-center p-8 bg-white shadow rounded-lg cursor-pointer" onClick={() => handleButtonClick(1)}>
            <div className="inline-flex flex-shrink-0 items-center justify-center tm:h-16 h-12 tm:w-16 w-12 text-purple-600 bg-purple-100 rounded-full mr-6">
            <FontAwesomeIcon className="h-6" icon={faCreditCard} />
            </div>
            <div>
              <span className="block tm:text-2xl text-lg font-bold">Payments To DO</span>
            </div>
          </div>

          <div onClick={() => handleButtonClick(2)} className="flex items-center p-8 bg-white shadow rounded-lg cursor-pointer">
            <div className="inline-flex flex-shrink-0 items-center justify-center tm:h-16 h-12 tm:w-16 w-12 text-purple-600 bg-purple-100 rounded-full mr-6">
             <FontAwesomeIcon className="h-6" icon={faSquareCheck} />
            </div>
            <div>
              <span className="block tm:text-2xl text-lg font-bold">Completed Payments</span>
            </div>
          </div>
          
        </section>

        <section className="bg-white p-8 shadow rounded-lg">
          {show && <PaymentsToDo/>}
          {show1 && <PaymentsDone/>}
        </section>
      </main>
    </div>
    </div>
  )
}

export default Payment
