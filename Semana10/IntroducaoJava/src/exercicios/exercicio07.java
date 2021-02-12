package exercicios;

import java.util.*;

public class exercicio07 {

	public static void main(String[] args) {

		Scanner teclado = new Scanner(System.in);
		
		System.out.print("Digite seu sobrenome: ");
		String sobrenome = teclado.nextLine();

		System.out.print("Digite seu nome: ");
		String nome = teclado.nextLine();
		
		System.out.printf("Seu nome completo é: %s", nome + " " + sobrenome);
		
		teclado.close();

	}
}