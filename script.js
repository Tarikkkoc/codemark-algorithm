function bolunmeKontrol(number) {
  let strNumber = String(number);

  let result = 0;
  console.log("ss", strNumber);
  for (let i = 0; i < strNumber.length; i++) {
    let digit = parseInt(strNumber[i]);

    if (digit === 0) continue;

    if (number % digit === 0) result++;
  }

  return result;
}
let numbers = [1257, 554, 68921, 78521, 123];

for (let i = 0; i < numbers.length; i++) {
  let result = bolunmeKontrol(numbers[i]);
  console.log(`Sayı: ${numbers[i]}, Sonuç: ${result}`);
}
