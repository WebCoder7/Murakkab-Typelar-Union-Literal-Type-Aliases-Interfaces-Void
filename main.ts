///////////////  1   ////////////
function makeOutWord(out: string, word: string): string {
  const a = out.slice(0, 2);
  const b = out.slice(2);
  return `${a}${word}${b}`;
}
console.log(makeOutWord("<<>>", "Yay"));
console.log(makeOutWord("<<>>", "WooHoo"));
console.log(makeOutWord("[[]]", "word"));
///////////////  1   ////////////

///////////////  2   ////////////
function firstHalf(str: string, n: number): string {
  return str.slice(0, n);
}
console.log(firstHalf("WooHoo", 3));
console.log(firstHalf("HelloThere", 5));
console.log(firstHalf("abcdef", 3));
///////////////  2   ////////////

///////////////  3   ////////////
function nonStart(str1: string, str2: string): string {
  return str1.slice(1) + str2.slice(1);
}
console.log(nonStart("Hello", "There"));
console.log(nonStart("java", "code"));
console.log(nonStart("shotl", "java"));
///////////////  3   ////////////

///////////////  4   ////////////
function theEnd(str: string, isFront: boolean): string {
  return isFront ? str.charAt(0) : str.charAt(str.length - 1);
}
console.log(theEnd("Hello", true));
console.log(theEnd("Hello", false));
console.log(theEnd("oh", true));
///////////////  4   ////////////

///////////////  5   ////////////
function endsLy(str: string): boolean {
  return str.endsWith("ly");
}
console.log(endsLy("oddly"));
console.log(endsLy("y"));
console.log(endsLy("oddy"));
///////////////  5   ////////////

///////////////  6   ////////////
function middleThree(str: string): string {
  if (str.length < 3) return "";
  const start = Math.floor((str.length - 3) / 2);
  return str.slice(start, start + 3);
}
console.log(middleThree("Candy"));
console.log(middleThree("and"));
console.log(middleThree("solving"));
///////////////  6   ////////////

///////////////  7   ////////////
function lastChars(str1: string, str2: string): string {
  return (str1.slice(-1) || "@") + (str2.slice(-1) || "@");
}
console.log(lastChars("last", "chars"));
console.log(lastChars("yo", "java"));
console.log(lastChars("hi", ""));
///////////////  7   ////////////

///////////////  8   ////////////
function seeColor(str: string): string {
  if (str.startsWith("red")) {
    return "red";
  } else if (str.startsWith("blue")) {
    return "blue";
  } else {
    return "";
  }
}
console.log(seeColor("redxx"));
console.log(seeColor("xxred"));
console.log(seeColor("blueTimes"));
///////////////  8   ////////////

///////////////  9   ////////////
function extraFront(str: string): string {
  const front = str.slice(0, 2);
  return front.repeat(3);
}
console.log(extraFront("Hello"));
console.log(extraFront("ab"));
console.log(extraFront("H"));
///////////////  9   ////////////

///////////////  10   ////////////
function makeAbba(str1: string, str2: string): string {
  return str1 + str2 + str2 + str1;
}
console.log(makeAbba("Hi", "Bye"));
console.log(makeAbba("Yo", "Alice"));
console.log(makeAbba("What", "Up"));
///////////////  10   ////////////
