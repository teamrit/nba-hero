import * as R from 'ramda';

export const provideIntensity = value => {
    const initialValue = Math.floor(value.count/2);
    if (initialValue > 5) return 5;
    else return initialValue;
};

export const beautifyCalenderData = response => {
    const values = R.pipe(
        R.values,
    )(response);
    const dates = R.pipe(
        R.keys,
        R.filter(date => date.match("[0-9]+")),
        R.filter(date => date.substring(0,4) === "2018"),
        R.map(date => stringToDateString(date)),
        // makeDateObject(values)
    )(response);
    const answer = makeDateObject(values,dates);
    console.log(answer);
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
