// import React from "react";
// import PollCard from "./PollCard";

// const PollList = ({ polls, setPolls }) => {
//   // Function to handle voting
//   const handleVote = (pollId, optionIndex) => {
//     const updatedPolls = polls.map((poll) => {
//       if (poll.id === pollId) {
//         const updatedOptions = [...poll.options];
//         updatedOptions[optionIndex].votes += 1;
//         return { ...poll, options: updatedOptions };
//       }
//       return poll;
//     });
//     setPolls(updatedPolls);
//     localStorage.setItem("polls", JSON.stringify(updatedPolls));
//   };

//   return (
//     <div className="poll-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {polls.map((poll) => (
//         <PollCard key={poll.id} poll={poll} handleVote={handleVote} />
//       ))}
//     </div>
//   );
// };

// export default PollList;

import React from "react";
import PollCard from "./PollCard";

const PollList = ({ polls, setPolls }) => {
  const handleVote = (pollId, optionIndex) => {
    const updatedPolls = polls.map((poll) => {
      if (poll.id === pollId) {
        const updatedOptions = [...poll.options];
        updatedOptions[optionIndex].votes += 1;
        return { ...poll, options: updatedOptions };
      }
      return poll;
    });
    setPolls(updatedPolls);
    localStorage.setItem("polls", JSON.stringify(updatedPolls));
  };

  return (
    <div className="poll-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {polls.map((poll) => (
        <PollCard key={poll.id} poll={poll} handleVote={handleVote} />
      ))}
    </div>
  );
};

export default PollList;
