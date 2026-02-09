export const dateFormat = (date) => {
  return new Date(date)
    .toLocaleString('en-IN', {
      weekday: 'short',
      day: 'numeric',
      month: 'long',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'Asia/Kolkata',
    })
    .toUpperCase();
};
