package exercicios;

import java.util.Scanner;

public class exercicio17 {

	public static void main(String[] args) {

		Scanner teclado = new Scanner(System.in);
		int numero;
		int fatorial;

		do {
			System.out.print("Digite um número de 0 a 10 para calcular o fatorial ");
			numero = teclado.nextInt();

		} while (numero < 0 || numero > 10);

		teclado.close();

		fatorial = fatorial(numero);

		imprimeFatorial(numero, fatorial);
	}

	private static void imprimeFatorial(int numero, int fatorial) {
		System.out.printf("O fatorial de %s é %s", numero, fatorial);
	}

	private static int fatorial(int numero) {
		if (numero == 0) {
			return 1;
		}
		return numero * fatorial(numero - 1);
	}

}
