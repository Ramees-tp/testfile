import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-regular-svg-icons';
import axiosInstance from "../../api/worker/workerInstance";
import { useSelector } from "react-redux";


function SocketChatWorker({workerId, userId, requestId}) {

  const socket = useSelector((state)=>state.socket.socket)

    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');

    const messageToBackend = (message) =>{
      axiosInstance.post('/user/saveMessages', message)
    }

 const sendMessage = () => {        
   if (inputMessage.trim() !== '') {
          socket.emit('sendMessage', { 
            message: inputMessage, 
            sender: workerId, 
            receiver: userId,
            requestId: requestId,
          });
          const newMessage={
            message: inputMessage,
            sender: workerId, 
            receiver: userId,
            requestId: requestId,
          }
          setMessages(prevMessages => [...prevMessages, { message: inputMessage, sender: workerId, type: "sent" }]);
          messageToBackend(newMessage)
          setInputMessage('');
        }
 };
 useEffect(()=>{
    socket.emit('workerConnection', {sender: workerId});
 },[])

 useEffect(() => {
  const fetchData = async () => {
      try {
          const res = await axiosInstance.get('/user/showMessage', {
              params: { workerId, userId, requestId }
          });
          if(res.data && res.data.success) {
            const receivedMessages = res.data.messages;
          setMessages(receivedMessages);
          }
      } catch (err) {
          console.error(err);
      }
  };
  fetchData();
}, []);
 
 useEffect(()=>{
  const handleReceivedMessage = ({ message, sender, requestId: receivedRequestId}) => {
    if (receivedRequestId === requestId) {
    setMessages(prevMessages => [
      ...prevMessages,
      { message, sender, type: "received" }
    ]);
  }
  };

  socket.on('sendMessage', handleReceivedMessage);

  return () => {  
    socket.off("sendMessage", handleReceivedMessage);
  };
 },[])

  return (
    <div className='h-full bg-slate-200 rounded-md'>
     <div className="flex flex-col h-full">
      <div className="flex-grow p-4 border-b-2 border-gray-300">
        <div className="overflow-y-auto h-full">
          {messages.map((message, index) => (
            <div key={index} className={` mb-2 text-lg ${message.sender===workerId ? 'flex justify-end' : 'flex justify-start'}`}>
              <div className={` max-w-[70%] w-fit p-2 rounded text-white flex flex-col leading-5 ${message.sender===workerId ? 'bg-green-900  pl-8 py-1' : 'bg-gray-700 pr-8'}`}>
                <span className={`font-bold text-[60%] text-right`}>
                  {message.sender === workerId ? "you" : ""}
                </span>
                <span className="">{message.message}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center lg:p-4 border-t-2 border-gray-300">
        <input
          type="text"
          className="flex-grow h-full mr-2 p-2 border border-gray-300 rounded"
          placeholder="Type your message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
       <FontAwesomeIcon 
            icon={faCircleRight} 
            onClick={sendMessage}
            className="fa-regular cursor-pointer p-2 h-6 w-6 bg-green-500 text-white rounded hover:bg-green-700"
        />
      </div>
    </div>
    </div>
  )
}

export default SocketChatWorker
