/**
 * FizzBuzz実装
 * 可読性を重視したシンプルな実装
 */

/**
 * FizzBuzzの判定と出力を行う関数
 * @param {number} num - 判定する数値
 * @returns {string} - FizzBuzz、Fizz、Buzz、または数値の文字列
 */
function fizzBuzz(num) {
    if (num % 15 === 0) return "FizzBuzz";
    if (num % 3 === 0) return "Fizz";
    if (num % 5 === 0) return "Buzz";
    return num.toString();
}

/**
 * 指定した範囲でFizzBuzzを実行
 * @param {number} start - 開始数値
 * @param {number} end - 終了数値
 */
function runFizzBuzz(start, end) {
    console.log(`FizzBuzz: ${start}～${end}`);
    console.log("==============================");

    for (let i = start; i <= end; i++) {
        console.log(`${i}: ${fizzBuzz(i)}`);
    }
}

// このファイルが直接実行されたときだけ runFizzBuzz を走らせる
if (require.main === module) {
    runFizzBuzz(1, 20);
}

// テストや他モジュールから利用できるようにエクスポート
module.exports = {
    fizzBuzz,
    runFizzBuzz,
};