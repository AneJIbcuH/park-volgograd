export function formatDate(isoDate: string) {
	const date = new Date(isoDate)
	const months = [
		'января',
		'февраля',
		'марта',
		'апреля',
		'мая',
		'июня',
		'июля',
		'августа',
		'сентября',
		'октября',
		'ноября',
		'декабря',
	]

	const day = date.getDate()
	const month = months[date.getMonth()]
	const year = date.getFullYear()

	return `${day} ${month} ${year} `
}

export function formatTime(isoDate: string) {
	const date = new Date(isoDate)
	const hours = String(date.getUTCHours()).padStart(2, '0')
	const minutes = String(date.getUTCMinutes()).padStart(2, '0')

	return `${hours}:${minutes}`
}
