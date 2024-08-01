export const calculateTime = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diff = now.getTime() - date.getTime();

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) {
    return `Edited ${years} ${years > 1 ? 'years' : 'year'} ago`;
  } else if (months > 0) {
    return `Edited ${months} ${months > 1 ? 'months' : 'month'} ago`;
  } else if (days > 0) {
    return `Edited ${days} ${days > 1 ? 'days' : 'day'} ago`;
  } else if (hours > 0) {
    return `Edited ${hours} ${hours > 1 ? 'hours' : 'hour'} ago`;
  } else if (minutes > 0) {
    return `Edited ${minutes} ${minutes > 1 ? 'minutes' : 'minute'} ago`;
  } else {
    return `Edited ${seconds} ${seconds > 1 ? 'seconds' : 'second'} ago`;
  }
};
