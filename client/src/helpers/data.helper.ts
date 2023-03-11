import moment from 'moment'

export const formatDate = (date: string | undefined) => {
    let d = new Date();
    if(date) d = new Date(date);
    return moment(d).format("Do MMMM, YYYY, HH:MM")
}