package funcionario;

import java.util.Calendar;

public class Funcionario {
	private static final int TEMPO_DE_SERVICO_MINIMO_PARA_APOSENTADORIA = 30;
	private static final int IDADE_MINIMA_APOSENTADORIA_POR_IDADE = 65;
	private static final int TEMPO_DE_SERVICO_MININO_PARA_APOSENTADORIA_SISTEMA_MISTO = 25;
	private static final int IDADE_MINIMA_APOSENTADORIA_POR_SISTEMA_MISTO = 60;
	private int anoNascimento;
	private int anoIngressoEmpresa;
	private int anoAtual = Calendar.getInstance().get(Calendar.YEAR);

	public Funcionario(int anoNascimento, int anoIngressoEmpresa) {
		this.anoNascimento = anoNascimento;
		this.anoIngressoEmpresa = anoIngressoEmpresa;
	}

	public int getAnoNascimento() {
		return anoNascimento;
	}

	public void setAnoNascimento(int anoNascimento) {
		this.anoNascimento = anoNascimento;
	}

	public int getAnoIngressoEmpresa() {
		return anoIngressoEmpresa;
	}

	public void setAnoIngressoEmpresa(int anoIngressoEmpresa) {
		this.anoIngressoEmpresa = anoIngressoEmpresa;
	}

	public boolean podeAposentar() {
		return isIdadeSuficienteParaAposentadoria() || isTempoDeServicoSuficienteParaAposentadoria()
				|| isIdadeETempoDeServicoSuficienteParaAposentadoria();
	}

	public int getTempoServico() {
		return anoAtual - anoIngressoEmpresa;
	}

	public int getIdade() {
		return anoAtual - anoNascimento;
	}

	private boolean isIdadeETempoDeServicoSuficienteParaAposentadoria() {
		return getIdade() >= IDADE_MINIMA_APOSENTADORIA_POR_SISTEMA_MISTO
				&& getTempoServico() >= TEMPO_DE_SERVICO_MININO_PARA_APOSENTADORIA_SISTEMA_MISTO;
	}

	private boolean isTempoDeServicoSuficienteParaAposentadoria() {
		return getTempoServico() >= TEMPO_DE_SERVICO_MINIMO_PARA_APOSENTADORIA;
	}

	private boolean isIdadeSuficienteParaAposentadoria() {
		return getIdade() >= IDADE_MINIMA_APOSENTADORIA_POR_IDADE;
	}
}