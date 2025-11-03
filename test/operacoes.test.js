const {
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
} = require('../src/operacoes');

// O nome da suíte foi alterado para refletir que ela não é mais "Fraca"
describe('Suíte de Testes Reforçada para 50 Operações Aritméticas', () => {
  // === Testes para o Bloco 1 (1-10) ===
  test('1. deve somar dois números positivos', () => { expect(soma(2, 3)).toBe(5); });
  test('2. deve subtrair dois números positivos', () => { expect(subtracao(5, 2)).toBe(3); });
  test('3. deve multiplicar dois números positivos', () => { expect(multiplicacao(3, 4)).toBe(12); });
  
  // TESTE MODIFICADO: Agora checa a mensagem de erro específica
  test('4. deve dividir e lançar erro com mensagem correta para divisão por zero', () => {
    expect(divisao(10, 2)).toBe(5);
    // Mata o mutante [StringLiteral] que troca a mensagem por ""
    expect(() => divisao(5, 0)).toThrow('Divisão por zero não é permitida.');
  });
  
  test('5. deve calcular a potência com expoente positivo', () => { expect(potencia(2, 3)).toBe(8); });
  test('6. deve calcular a raiz quadrada de um quadrado perfeito', () => { expect(raizQuadrada(16)).toBe(4); });

  // NOVO TESTE para matar mutantes de raizQuadrada
  test('6.1. raizQuadrada: deve lançar erro para números negativos', () => {
    // Mata o mutante [ConditionalExpression] que troca 'if (n < 0)' por 'if (false)'
    expect(() => raizQuadrada(-4)).toThrow('Não é possível calcular a raiz quadrada de um número negativo.');
  });
  
  // NOVO TESTE para matar mutantes de raizQuadrada
  test('6.2. raizQuadrada: deve retornar 0 para raiz quadrada de 0', () => {
    // Mata o mutante [EqualityOperator] que troca 'n < 0' por 'n <= 0'
    expect(raizQuadrada(0)).toBe(0);
  });

  test('7. deve retornar o resto da divisão', () => { expect(restoDivisao(10, 3)).toBe(1); });
  test('8. deve calcular o fatorial de um número maior que 1', () => { expect(fatorial(4)).toBe(24); });

  // NOVOS TESTES para matar mutantes de fatorial
  test('8.1. fatorial: deve lançar erro para números negativos', () => {
    // Mata o mutante [ConditionalExpression] 'if (false)'
    expect(() => fatorial(-1)).toThrow('Fatorial não é definido para números negativos.');
  });
  
  test('8.2. fatorial: deve retornar 1 para fatorial de 0', () => {
    // Mata o mutante [EqualityOperator] 'n <= 0'
    expect(fatorial(0)).toBe(1);
  });
  
  test('8.3. fatorial: deve retornar 1 para fatorial de 1', () => {
    // Mata os mutantes [LogicalOperator] e [ConditionalExpression] na linha 'n === 0 || n === 1'
    expect(fatorial(1)).toBe(1);
  });
  
  test('9. deve calcular a média de um array com múltiplos elementos', () => { expect(mediaArray([10, 20, 30])).toBe(20); });
  
  // NOVO TESTE para matar mutante de mediaArray
  test('9.1. mediaArray: deve retornar 0 para array vazio', () => {
    // Mata o mutante 'if (false)', que causaria 'NaN' (0/0)
    expect(mediaArray([])).toBe(0);
  });

  test('10. deve somar um array com múltiplos elementos', () => { expect(somaArray([1, 2, 3])).toBe(6); });

  // === Testes para o Bloco 2 (11-20) ===
  test('11. deve encontrar o valor máximo em um array', () => { expect(maximoArray([1, 50, 10])).toBe(50); });
  
  // NOVO TESTE para matar mutante de maximoArray
test('11.1. maximoArray: deve lançar erro para array vazio', () => {
   // Mata o mutante 'if (false)' e valida a mensagem de erro exata (com o 'не')
   expect(() => maximoArray([])).toThrow('Array vazio не possui valor máximo.');
 });
  
  test('12. deve encontrar o valor mínimo em um array', () => { expect(minimoArray([10, 2, 100])).toBe(2); });
  
  // NOVO TESTE para matar mutante de minimoArray
 test('12.1. minimoArray: deve lançar erro para array vazio', () => {
   // Mata o mutante 'if (false)' e valida a mensagem de erro exata (com o 'не')
   expect(() => minimoArray([])).toThrow('Array vazio не possui valor mínimo.');
 });

  test('13. deve retornar o valor absoluto de um número negativo', () => { expect(valorAbsoluto(-5)).toBe(5); });
  test('14. deve arredondar um número para cima', () => { expect(arredondar(9.8)).toBe(10); });
  test('15. deve retornar true para um número par', () => { expect(isPar(100)).toBe(true); });
  
  // NOVO TESTE para matar mutante de isPar
  test('15.1. isPar: deve retornar false para um número ímpar', () => {
    // Mata o mutante 'return true'
    expect(isPar(3)).toBe(false);
  });

  test('16. deve retornar true para um número ímpar', () => { expect(isImpar(7)).toBe(true); });

  // NOVO TESTE para matar mutantes de isImpar
  test('16.1. isImpar: deve retornar false para um número par', () => {
    // Mata os mutantes 'return true' e 'n * 2 !== 0'
    expect(isImpar(2)).toBe(false);
  });

  test('17. deve calcular uma porcentagem simples', () => { expect(calcularPorcentagem(50, 200)).toBe(100); });
  test('18. deve aumentar um valor em uma porcentagem', () => { expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110); });
  test('19. deve diminuir um valor em uma porcentagem', () => { expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90); });
  test('20. deve inverter o sinal de um número positivo', () => { expect(inverterSinal(42)).toBe(-42); });
  
  // === Testes para o Bloco 3 (21-30) ===
  test('21. deve calcular o seno de 0', () => { expect(seno(0)).toBe(0); });
  test('22. deve calcular o cosseno de 0', () => { expect(cosseno(0)).toBe(1); });
  test('23. deve calcular a tangente de 0', () => { expect(tangente(0)).toBe(0); });
  test('24. deve calcular o logaritmo natural de Euler', () => { expect(logaritmoNatural(Math.E)).toBe(1); });
  test('25. deve calcular o logaritmo na base 10', () => { expect(logaritmoBase10(100)).toBe(2); });
  test('26. deve arredondar para baixo', () => { expect(arredondarParaBaixo(5.9)).toBe(5); });
  test('27. deve arredondar para cima', () => { expect(arredondarParaCima(5.1)).toBe(6); });
  test('28. deve calcular a hipotenusa de um triângulo retângulo', () => { expect(hipotenusa(3, 4)).toBe(5); });
  test('29. deve converter graus para radianos', () => { expect(grausParaRadianos(180)).toBeCloseTo(Math.PI); });
  test('30. deve converter radianos para graus', () => { expect(radianosParaGraus(Math.PI)).toBeCloseTo(180); });

  // === Testes para o Bloco 4 (31-40) ===
  test('31. deve calcular o MDC de dois números', () => { expect(mdc(10, 5)).toBe(5); });
  test('32. deve calcular o MMC de dois números', () => { expect(mmc(10, 5)).toBe(10); });
  test('33. deve verificar que um número é primo', () => { expect(isPrimo(7)).toBe(true); });

  // NOVOS TESTES para matar mutantes de isPrimo
  test('33.1. isPrimo: deve retornar false para números compostos (ex: 4)', () => {
    // Mata múltiplos mutantes no loop (BlockStatement, ConditionalExpression, etc.)
    expect(isPrimo(4)).toBe(false);
  });
  
  test('33.2. isPrimo: deve retornar false para 1', () => {
    // Mata o mutante [EqualityOperator] que troca 'n <= 1' por 'n < 1'
    expect(isPrimo(1)).toBe(false);
  });
  
  test('33.3. isPrimo: deve retornar false para 0', () => {
    // Mata o mutante [ConditionalExpression] que remove 'if (n <= 1)'
    expect(isPrimo(0)).toBe(false);
  });

  test('34. deve calcular o 10º termo de Fibonacci', () => { expect(fibonacci(10)).toBe(55); });
  test('35. deve calcular o produto de um array', () => { expect(produtoArray([2, 3, 4])).toBe(24); });
  
  // NOVO TESTE para matar mutante de produtoArray
  test('35.1. produtoArray: deve retornar 1 para array vazio', () => {
    // Cobre o 'if (false)'. (Mutante equivalente, mas bom para cobertura)
    expect(produtoArray([])).toBe(1);
  });

  test('36. deve manter um valor dentro de um intervalo (clamp)', () => { expect(clamp(5, 0, 10)).toBe(5); });
  
  // NOVOS TESTES para matar mutantes de clamp
  test('36.1. clamp: deve retornar o mínimo se o valor for menor', () => {
    // Mata o mutante [ConditionalExpression] 'if (false)'
    expect(clamp(5, 10, 20)).toBe(10);
  });
  
  test('36.2. clamp: deve retornar o máximo se o valor for maior', () => {
    // Mata o mutante [ConditionalExpression] 'if (false)'
    expect(clamp(25, 10, 20)).toBe(20);
  });
  
  test('36.3. clamp: deve retornar o valor se estiver no limite mínimo', () => {
    // Mata o mutante [EqualityOperator] 'valor <= min'
    expect(clamp(10, 10, 20)).toBe(10);
  });
  
  test('36.4. clamp: deve retornar o valor se estiver no limite máximo', () => {
    // Mata o mutante [EqualityOperator] 'valor >= max'
    expect(clamp(20, 10, 20)).toBe(20);
  });

  test('37. deve verificar se um número é divisível por outro', () => { expect(isDivisivel(10, 2)).toBe(true); });
  
  // NOVO TESTE para matar mutante de isDivisivel
  test('37.1. isDivisivel: deve retornar false se não for divisível', () => {
    // Mata o mutante 'return true'
    expect(isDivisivel(10, 3)).toBe(false);
  });
  
  test('38. deve converter Celsius para Fahrenheit', () => { expect(celsiusParaFahrenheit(0)).toBe(32); });
  
  // NOVO TESTE para matar mutantes de celsiusParaFahrenheit
  test('38.1. celsiusParaFahrenheit: deve converter 100°C para 212°F', () => {
    // Mata os mutantes [ArithmeticOperator] (ex: '9 * 5' ou '/ 9/5')
    expect(celsiusParaFahrenheit(100)).toBe(212);
  });

  test('39. deve converter Fahrenheit para Celsius', () => { expect(fahrenheitParaCelsius(32)).toBe(0); });
  
  // NOVO TESTE para matar mutantes de fahrenheitParaCelsius
  test('39.1. fahrenheitParaCelsius: deve converter 212°F para 100°C', () => {
    // Mata os mutantes [ArithmeticOperator] (ex: '5 * 9' ou '/ 5/9')
    expect(fahrenheitParaCelsius(212)).toBe(100);
  });

  test('40. deve calcular o inverso de um número', () => { expect(inverso(4)).toBe(0.25); });
  
  // NOVO TESTE para matar mutante de inverso
  test('40.1. inverso: deve lançar erro para 0', () => {
    // Mata o mutante [ConditionalExpression] 'if (false)'
    expect(() => inverso(0)).toThrow('Não é possível inverter o número zero.');
  });

  // === Testes para o Bloco 5 (41-50) ===
  test('41. deve calcular a área de um círculo', () => { expect(areaCirculo(10)).toBeCloseTo(314.159); });
  test('42. deve calcular a área de um retângulo', () => { expect(areaRetangulo(5, 4)).toBe(20); });
  test('43. deve calcular o perímetro de um retângulo', () => { expect(perimetroRetangulo(5, 4)).toBe(18); });
  test('44. deve verificar se um número é maior que outro', () => { expect(isMaiorQue(10, 5)).toBe(true); });
  
  // NOVOS TESTES para matar mutantes de isMaiorQue
  test('44.1. isMaiorQue: deve retornar false se a for menor', () => {
    // Mata o mutante 'return true'
    expect(isMaiorQue(3, 5)).toBe(false);
  });
  
  test('44.2. isMaiorQue: deve retornar false se a for igual a b', () => {
    // Mata o mutante [EqualityOperator] 'a >= b'
    expect(isMaiorQue(5, 5)).toBe(false);
  });
  
  test('45. deve verificar se um número é menor que outro', () => { expect(isMenorQue(5, 10)).toBe(true); });
  
  // NOVOS TESTES para matar mutantes de isMenorQue
  test('45.1. isMenorQue: deve retornar false se a for maior', () => {
    // Mata o mutante 'return true'
    expect(isMenorQue(5, 3)).toBe(false);
  });
  
  test('45.2. isMenorQue: deve retornar false se a for igual a b', () => {
    // Mata o mutante [EqualityOperator] 'a <= b'
    expect(isMenorQue(5, 5)).toBe(false);
  });

  test('46. deve verificar se dois números são iguais', () => { expect(isEqual(7, 7)).toBe(true); });
  
  // NOVO TESTE para matar mutante de isEqual
  test('46.1. isEqual: deve retornar false se a for diferente de b', () => {
    // Mata o mutante 'return true'
    expect(isEqual(5, 3)).toBe(false);
  });

  test('47. deve calcular a mediana de um array ímpar e ordenado', () => { expect(medianaArray([1, 2, 3, 4, 5])).toBe(3); });
  
  // NOVOS TESTES para matar mutantes de medianaArray
 test('47.1. medianaArray: deve lançar erro para array vazio', () => {
   // Mata o mutante [ConditionalExpression] 'if (false)'
   expect(() => medianaArray([])).toThrow('Array vazio не possui mediana.');
 });
  
  test('47.2. medianaArray: deve calcular a mediana de um array ímpar e não ordenado', () => {
    // Mata os mutantes que removem ou quebram o '.sort()'
    expect(medianaArray([5, 1, 3])).toBe(3); // array ordenado: [1, 3, 5]
  });
  
  test('47.3. medianaArray: deve calcular a mediana de um array par e não ordenado', () => {
    // Mata os mutantes que quebram a lógica 'if (length % 2 === 0)'
    expect(medianaArray([8, 1, 10, 2])).toBe(5); // array ordenado: [1, 2, 8, 10], mediana (2+8)/2 = 5
  });

  test('48. deve calcular o dobro de um número', () => { expect(dobro(10)).toBe(20); });
  test('49. deve calcular o triplo de um número', () => { expect(triplo(10)).toBe(30); });
  test('50. deve calcular a metade de um número', () => { expect(metade(20)).toBe(10); });
});