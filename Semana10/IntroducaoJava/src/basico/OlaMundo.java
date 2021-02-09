package basico;

import java.util.Date;

public class OlaMundo {

	public static void main(String[] args) {
		System.out.println("Olá");
		System.out.println("Tudo bem?");
		
		Date data = new Date();
		System.out.println(data);
		
		long teste = (long) 1147483648;
		System.out.println(teste);

		double altura = 1.72;
		System.out.printf("Minha altrura é %.1f", altura);
	}
}