package exercicios;

import java.util.*;

public class exercicio13 {

	public static void main(String[] args) {

		Double media;
		Double soma = 0.0;

		final int AVALIACOES = 3;

		Scanner teclado = new Scanner(System.in);

		for (int i = 0; i < AVALIACOES; i++) {

			System.out.printf("Insira a %sª nota: ", (i + 1));
			soma += teclado.nextDouble();

		}

		media = soma / AVALIACOES;

		System.out.printf("Sua média final é %.2f:", media);

		teclado.close();

	}
}