// One-Line Office Joke — make.fun entry
// Prints the entry line: a single joke about office life, at most 200 characters.
// The competition caps the line at 200 characters, so the program validates
// its own length before printing and refuses to emit an over-long line.

const MAX_LENGTH = 200;

const joke =
  "This meeting could have been an email, but then nobody would have gotten to say 'let's circle back' with a straight face for 45 minutes.";

if (joke.length > MAX_LENGTH) {
  console.error(
    `Joke is ${joke.length} characters, over the ${MAX_LENGTH}-character limit.`,
  );
  process.exit(1);
}

console.log(joke);
