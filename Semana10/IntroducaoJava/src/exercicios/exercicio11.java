package exercicios;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

public class exercicio11 {

	public static void main(String[] args) throws ParseException {

		Scanner teclado = new Scanner(System.in);

		System.out.print("Qual a sua data de nascimento (dd/mm/aaaa)? ");

		String dataDigitada = teclado.nextLine();

		Date dataNascimento = new SimpleDateFormat("dd/MM/yyyy").parse(dataDigitada);
		Calendar anoNascimento = Calendar.getInstance(TimeZone.getTimeZone("America/Sao_Paulo"));
		anoNascimento.setTime(dataNascimento);

		Calendar hoje = Calendar.getInstance(TimeZone.getTimeZone("America/Sao_Paulo"));
		int anoAtual = hoje.get(Calendar.YEAR);

		int idade = anoAtual - anoNascimento.get(Calendar.YEAR);

		if (idade >= 18) {
			System.out.println("Você é maior de idade");
		} else {
			System.out.println("Você é menor de idade");
		}

		teclado.close();

	}
}