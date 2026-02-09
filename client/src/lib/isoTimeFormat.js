const isoTimeFormat = (dateTime) => {
  const date = new Date(dateTime);

  return date.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Asia/Kolkata',
  });
};

export default isoTimeFormat;
