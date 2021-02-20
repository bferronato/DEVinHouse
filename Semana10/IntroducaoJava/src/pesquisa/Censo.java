package pesquisa;

import java.util.ArrayList;
import java.util.List;

public class Censo {
	private static final double SALARIO_DE_CORTE = 150.00;

	public static void main(String[] args) {
		
		List<Pessoa> pessoas = new ArrayList<Pessoa>();
		
		pessoas.add(new Pessoa(1250.00, 1));
		pessoas.add(new Pessoa(1152.00, 2));
		pessoas.add(new Pessoa(2000.00, 3));
		pessoas.add(new Pessoa(132.00, 1));
		pessoas.add(new Pessoa(225.00, 3));
		pessoas.add(new Pessoa(100.00, 1));
		pessoas.add(new Pessoa(10000.90, 4));
		double somaDeSalarios = 0;
		int somaDeFilhos = 0;
		double maiorSalario = 0;
		double mediaDeSalarios;
		double mediaDeFilhos;
		double percentualDePessoasComSalarioInferiorA150;
		int quantidadeDePessoasComSalarioMenorQue150 = 0;
		
		for (Pessoa pessoa : pessoas) {
			somaDeSalarios += pessoa.getSalario();
			somaDeFilhos += pessoa.getQuantidadeFilhos();
			
			if (maiorSalario < pessoa.getSalario()) {
				maiorSalario = pessoa.getSalario();
			}
			if (pessoa.getSalario() <= SALARIO_DE_CORTE) {
				quantidadeDePessoasComSalarioMenorQue150++;
			}
			
		}
		
		mediaDeSalarios = somaDeSalarios / pessoas.size();
		mediaDeFilhos = somaDeFilhos / pessoas.size();
		percentualDePessoasComSalarioInferiorA150 = (100.00 * quantidadeDePessoasComSalarioMenorQue150)/ pessoas.size();
		System.out.format("Média de salários: %.2f.\n", mediaDeSalarios);
		System.out.format("Maior salário: %.2f.\n", maiorSalario);
		System.out.format("Quantidade de pessoas com salário inferior a R$ 150,00: %d.\n", quantidadeDePessoasComSalarioMenorQue150);
		System.out.format("Percentual de pessoas com salário inferior a R$ 150,00: %.2f.\n", percentualDePessoasComSalarioInferiorA150);
		System.out.format("Média de filhos: %.1f.\n", mediaDeFilhos);
		
	}