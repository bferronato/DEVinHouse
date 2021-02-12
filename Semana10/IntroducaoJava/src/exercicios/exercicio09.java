package exercicios;

import java.util.*;

public class exercicio09 {

	public static void main(String[] args) {
		
		Scanner teclado = new Scanner(System.in);
		
		System.out.print("Digite um nome qualquer: ");

		String nome = teclado.nextLine();

		System.out.printf("O nome digitado contém: %s letras", nome.length());
		
		teclado.close();
		
	}
}