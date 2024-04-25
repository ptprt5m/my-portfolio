export const getTimeDifference = (date) => {
  if (!date) {
    return null;
  }

  const currentDate = new Date();

  const diffInMilliseconds = currentDate - date;
  const diffInDays = Math.floor(diffInMilliseconds / 1000 / 60 / 60 / 24);
  const years = Math.floor(diffInDays / 365);
  const months =  Math.floor((diffInDays - years * 365) / 12);
  return `${years} years and ${months} months`;
};
