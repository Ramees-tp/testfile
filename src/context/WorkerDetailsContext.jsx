import { createContext, useContext, useState } from "react";

const WorkerDetailsContext = createContext();

export const useWorkerDetails = () => useContext(WorkerDetailsContext);

export const WorkerDetailsProvider = ({ children }) => {
  const [jobId, setJobId] = useState(null);

  const setDetails = (details) => {
    setJobId(details);
  };


  return (
    <WorkerDetailsContext.Provider value={{ jobId, setDetails}}>
      {children}
    </WorkerDetailsContext.Provider>
  );
};
