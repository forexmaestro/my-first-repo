const arg = parseInt(process.argv[2]);

function multi(arg){
  if (!isNaN(arg)) {
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question(`Which number would you like to multiply by nigga ${arg}? `, function(newarg) {
      let result = parseInt(newarg) * arg;
      console.log(result);
      rl.close();
    });
  } else {
    console.log("Please provide a valid number.");
  }
}

multi(arg);
