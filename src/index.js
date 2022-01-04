module.exports = function reverse (int) {
    const stringOfNumbers = [...int.toString()].reverse();

    let reversedNumbers = null;

    if (stringOfNumbers.includes('-')) {

        reversedNumbers = stringOfNumbers.splice(0, stringOfNumbers.length - 1).join('');

        return Number(reversedNumbers);
    }

    return Number(stringOfNumbers.join(''));
}
