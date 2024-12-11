// src/utils/localStorage.js
export const loadPolls = () => {
  const polls = localStorage.getItem("polls");
  return polls ? JSON.parse(polls) : [];
};

export const savePolls = (polls) => {
  localStorage.setItem("polls", JSON.stringify(polls));
};
