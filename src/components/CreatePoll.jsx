import React, { useState } from "react";

const CreatePoll = ({ addPoll }) => {
  const [pollName, setPollName] = useState("");
  const [options, setOptions] = useState([""]);
  const [error, setError] = useState("");

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    setOptions([...options, ""]);
  };

  const handleRemoveOption = (index) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pollName || options.some((option) => !option.trim())) {
      setError("Please provide a valid poll name and options.");
      return;
    }
    setError("");

    const newPoll = {
      id: Date.now(),
      name: pollName,
      options: options.map((option) => ({
        name: option,
        votes: 0,
      })),
    };

    addPoll(newPoll);
    setPollName("");
    setOptions([""]);
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-400 shadow-lg p-8 rounded-lg mb-6 transform transition-transform ">
      <h2 className="text-3xl font-semibold text-white text-center mb-6">
        Create a New Poll
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-white font-bold text-2xl ">
            Poll Name
          </label>
          <input
            type="text"
            className="w-full p-4 border-2 border-white bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            value={pollName}
            onChange={(e) => setPollName(e.target.value)}
            placeholder="Enter poll name"
          />
        </div>
        <div className="mb-6">
          <label className="block text-white font-bold text-2xl">Options</label>
          {options.map((option, index) => (
            <div key={index} className="flex items-center mb-4">
              <input
                type="text"
                className="w-full p-4 border-2 border-white bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                placeholder={`Option ${index + 1}`}
              />
              <button
                type="button"
                onClick={() => handleRemoveOption(index)}
                className="ml-4 text-white bg-red-600  rounded-lg p-2 font-bold"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddOption}
            className="text-black-200 hover:text-black-400 bg-white rounded-lg p-2 hover:bg-slate-300 font-bold"
          >
            + Add Option
          </button>
        </div>
        {error && <p className="text-black text-center">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-black transition-all"
        >
          Create Poll
        </button>
      </form>
    </div>
  );
};

export default CreatePoll;
