package exercicios;

import java.util.*;

public class exercicio10 {

	public static void main(String[] args) {

		Scanner teclado = new Scanner(System.in);

		int numeroDigitado;
		int aleatorio;

		do {

			System.out.print("Adivinhe qual número de 1 a 5 eu estou pensando: ");
			numeroDigitado = teclado.nextInt();

			aleatorio = (int) (Math.random() * 6);
			
			if(numeroDigitado != aleatorio) {
				System.out.printf("Você errou! O número correto era %s%n", aleatorio);
			}

		} while (numeroDigitado != aleatorio);

		System.out.println("Você acertou!");

		teclado.close();

	}
}