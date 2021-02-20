package pesquisa;

public class Pessoa {
	private double salario;
	private int quantidadeFilhos;

	public Pessoa(double salario, int quantidadeFilhos) {
		this.salario = salario;
		this.quantidadeFilhos = quantidadeFilhos;
	}

	public double getSalario() {
		return salario;
	}

	public void setSalario(double salario) {
		this.salario = salario;
	}

	public int getQuantidadeFilhos() {
		return quantidadeFilhos;
	}

	public void setQuantidadeFilhos(int quantidadeFilhos) {
		this.quantidadeFilhos = quantidadeFilhos;
	}
}