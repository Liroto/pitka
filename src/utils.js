export function parseTime(time) {
  if(time.minutes >= 0 && time.minutes < 10) {
    return `${time.hour} : 0${time.minutes}`
  } else if (time.minutes >= 10 && time.minutes < 60) {
    return `${time.hour} : ${time.minutes}`
  } else throw new Error('Ошибка! Количество минут может быть лишь в диапазоне [0, 59]')
}
