package exercicios;

import java.util.*;

public class exercicio14 {

	public static void main(String[] args) {

		Scanner teclado = new Scanner(System.in);

		System.out.printf("Insira o primeiro número: ");
		Double primeiroNumero = teclado.nextDouble();

		System.out.printf("Insira o segundo número: ");
		Double segundoNumero = teclado.nextDouble();

		teclado.nextLine();
		
		System.out.printf("Insira a operação (somar, subtrair, multiplicar, dividir): ");
		String operacao = teclado.nextLine();

		Double resultado = 0.0;

		switch (operacao) {
		case "somar":
			resultado = primeiroNumero + segundoNumero;
			break;
		case "subtrair":
			resultado = primeiroNumero - segundoNumero;
			break;
		case "multiplicar":
			resultado = primeiroNumero * segundoNumero;
			break;
		case "dividir":
			if(segundoNumero != 0) {
				resultado = primeiroNumero / segundoNumero;				
			} else {
				System.out.println("Não é possível dividir por zero.");
			}
			break;
		default:
			System.out.println("A operação é inválida. Escolha entre (somar, subtrair, multiplicar, dividir)");
			break;
		}
		
		System.out.printf("O resultado é %s", resultado);

		teclado.close();

	}
}