package exercicios;

import java.util.Calendar;

public class exercicio04 {

	public static void main(String[] args) {

		Calendar calendar = Calendar.getInstance();

		int hora = calendar.get(Calendar.HOUR_OF_DAY);
		int minuto = calendar.get(Calendar.MINUTE);

		if (hora > 0 && hora < 12) {
			System.out.printf("Bom dia, no momento são %s:%s", hora, minuto);
		} else if (hora > 12 && hora < 18) {
			System.out.printf("Bom tarde, no momento são %s:%s", hora, minuto);
		} else if (hora > 18) {
			System.out.printf("Bom noite, no momento são %s:%s", hora, minuto);
		}

	}
}