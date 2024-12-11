// src/components/PollResult.jsx
const PollResult = ({ poll }) => {
  const totalVotes = poll.options.reduce(
    (acc, option) => acc + option.votes,
    0
  );

  return (
    <div className="p-5 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        {poll.question}
      </h2>
      <div className="space-y-2">
        {poll.options.map((option, index) => (
          <div key={index} className="flex items-center justify-between">
            <span>{option.name}</span>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
              <div
                className="bg-blue-500 h-2.5 rounded-full"
                style={{ width: `${(option.votes / totalVotes) * 100}%` }}
              ></div>
            </div>
            <span>{option.votes} votes</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PollResult;
