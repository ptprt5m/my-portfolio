export const getTimeDifference = (dateString: string): string => {
    const dateParts = dateString.split(".")
    if (dateParts.length !== 3) {
        return "Неверный формат даты. Используйте формат DD.MM.YYYY."
    }

    const day = parseInt(dateParts[0])
    const month = parseInt(dateParts[1]) - 1
    const year = parseInt(dateParts[2])

    const date = new Date(year, month, day)
    if (isNaN(date.getTime())) {
        return "Неверный формат даты. Пожалуйста, укажите корректную дату."
    }
    
    const currentDate = new Date()
    const diffInMilliseconds = currentDate.getTime() - date.getTime()
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24))
    const years = Math.floor(diffInDays / 365)
    const remainingDays = diffInDays - years * 365

    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let totalMonths = 0
    let remaining = remainingDays

    for (let i = 0; i < 12; i++) {
        if (remaining >= daysInMonth[i]) {
            totalMonths++
            remaining -= daysInMonth[i]
        } else {
            break
        }
    }

    return `${years} ${years === 1 ? 'год' : 'года'} и ${totalMonths} ${totalMonths === 1 ? 'месяц' : 'месяца'}`
}