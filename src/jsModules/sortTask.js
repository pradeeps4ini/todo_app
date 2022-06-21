const currentDate = new Date();

const getCurrentDate = function() {

  function day() {
    let todayDate = currentDate.getDate();
    return todayDate;
  }

  function month() {
    let currentMonth = currentDate.getMonth();
    return currentMonth + 1; 
  }

  function year() {
    let currentYear = currentDate.getFullYear();
    return currentYear;
  }

   return { today: day(), month: month(), year: year() };
};


const formatInputDate = function(date) {
  const dateSplit = date.split("-");
  const today = +dateSplit[2];
  const month = +dateSplit[1];
  const year = +dateSplit[0];

  return { today, month, year };
};


class SortTask {
  
  static today(taskDate) {
    const dueDate = formatInputDate(taskDate);
    const currentDate = getCurrentDate(); 

    if ((dueDate.today === currentDate.today) && 
        (dueDate.month === currentDate.month) && 
        (dueDate.year === currentDate.year)) return true; 
  };

  static month(taskDate) {
    const currentDate = getCurrentDate();
    const dueDate = formatInputDate(taskDate);
    if (currentDate.month === dueDate.month) return true;
  }

  static week(taskDate) {
    const currentDate = getCurrentDate();
    const dueDate = formatInputDate(taskDate);
    if ((dueDate.month === currentDate.month) && 
        (dueDate.year === currentDate.year) &&
        (dueDate.today > currentDate.today)) return dueDate.today - currentDate.today <= 7;

    if ((dueDate.year === currentDate.year) && 
       (currentDate.month - dueDate.month === 1)) {
      const taskDay = 30 - dueDate.today;
      return taskDay + currentDate.today <= 7;  
    };  
  };
};


export default SortTask;
