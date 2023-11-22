# code-quiz
The Coding Quiz is an interactive short quiz on beginner JavaScript with a timer as the score. 

## Description
This password generator will prompt you for the following to generate a password:

How many characters would you like in your password (min = 8; max = 128)?
Would you like uppercase letters in your password?
Would you like lowercase letters in your password?
Would you like single-digit numbers in your password?
Would you like special characters in your password?

Given this information, the password generator will generate a password of your specified length with letters, numbers and special characters randomly generated and built into your password. The password will be output to your screen.

## User Story
AS A coding boot camp student

I WANT to take a timed quiz on JavaScript fundamentals that stores high scores

SO THAT I can gauge my progress compared to my peers

### Acceptance Criteria
GIVEN I am taking a code quiz

WHEN I click the start button

THEN a timer starts and I am presented with a question

WHEN I answer a question

THEN I am presented with another question

WHEN I answer a question incorrectly

THEN time is subtracted from the clock

WHEN all questions are answered or the timer reaches 0

THEN the game is over

WHEN the game is over

THEN I can save my initials and score

### Mock Up
Screenshot of the website with a password generated.
![Alt text](./assets/images/code_quiz.png)

Example of prompt.
![Alt text](./assets/images/password-generator-prompt.png)

Example of an alert.
![Alt text](./assets/images/password-generator-alert.png)

## Installation/Execution
https://vdunlop.github.io/password-generator/

The password generator has a button that will need to be pushed to start the process. After you click on the button labeled "Generate Password", you will be prompted for password requirements.

Password Length - password length must be a number between 8 and 128. If you enter a number out of bounds, you will receive an alert and you will need to start over.

Prompt for Uppercase Letter Inclusion - this prompt requires an answer of 'y', 'Y', 'n', or 'N'. If you specify a different value or no value, you will receive an alert and you will need to start over.

Prompt for Lowercase Letter Inclusion - this prompt requires an answer of 'y', 'Y', 'n', or 'N'. If you specify a different value or no value, you will receive an alert and you will need to start over.

Prompt for Single-digit Number Inclusion - this prompt requires an answer of 'y', 'Y', 'n', or 'N'. If you specify a different value or no value, you will receive an alert and you will need to start over.

Prompt for Special Character Inclusion - this prompt requires an answer of 'y', 'Y', 'n', or 'N'. If you specify a different value or no value, you will receive an alert and you will need to start over.

The generated password will include characters of the types above that you respond 'y' or 'Y' to. If you respond 'n' or 'N' to all prompts, you will receive an alert and you will need to start over.


## Usage
When you open the password generator window, you will be able to click on the "Generate Password" button to design and generate a password that is based on random number generation to choose its contents.

## Credits

N/A

## License

N/A
