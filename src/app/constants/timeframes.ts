import { TimeFrame } from "../model/timeframe";

export function getTimeFrames() : TimeFrame[] {

    const timeFrames: TimeFrame[] = [];

    const currentDate: Date = new Date();
    const lastWeekDate: Date = new Date();
    lastWeekDate.setDate(lastWeekDate.getDate() - 7);
    timeFrames.push({label: "Last week", from: lastWeekDate, to: currentDate});

    const twoWeeksAgoDate: Date = new Date(lastWeekDate.getTime());
    twoWeeksAgoDate.setDate(twoWeeksAgoDate.getDate() - 7);
    timeFrames.push({label: "Last 2 weeks", from: twoWeeksAgoDate, to: currentDate});

    const monthAgoDate: Date = new Date();
    monthAgoDate.setMonth(monthAgoDate.getMonth() - 1);
    timeFrames.push({label: "Last month", from: monthAgoDate, to: currentDate});

    const sixMonthsAgoDate: Date = new Date();
    sixMonthsAgoDate.setMonth(sixMonthsAgoDate.getMonth() - 6);
    timeFrames.push({label: "Last 6 months", from: sixMonthsAgoDate, to: currentDate});

    const yearAgoDate: Date = new Date();
    yearAgoDate.setFullYear(yearAgoDate.getFullYear() - 1);
    timeFrames.push({label: "Last year", from: yearAgoDate, to: currentDate});

    return timeFrames;
}