function conversor() {
    const valorPlumas = prompt('Digite seu valor em Plumas, por favor: ');
    const valorPlumasNumerico = parseFloat(valorPlumas.replace(',', '.'));
    const taxaPlumaReal = 0.0040;
    const taxaPlumaEuro = 0.00068; 
    const taxaPlumaDolar = 0.00073; 
  
  /*Conversão Valores*/
    const valorReal = valorPlumasNumerico * taxaPlumaReal;
    const valorEuro = valorPlumasNumerico * taxaPlumaEuro;
    const valorDolar = valorPlumasNumerico * taxaPlumaDolar;
  
  /*Formatação Valores*/
    function formatarMoeda(valor) {
      const formato = valor.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      return formato.replace('.', ',');
    }
  
    const valorRealFormatado = formatarMoeda(valorReal);
    const valorEuroFormatado = formatarMoeda(valorEuro);
    const valorDolarFormatado = formatarMoeda(valorDolar);
  
    const contentDiv = document.querySelector('.content');
  
  /*Resultado*/  
    const resultadoReal = document.createElement('p');
    resultadoReal.textContent = `Valor em Real: R$ ${valorRealFormatado}`;
  
    const resultadoEuro = document.createElement('p');
    resultadoEuro.textContent = `Valor em Euro: € ${valorEuroFormatado}`;
  
    const resultadoDolar = document.createElement('p');
    resultadoDolar.textContent = `Valor em Dólar Americano: $ ${valorDolarFormatado}`;
  
    // Limpa qualquer resultado anterior antes de adicionar os novos
    const resultadosAnteriores = contentDiv.querySelectorAll('p');
    resultadosAnteriores.forEach(p => p.remove());
  
    contentDiv.appendChild(resultadoReal);
    contentDiv.appendChild(resultadoEuro);
    contentDiv.appendChild(resultadoDolar);
  }
