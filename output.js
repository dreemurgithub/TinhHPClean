// import { NewCalTime } from "./functionHTML";
const listDateTable = [...document.querySelectorAll('.dateFirst')]

function dateDisplay(day) {
    const currentNow = new Date()
    currentNow.setDate(currentNow.getDate() + day)
    return `${currentNow.getDate()}:${currentNow.getMonth() + 1}`
}

function dateIterate(day) {
    const currentNow = new Date(NewCalTime.firstDay)
    // currentNow.setDate(day)
    currentNow.setDate(currentNow.getDate() + day - currentNow.getDay())
    return `${currentNow.getDate()}:${currentNow.getMonth() + 1}`
}

function OutPutDate() {
    const listWeek = [...document.getElementsByClassName('infor')]
    listWeek.forEach(el => el.textContent = '')
    Total() // get date
    const Arr = NewCalTime.returnArrayList()

    // console.log(Arr)
    // console.log(NewCalTime.firstDay)
    // return [] if the weekday is not inside the array
    if (!Arr || Arr.length === 0) return; // get aray inside the class
    const textArrUnOrder = Arr.map(day => `${dateIterate(day)}`)

    const textArrOrder = Object.keys(NewCalTime.weekDayList)
    textArrOrder.forEach((key, weekIndex) => {
        const List = [...document.querySelectorAll(`.view${weekIndex}`)]
        NewCalTime.weekDayList[key].forEach((day, index) => {
            if (!List[index]) return
            List[index].textContent = dateIterate(day)
        })
    })
    const ListUnOrder = [...document.querySelectorAll('.date')]
    textArrUnOrder.forEach((day, index) => {
        ListUnOrder[index].textContent = day
    })
}

function iterateDateHTML() {
    const currentDay = new Date()
    let day = currentDay.getDay()
    if (day === 0) day = 7
    listDateTable.forEach((el, index) => el.textContent = dateDisplay(index - 7 - day))

}
iterateDateHTML()

listDateTable.forEach(el => el.addEventListener("click", () => {
    listDateTable.forEach(el => el.className = 'dateFirst')
    const text = el.textContent
    el.className = `${el.className} clickDay`
    let day = parseInt(text.split(":")[0])
    let month = parseInt(text.split(":")[1]) - 1
    // Even if the month turn to -1, it will turn to december!
    const date = new Date()
    date.setDate(day)
    date.setMonth(month)
    NewCalTime.getFirstDate(date)

}))