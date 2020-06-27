let arr = Array.prototype.slice.call(document.querySelectorAll('.flight'))
let data = `\ufeff 出发地,出发时间,目的地,到达时间\n`
let directAirline = arr.filter(item => {
  return item.querySelector('.zzjtzd').textContent === '直达'
})

directAirline.forEach(item => {
  let from = item.querySelector('.airport.r')
  let departureAirport = from.querySelector('time') && from.querySelector('time').textContent
  let departureTime = from.childNodes[1].textContent
  let to = item.querySelectorAll('.airport')[1]
  let arrivalAirport = to.querySelector('time') && to.querySelector('time').textContent
  let arrivalTime = to.childNodes[1].textContent
  data += `${departureAirport},${departureTime},${arrivalAirport},${arrivalTime}\n`
})

let blob = new Blob([data], { type: 'text/csv,charset=UTF-8'})
let csvUrl = URL.createObjectURL(blob)

let link = document.querySelector('.copyright a')
link.href = csvUrl
link.download = `${document.querySelector('#label_ID_0').value}----${document.querySelector('#label_ID_1').value}`
