package exercicios;

import java.util.*;

public class exercicio05 {

	public static void main(String[] args) {

		Locale currentLocale = Locale.getDefault();
		String idioma = currentLocale.getDisplayLanguage();
		 
		System.out.printf("O idioma do sistema é: %s", idioma);

	}
}