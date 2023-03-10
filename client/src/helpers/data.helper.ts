import moment from 'moment'

export const formatDate = (date: string) => {
    const d = new Date(date);
    return moment(d).format("Do MMMM, YYYY, HH:MM")
}