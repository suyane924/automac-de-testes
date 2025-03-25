const Banco = require("../src/banco");

describe("Testes da classe Banco", () => {
  let conta;

  beforeEach(() => {
    conta = new Banco('Yuri Bopre', 10);
  });

  test("deposito de 20 reais", async () => {
    expect (conta.depositar(20));toBe(20);
  });

  test ("saque de 5 reais", async () => {
    expect(conta.sacar(5)).toBe(5);
  });

  test ("transferencia de 18 reais", async () => {
    conta.transferir(5, contaDestino);
    expect(conta.obterSaldo()).toBe(5);
    expect(contaDestino.obterSaldo()).toBe(1005)
  });

});

