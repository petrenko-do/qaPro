'number' + 3 + 3 //будет конкатенация

null + 3 // null = false false = 0 поэтому ответ 0 + 3 = 3

5 && "qwerty" // выведит последний результат потому что оба операнда являются true а знак && выводит последнее истиное значение

+'40' + +'2' + "hillel" // плюсы перед цифрами переводят строки в числа и поэтому сдет сначала сложение а потом конкатынация

'10' - 5 === 6  //false потому что 4 != 6

true + false  // переводится в числа и ответ 1

'4px' - 3 //будет NaN потому что нельзя число отнимать от строки

'4' - 3 // тоже переводится в число и ответ 1

'6' + 3 ** 0 // тройка возводимая в нулевую степень получает 1, дальше происходит конкатенация и ответ 61

12 / '6' //6 переводится в число и ответ 2 

'10' + (5 === 6)  // сначала проверяется строгое равенство и ответ false, потом конкатенация

null == '' //идет сравнение null и пустой строки и оба относятся к false поэтому ответ будет false

3 ** (9 / 3) // 3 в трейтьей степени = 27

!!'false' == !!'true' //  ответ будет false потому что оператор двойного отрицания преобразует строки в булиновое значение и с первым операндом получется (false true false) второй операнд (true false true) и потом удет сравнение false == true  и ответ false

0 || '0' && 1  // по таблице приотритетов первый будет оператор && и у него ответ будет 1 т.к это true. Дальше идет оператор ИЛИ   0 ИЛИ 1 и ответ вернет 1

(+null == false) < 1 // первые вычисления в скобках вернут true (0 == 0). true < 1 вернет false

false && true || true  // сначала оператор И вернет false, потом сравнение с оператором ИЛИ и вернет true

false && (false || true) // сначала в скобках вернет true, потом вернет false

(+null == false) < 1 ** 5  // (0 == 0) < 1   //  true < 1   //   1 < 1 = false    //      ответ false
