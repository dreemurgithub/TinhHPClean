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
            let weekDayIn = totalUp % lengthArrweek
            this.weekDayList[`${weekDayIn}`].push(arrAllLong[totalUp])
            // this.weekDayList[`${weekDayIn}`].push(this.weekSlot[weekDayIn] + totalUp * 7)
            arrayOutPut.push(arrAllLong[totalUp])
            totalUp += 1
        }
        // console.log(arrayOutPut)
        // console.log(arrAllLong)
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
function FirstDate() {
    const time = new Date()
    NewCalTime.getFirstDate(time)
    return time
}

function Total() {
    let day = 20
    NewCalTime.getTotal(day)
    console.log(NewCalTime.readprops())

    return day
}

function GetAllSlot() {
    const item = [2, 3, 0]
    NewCalTime.getAllSlot(item)
    return [0, 2, 3]
}

// export { FirstDate, Total, GetAllSlot }
// export { NewCalTime }