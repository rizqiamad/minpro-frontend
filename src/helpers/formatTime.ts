export function formatTime(dateTime: string) {
  const time = new Date(dateTime);
  let result = "";
  if (time.getHours() < 10) result += `0${time.getHours()}`;
  else result += `${time.getHours()}`;
  if (time.getMinutes() < 10) result += `:0${time.getMinutes()}`;
  else result += `:${time.getMinutes()}`;
  return result;
}
