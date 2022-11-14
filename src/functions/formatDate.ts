import moment from "moment";

const formatDate = (date: Date): string => moment(date).fromNow()

export default formatDate;