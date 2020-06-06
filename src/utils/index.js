export function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

export function getToday (clockStr) {
  
  const date = new Date();
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const t1 = [year, month, day].map(formatNumber).join('/')

  return `${t1} ${clockStr}`
}

export function formatTimeStr (str) {
  return str.replace(/\-/g, "/").split(".")[0]
}

export function getTimeNum (str) {
  let timeStr = str.replace(/\-/g, "/").split(".")[0];
  return  new Date(timeStr).getTime()
}

export function formatTime1(date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('-')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

export function getNowTime() {
  const date = new Date();
  const str = formatTime(date);

  const [t1, t2] = str.split(" ");
  const [year, month, day] = t1.split("/");
  const [hour, minute, second] = t2.split(":");

  const startTime = {
    date: [year, month, day],
    time: [hour, minute, second]
  };
  const endTime = {
    date: [year, month, day],
    time: [formatNumber((Number(hour) + 1) % 24), minute, second]
  };

  return {
    startTime: `${startTime.date.join("-")} ${startTime.time.join(":")}`,
    endTime: `${endTime.date.join("-")} ${endTime.time.join(":")}`,
    start_clock: startTime.time.join(":"),
    start_date: startTime.date.join("-"),
    end_clock: endTime.time.join(":"),
    end_date: endTime.date.join("-")
  }
}
