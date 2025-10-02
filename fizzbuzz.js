/**
 * FizzBuzz問題の解答
 * - 3の倍数の時は"Fizz"
 * - 5の倍数の時は"Buzz"
 * - 15の倍数の時は"FizzBuzz"
 * - それ以外は数値をそのまま返す
 */
function fizzbuzz(n) {
  if (n % 15 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n.toString();
}

/**
 * 指定した範囲のFizzBuzzを実行
 */
function runFizzBuzz(start, end) {
  const results = [];
  for (let i = start; i <= end; i++) {
    results.push(fizzbuzz(i));
  }
  return results;
}

// 1から20までの例を出力
console.log("FizzBuzz (1-20):");
const results = runFizzBuzz(1, 20);
results.forEach((result, index) => {
  console.log(`${index + 1}: ${result}`);
});

// モジュールとしてエクスポート（テスト用）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { fizzbuzz, runFizzBuzz };
}
