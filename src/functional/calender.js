import * as R from 'ramda';

export const createHeatChartTooltip = value => {
    return `${value.count ? value.count : "No"} NBA matches on ${value.date ? value.date : "this date"}`
};

export const provideIntensity = value => {
    if (value === 1) return 1;
    const initialValue = Math.ceil(value.count/2);
    if (initialValue > 5) return 5;
    else return initialValue;
};

export const beautifyCalenderData = (response,year) => {
    const values = R.pipe(
        R.values,
    )(response);
    const dates = R.pipe(
        R.keys,
        R.filter(date => date.match("[0-9]+")),
        R.filter(date => date.substring(0,4) === year),
        R.map(date => stringToDateString(date)),
        // makeDateObject(values)
    )(response);
    const answer = makeDateObject(values,dates);
    if (!answer) return [];
    return answer;
};

export const makeDateObject = (values,dates)=> {
    return dates.map((date,index)=> ({
        date: date, count: values[index]
    }))
};

export const stringToDateString = string => {
    if (!string) return '';
    let date = `${string.substring(0,4)}-${string.substring(4,6)}-${string.substring(6,8)}`;
    return date ? date : '';
};