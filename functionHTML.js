class CalTime {
    constructor(firstDay, weekSlot, total) {
        this.firstDay = firstDay
        this.weekSlot = weekSlot
        this.total = total
    }
    maxCountWeek = 100;
    weekDayList = {
        '0': [],
        '1': [],
        '2': [],
        '3': [],
        '4': [],
        '5': [],
        '6': [],
    }

    getFirstDate(day) {
        this.firstDay = day
    }
    getAllSlot(item) {
        if (!Array.isArray(item)) return
        item.sort((a, b) => a - b)
        this.weekSlot = item
    }
    getTotal(day) {
        this.total = day
    }
    returnArrayList() {
        this.weekDayList = {
            '0': [],
            '1': [],
            '2': [],
            '3': [],
            '4': [],
            '5': [],
            '6': [],
        }
        if (!this.total || !this.weekSlot || !this.weekSlot.length) return
        if (!this.firstDay || !this.firstDay.getDate() || !this.weekSlot.includes(this.firstDay.getDay())) return []
        let width = this.weekSlot.length
        let arrayOutPut = []
        let totalUp = 0
        const arrAllLong = []
        for (let i = 0; i < this.maxCountWeek; i++) {
            for (let k = 0; k < this.weekSlot.length; k++) {
                arrAllLong.push(this.weekSlot[k] + i * 7)

            }
        }
        let lengthArrweek = this.weekSlot.length;
        while (totalUp < this.total) {
            // example: [0,3,4]
            // day 0 => 0, day 2 =>> 4, day 6 => 0, day 10 => 3
            let weekListIndex = totalUp % lengthArrweek
            this.weekDayList[`${this.weekSlot[weekListIndex]}`].push(arrAllLong[totalUp])
            // this.weekDayList[`${weekDayIn}`].push(this.weekSlot[weekDayIn] + totalUp * 7)
            arrayOutPut.push(arrAllLong[totalUp])
            totalUp += 1
        }
        // console.log(this.weekDayList)
        return arrayOutPut

    }
    readprops() {
        return [this.firstDay, this.total, this.weekSlot, this.weekDayList]
    }

    outputTables() {
        return 'aaa'
    }
}

const NewCalTime = new CalTime

function Total() {
    let day = document.querySelector('#days').value ? parseInt(document.querySelector('#days').value) : 0;
    NewCalTime.getTotal(day)
    // console.log(NewCalTime.readprops())

    // return day
}

function GetAllSlot(day) {
    const List = [...document.querySelectorAll('.arrayWeek')]
    if (!List[day].className.includes('clickDay')) List[day].className = `${List[day].className} clickDay`
    else List[day].className = 'arrayWeek'

    const item = NewCalTime.weekSlot ? NewCalTime.weekSlot : []
    let index = item.indexOf(day)
    if ((day || day === 0) && index === -1) item.push(day)
    if (index > -1) item.splice(index, 1) // remove the day
    NewCalTime.getAllSlot(item)
    // console.log(NewCalTime.readprops())
}
