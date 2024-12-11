// import React from "react";

// const PollCard = ({ poll, handleVote }) => {
//   return (
//     <div className="poll-card bg-white shadow-md p-6 rounded-lg text-center">
//       <h3 className="text-xl font-semibold text-gray-800">{poll.name}</h3>
//       <div className="mt-4">
//         {poll.options.map((option, index) => (
//           <div key={index} className="mb-4">
//             <button
//               onClick={() => handleVote(poll.id, index)}
//               className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//             >
//               {option.name} - Votes: {option.votes}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PollCard;

import React from "react";

const PollCard = ({ poll, handleVote }) => {
  return (
    <div className="poll-card bg-white shadow-xl p-6 rounded-lg text-center transform transition-transform hover:scale-105 hover:shadow-2xl">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">{poll.name}</h3>
      <div className="space-y-4">
        {poll.options.map((option, index) => (
          <div key={index}>
            <button
              onClick={() => handleVote(poll.id, index)}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-4 rounded-lg text-lg font-semibold transition-all hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-500"
            >
              {option.name} - Votes: {option.votes}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PollCard;
