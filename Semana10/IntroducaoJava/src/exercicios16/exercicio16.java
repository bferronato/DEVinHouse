package exercicios16;

import java.util.*;

public class exercicio16 {

	public static void main(String[] args) {

		Scanner teclado = new Scanner(System.in);

		final int QUANTIDADE = 10;
		
		System.out.printf("Insira o valor inicial: ");
		Integer valorInicial = teclado.nextInt();
		
		System.out.printf("Insira a raiz: ");
		Integer raiz = teclado.nextInt();
		
		teclado.nextLine();
		
		System.out.printf("Deseja calcular uma PA ou uma PG? ");
		String operacao = teclado.nextLine();
		
		Progressao progressao = getProgressao().get(operacao);
		calcular(progressao, valorInicial, raiz, QUANTIDADE);
		
		teclado.close();

	}
	
	private static void calcular(Progressao progressao, Integer valorInicial, Integer raiz, int quantidade) {
		String resultado = progressao.calcular(valorInicial, raiz, quantidade);
		System.out.println("Resultado: " + resultado);
	}
	
	private static HashMap<String, Progressao> getProgressao() {
		HashMap<String, Progressao> progressao = new HashMap<>();
		progressao.put("PA", new PA());
		progressao.put("PG", new PG());
		return progressao;
	}
}