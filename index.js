/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */


/*const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}*/

// createEmployeeRecord function
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
      firstName: firstName,
      familyName: familyName,
      title: title,
      payPerHour: payPerHour,
      timeInEvents: [],
      timeOutEvents: []
    };
  }
  
  // createEmployeeRecords function
  function createEmployeeRecords(employeeData) {
    return employeeData.map(createEmployeeRecord);
  }
  
  // createTimeInEvent function
  function createTimeInEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ');
    this.timeInEvents.push({ type: "TimeIn", hour: parseInt(hour), date: date });
    return this;
  }
  
  // createTimeOutEvent function
  function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ');
    this.timeOutEvents.push({ type: "TimeOut", hour: parseInt(hour), date: date });
    return this;
  }
  
  // hoursWorkedOnDate function
  function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date);
    const timeOut = this.timeOutEvents.find(event => event.date === date);
    const hoursWorked = (timeOut.hour - timeIn.hour) / 100; // Assuming time in and out are on the hour
    return hoursWorked;
  }
  
  // wagesEarnedOnDate function
  function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour;
  }
  
  // allWagesFor function
  function allWagesFor() {
    const datesWorked = this.timeInEvents.map(event => event.date);
    const totalWages = datesWorked.reduce((total, date) => total + wagesEarnedOnDate.call(this, date), 0);
    return totalWages;
  }
  
  // findEmployeeByFirstName function
  function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName);
  }
  
  // calculatePayroll function
  function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((totalPayroll, employee) => totalPayroll + allWagesFor.call(employee), 0);
  }
  
  // Export the functions if needed
  module.exports = {
    createEmployeeRecord,
    createEmployeeRecords,
    createTimeInEvent,
    createTimeOutEvent,
    hoursWorkedOnDate,
    wagesEarnedOnDate,
    allWagesFor,
    findEmployeeByFirstName,
    calculatePayroll
  };
  
