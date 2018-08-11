(() => {
  // declaration variable for output dates
  let outNameDay = document.getElementById('day-name')
  let outNumDay = document.getElementById('day-number')
  let outMonth = document.getElementById('month')
  let outYear = document.getElementById('year')
  // declaration variable for output time
  let outHour = document.getElementById('hour')
  let outMinute = document.getElementById('minute')
  let outSecond = document.getElementById('second')
  let outWorkingDay = document.getElementById('working-day')

  let showFecha = () => {
    // declaration variable for current dates
    let getFecha = new Date()
    let currentDayNumber = getFecha.getDate()
    let currentNumberDay = getFecha.getDay()
    let currentMonth = getFecha.getMonth()
    let currentYear = getFecha.getFullYear()
    let getNameDay = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
    let getNameMonth = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    // declaration variable for current time
    let currentHour = getFecha.getHours()
    let currentMinute = getFecha.getMinutes()
    let currentSecond = getFecha.getSeconds()
    // show dates output
    outNameDay.textContent = getNameDay[currentNumberDay]
    outNumDay.textContent = currentDayNumber
    outMonth.textContent = getNameMonth[currentMonth]
    outYear.textContent = currentYear
    // show time output
    outHour.textContent = currentHour
    outMinute.textContent = currentMinute
    outSecond.textContent = currentSecond
    if (currentHour >= 0 && currentHour <= 11) {
      outWorkingDay.textContent = 'AM'
    } else {
      outWorkingDay.textContent = 'PM'
    }
    if (currentHour > 12) {
      let updateHour = outHour.textContent = `${currentHour - 12}`
      if (outHour.textContent < 10) {
        outHour.textContent = `0${updateHour}`
      }
    } else if (currentHour < 10) {
      outHour.textContent = `0${currentHour}`
    }
    if (currentHour === 0) { outHour.textContent = '12' }
    if (currentMinute < 10) { outMinute.textContent = `0${currentMinute}` }
    if (currentSecond < 10) { outSecond.textContent = `0${currentSecond}` }
  }
  window.setInterval(showFecha, 1000)
})()
