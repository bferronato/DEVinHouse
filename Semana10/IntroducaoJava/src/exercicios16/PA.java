package exercicios16;

public class PA extends Progressao {

	@Override
	public String calcular(Integer valorInicial, Integer raiz, int quantidade) {

		int i = 0;
		int resultado = 0;
		String retorno[] = new String[quantidade];

		while (i < quantidade) {
			resultado = valorInicial;
			valorInicial = resultado + raiz;
			retorno[i] = String.valueOf(resultado);
			i++;
		}

		return String.join(", ", retorno);

	}

}