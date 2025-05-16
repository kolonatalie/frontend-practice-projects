function getSleepHours (day) {
  day = day.toLowerCase(); 
  switch (day) {
  case 'monday':
    return 8;
  case 'tuesday':
    return 9;
  case 'wednesday':
    return 7;
  case 'thursday':
    return 6;
  case 'friday':
    return 7.5;
  case 'saturday':
    return 9;
  case 'sunday':
    return 10;
  default:
    return null;
}
};
// Actual sleep hours calculation
function getActualSleepHours() {
  /*return 8+9+7+6+7.5+9+10;*/
   return getSleepHours ('monday') + getSleepHours ('tuesday') + getSleepHours ('wednesday') + getSleepHours ('thursday') + getSleepHours ('friday') + getSleepHours ('saturday') + getSleepHours ('sunday');
};
console.log(`This week you slept ${getActualSleepHours()} hours.`);

// Ideal sleep hours calculation
function getIdealSleepHours (idealHours = 9) {
  if (typeof idealHours !== 'number' || isNaN(idealHours) || idealHours <= 0) {
    console.log("Invalid input: Please enter a positive number for ideal daily sleep hours.");
    return null;
  }
  return idealHours * 7;
}
console.log(`Ideal amount is ${getIdealSleepHours()} hours.`);

// Function to calculate sleep debt based on actual and ideal sleep hours
function calculateSleepDebt() {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (idealSleepHours === null) return;

  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep.");
  } else if (actualSleepHours > idealSleepHours) {
      console.log(`You got ${actualSleepHours - idealSleepHours} more sleep hours than needed.`);
  } else {
      console.log(`You should get ${idealSleepHours - actualSleepHours} more hours of rest.`);
  }
};
calculateSleepDebt();