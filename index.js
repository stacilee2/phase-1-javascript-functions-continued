// code your solution here


function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();

function mondayWork(activity= 'go to the office') {
    return `This Monday, I will ${activity}.`;
}
mondayWork();

function wrapAdjective(flair = '*') {
    return function(adjective = 'hard') {
        return `You are ${flair}${adjective}${flair}!`
    };
};
wrapAdjective();

