
const args = process.argv;
const pattern = args[3];

const inputLine: string = await Bun.stdin.text();

function matchPattern(inputLine: string, pattern: string): boolean {
  if (pattern.includes('\\d')) {
    return /\d/.test(inputLine)
  }
  if (pattern.includes('\\w')) {
    return /\w/.test(inputLine)
  }
  else if (pattern.length >= 1) {
    return inputLine.includes(pattern);
  } else {
    throw new Error(`Unhandled pattern: ${pattern}`);
  }
}

if (args[2] !== "-E") {
  console.log("Expected first argument to be '-E'");
  process.exit(1);
}


if (matchPattern(inputLine, pattern)) {
  process.exit(0);
} else {
  process.exit(1);
}

export default matchPattern
