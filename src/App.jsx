import React, { useState } from "react";
import PollList from "./components/PollList";
import CreatePoll from "./components/CreatePoll.jsx";

const App = () => {
  const [polls, setPolls] = useState(() => {
    const savedPolls = localStorage.getItem("polls");
    return savedPolls ? JSON.parse(savedPolls) : [];
  });

  // Function to handle adding a new poll
  const addPoll = (poll) => {
    const updatedPolls = [...polls, poll];
    setPolls(updatedPolls);
    localStorage.setItem("polls", JSON.stringify(updatedPolls));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-5xl font-bold text-center my-8">Polling System</h1>
      <CreatePoll addPoll={addPoll} />
      <PollList polls={polls} setPolls={setPolls} />
    </div>
  );
};

export default App;
