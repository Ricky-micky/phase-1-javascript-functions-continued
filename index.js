function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}
function wrapAdjective(Adjective = "*") {
    const InnerFunction = function (parameter = "special") {
    return  `You are ${Adjective}${parameter}${Adjective}!`;
} ;
return InnerFunction
} 

// code your solution here
