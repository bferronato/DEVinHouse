package exercicios;

import java.util.*;

public class exercicio12 {

	public static void main(String[] args) {

		Scanner teclado = new Scanner(System.in);

		System.out.print("Insira um número inteiro: ");
		
		int numero = teclado.nextInt();
		
		if(numero % 2 == 0) {
			System.out.println("O número é par!");
		} else {
			System.out.println("O número é ímpar!");
		}
		
		teclado.close();

	}
}