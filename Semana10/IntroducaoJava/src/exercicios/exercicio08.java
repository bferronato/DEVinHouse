package exercicios;

import java.util.*;

public class exercicio08 {

	public static void main(String[] args) {
		
		Scanner teclado = new Scanner(System.in);
		
		System.out.print("Digite um número com duas ou mais casas decimais depois da vírgula: ");

		Double numero = teclado.nextDouble();
		
		int resultado = numero.intValue();

		System.out.printf("Número inteiro: %s", resultado);
		
		teclado.close();


	}
}