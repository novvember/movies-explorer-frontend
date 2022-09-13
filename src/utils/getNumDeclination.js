function getNumDeclination(number, words) {
  const CASES = [2, 0, 1, 1, 1, 2];
  return words[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : CASES[number % 10 < 5 ? number % 10 : 5]
  ];
}

export default getNumDeclination;
