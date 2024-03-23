#! /usr/bin/env node

import inquirer from "inquirer";

const randamNumber: number = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        message: "Please Guess your number between 1-6: ",
        type: "number",
        name: "userGuessedNumber",    
    }
]);

if (answer.userGuessedNumber === randamNumber) {
    console.log("Congratulation! You guessed right number");
}else{
    console.log("You guessed wrong Number");
}