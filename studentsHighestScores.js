/* You have an array of objects representing students test scores.
Each result has an id value representing a student, and the score value of a given test.
Log to the console the highest score of each student, the 5 highest scores they
managed to recieve from lowest to highest and their average score out of the 5 top scores */

const student1 = 1;
const student2 = 2;

const scores = [
  {id:2, score: 76},
  {id:1, score: 89},
  {id:2, score: 33},
  {id:1, score: 47},
  {id:1, score: 75},
  {id:2, score: 82},
  {id:2, score: 14},
  {id:2, score: 67},
  {id:1, score: 85},
  {id:1, score: 98}, //student nr1 highest score
  {id:1, score: 94},
  {id:1, score: 86},
  {id:2, score: 29},
  {id:1, score: 32},
  {id:2, score: 66},
  {id:1, score: 64},
  {id:2, score: 100}, //student nr2 highest score
  {id:2, score: 81},
];

const getStudentHighestScore = student => {
  let studentHighestScore = 0;
  for (let score of scores) {
    if (score.id === student) {
      let studentScore = score.score;
      if (studentScore >= studentHighestScore) {
        studentHighestScore = studentScore;
      }
    }
  }
  console.log(`Student nr${student} highest score is ${studentHighestScore}.`);
  return studentHighestScore;
}

const student1HighScore = getStudentHighestScore(student1);
const student2HighScore = getStudentHighestScore(student2);

const get5HighestScores = student => {
  let results = [];
  for (let result of scores) {
    if (result.id === student) {
      results.push(result.score);
    }
  }
  results.sort((a, b) => a - b);
  const highestScores = results.slice(results.length - 5, results.length);
  console.log(`Student nr${student} highest scores are ${highestScores}.`);
  return highestScores;
}

const student1HighestScoresSum = get5HighestScores(student1)
.reduce((acc, curr) => acc + curr);
const student2HighestScoresSum = get5HighestScores(student2)
.reduce((acc, curr) => acc + curr);

const student1BestScoresAverage = student1HighestScoresSum/5;
const student2BestScoresAverage = student2HighestScoresSum/5;

console.log(`Student nr1 average score is ${student1BestScoresAverage} while Student nr2 average score is ${student2BestScoresAverage}.`);

// Run the code to see the results

// This code can easily be reused as a simple calculating tool for more students and more scores