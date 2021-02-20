package funcionario;

public class Main {
	
	public static void main(String[] args) {
		Funcionario funcionario = new Funcionario(1950, 1980);
		imprimeResultado(funcionario);
	}

	private static void imprimeResultado(Funcionario funcionario) {
		System.out.println("Idade: " + funcionario.getIdade());
		System.out.println("Tempo de Servico: " + funcionario.getTempoServico());
		if (funcionario.podeAposentar()) {
			System.out.println("Requerer aposentadoria");
		} else {
			System.out.println("Não requerer");
		}
	}
}