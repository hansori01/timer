const userInput = process.argv.slice(2);
const timer = (userInput) => {
  // delay starts at 0
  let delay = 0;
  //if continue code and beep if userInput exists
  if (userInput) {
    //loop through every element of userInput
    for (let singleTimer of userInput) {
      // only process positive intergers
      if (singleTimer > 0) {
        //add delay time for each setTimeout call
        delay += singleTimer * 1000;
        //set Timeout
        setTimeout(() => {
          // this makes beep
          process.stdout.write('\x07');
          // delay is incremental every loop
        }, delay);
      }
    }
  }
};
timer(userInput);

