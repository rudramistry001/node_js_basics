import('chalk').then(({ default: chalk }) => {
    console.log(chalk.blue('Hello world!'));
    console.log(chalk.bgRed('Hello world!'));
    console.log(chalk.redBright('Hello world!'));
    console.log(chalk.green('Hello world!eaeeaewew'));
    console.log(chalk.yellow('Hello worddld!'));
    console.log(chalk.white('Hello world! this is me Rudra Mistry'));
}).catch(error => {
    // Handle error
    console.error('Error while importing chalk:', error);
});

