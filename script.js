const objetos = [... document.querySelectorAll('.objeto')];
const locais = [... document.querySelectorAll('.local')];
const resultadoPersonalidade = document.getElementById('resultadoPersonalidade');
const toggleMenu = document.getElementById('toggleMenu');

const personalidades = [
	{personalidade: 'INTJ', funcoes: ['Ni', 'Te', 'Fi', 'Se'], energia: 'Introversão', informacao: 'Intuição', decisao: 'Pensamento', viver: 'Julgamento', comunicacao: 'Conclusivo', raciocinio: 'Analítico', temperamento: 'Racional', loop: 'Fi', grip: 'Se'},
	{personalidade: 'INFJ', funcoes: ['Ni', 'Fe', 'Ti', 'Se'], energia: 'Introversão', informacao: 'Intuição', decisao: 'Sentimento', viver: 'Julgamento', comunicacao: 'Conclusivo', raciocinio: 'Experimental', temperamento: 'Idealista', loop: 'Ti', grip: 'Se'},
	{personalidade: 'ISTJ', funcoes: ['Si', 'Te', 'Fi', 'Ne'], energia: 'Introversão', informacao: 'Sensação', decisao: 'Pensamento', viver: 'Julgamento', comunicacao: 'Conclusivo', raciocinio: 'Prático', temperamento: 'Guardião', loop: 'Fi', grip: 'Ne'},
	{personalidade: 'ISFJ', funcoes: ['Si', 'Fe', 'Ti', 'Ne'], energia: 'Introversão', informacao: 'Sensação', decisao: 'Sentimento', viver: 'Julgamento', comunicacao: 'Conclusivo', raciocinio: 'Relacional', temperamento: 'Guardião', loop: 'Ti', grip: 'Ne'},
	{personalidade: 'INTP', funcoes: ['Ti', 'Ne', 'Si', 'Fe'], energia: 'Introversão', informacao: 'Intuição', decisao: 'Pensamento', viver: 'Percepção', comunicacao: 'Opinador', raciocinio: 'Analítico', temperamento: 'Racional', loop: 'Si', grip: 'Fe'},
	{personalidade: 'ISTP', funcoes: ['Ti', 'Se', 'Ni', 'Fe'], energia: 'Introversão', informacao: 'Sensação', decisao: 'Pensamento', viver: 'Percepção', comunicacao: 'Opinador', raciocinio: 'Prático', temperamento: 'Artesão', loop: 'Ni', grip: 'Fe'},
	{personalidade: 'INFP', funcoes: ['Fi', 'Ne', 'Si', 'Te'], energia: 'Introversão', informacao: 'Intuição', decisao: 'Sentimento', viver: 'Percepção', comunicacao: 'Opinador', raciocinio: 'Experimental', temperamento: 'Idealista', loop: 'Si', grip: 'Te'},
	{personalidade: 'ISFP', funcoes: ['Fi', 'Se', 'Ni', 'Te'], energia: 'Introversão', informacao: 'Sensação', decisao: 'Sentimento', viver: 'Percepção', comunicacao: 'Opinador', raciocinio: 'Relacional', temperamento: 'Artesão', loop: 'Ni', grip: 'Te'},
	{personalidade: 'ENTJ', funcoes: ['Te', 'Ni', 'Se', 'Fi'], energia: 'Extroversão', informacao: 'Intuição', decisao: 'Pensamento', viver: 'Julgamento', comunicacao: 'Decisivo', raciocinio: 'Analítico', temperamento: 'Racional', loop: 'Se', grip: 'Fi'},
	{personalidade: 'ESTJ', funcoes: ['Te', 'Si', 'Ne', 'Fi'], energia: 'Extroversão', informacao: 'Sensação', decisao: 'Pensamento', viver: 'Julgamento', comunicacao: 'Decisivo', raciocinio: 'Prático', temperamento: 'Guardião', loop: 'Ne', grip: 'Fi'},
	{personalidade: 'ENFJ', funcoes: ['Fe', 'Ni', 'Se', 'Ti'], energia: 'Extroversão', informacao: 'Intuição', decisao: 'Sentimento', viver: 'Julgamento', comunicacao: 'Decisivo', raciocinio: 'Experimental', temperamento: 'Idealista', loop: 'Si', grip: 'Ti'},
	{personalidade: 'ESFJ', funcoes: ['Fe', 'Si', 'Ne', 'Ti'], energia: 'Extroversão', informacao: 'Sensação', decisao: 'Sentimento', viver: 'Julgamento', comunicacao: 'Decisivo', raciocinio: 'Relacional', temperamento: 'Guardião', loop: 'Ne', grip: 'Ti'},
	{personalidade: 'ENTP', funcoes: ['Ne', 'Ti', 'Fe', 'Si'], energia: 'Extroversão', informacao: 'Intuição', decisao: 'Pensamento', viver: 'Percepção', comunicacao: 'Agregador', raciocinio: 'Analítico', temperamento: 'Racional', loop: 'Fe', grip: 'Si'},
	{personalidade: 'ENFP', funcoes: ['Ne', 'Fi', 'Te', 'Si'], energia: 'Extroversão', informacao: 'Intuição', decisao: 'Sentimento', viver: 'Percepção', comunicacao: 'Agregador', raciocinio: 'Experimental', temperamento: 'Idealista', loop: 'Te', grip: 'Si'},
	{personalidade: 'ESTP', funcoes: ['Se', 'Ti', 'Fe', 'Ni'], energia: 'Extroversão', informacao: 'Sensação', decisao: 'Pensamento', viver: 'Percepção', comunicacao: 'Agregador', raciocinio: 'Prático', temperamento: 'Artesão', loop: 'Te', grip: 'Ni'},
	{personalidade: 'ESFP', funcoes: ['Se', 'Fi', 'Te', 'Ni'], energia: 'Extroversão', informacao: 'Sensação', decisao: 'Sentimento', viver: 'Percepção', comunicacao: 'Agregador', raciocinio: 'Relacional', temperamento: 'Artesão', loop: 'Te', grip: 'Ni'}
];

const verificaCompatibilidade = (x, y) => {
	for (let i = 0; i < x.length; i++) {
		for (let j = 0; j < y.length; j++) {
			if (x[i] === y[j])
				return true;
		}
	}

	return false;
}

const verificaConjuntoObjetos = () => {
	const conjuntoObjetos = [... document.querySelectorAll('.conjunto-objetos')];
	conjuntoObjetos.forEach(conjunto => {
		if (conjunto.childElementCount === 0)
			conjunto.classList.add('hide');	
	});
}

const arraysIguais = (x, y) => {
	if (x.length !== y.length) return false;
	for (let i = 0; i < x.length; i++) {
		if (x[i] !== y[i])
			return false;
	}

	return true;
}

const verificaPersonalidade = () => {
	let filhos = [... document.querySelector('.personalidade').children];
	let funcoes = [];

	funcoes.push(document.querySelector('.primeira').textContent);
	funcoes.push(document.querySelector('.segunda').textContent);
	funcoes.push(document.querySelector('.terceira').textContent);
	funcoes.push(document.querySelector('.quarta').textContent);

	for (let i = 0; i < personalidades.length; i++) {
		if (arraysIguais(personalidades[i].funcoes, funcoes)) {
			return personalidades[i];
		}
	}

	return 'Inexistente';
}
const funcoesOpostas = (funcao) => {
	switch(funcao) {
		case 'Si':
		case 'Ni':
			return ['Te', 'Fe'];
			break;
		case 'Se':
		case 'Ne':
			return ['Ti', 'Fi'];
			break;
		case 'Fi':
		case 'Ti':
			return ['Se', 'Ne'];
			break;
		case 'Te':
		case 'Fe':
			return ['Si', 'Ni'];
			break;
	}	
}

const funcaoComplementar = (funcao) => {
	switch(funcao) {
		case 'Si':
			return 'Ne';
			break;
		case 'Se':
			return 'Ni';
			break;
		case 'Ni':
			return 'Se';
			break;
		case 'Ne':
			return 'Si';
			break;
		case 'Fi':
			return 'Te';
			break;
		case 'Fe':
			return 'Ti';
			break;
		case 'Ti':
			return 'Fe';
			break;
		case 'Te':
			return 'Fi';
			break;
	}
}

const mostraFuncoes = () => {
	let obj = document.querySelectorAll('.obj-funcao');
	obj.forEach(funcaoAtual => {
		funcaoAtual.classList.remove('hide');
	});
}

const escondeOutras = (par) => {
	let obj = document.querySelector('.conjunto-objetos-montagem').querySelectorAll('.obj-funcao');
	obj.forEach(funcaoAtual => {
		if (funcaoAtual.textContent !== par[0] && funcaoAtual.textContent !== par[1])
			funcaoAtual.classList.add('hide');
	});
}

const mantemUma = (funcao) => {
	let obj = document.querySelector('.conjunto-objetos-montagem').querySelectorAll('.obj-funcao');
	obj.forEach(funcaoAtual => {
		if (funcaoAtual.textContent !== funcao)
			funcaoAtual.classList.add('hide');
	});
}

const escondeFuncao = (funcao) => {
	document.getElementById(funcao).classList.add('hide');
}

objetos.forEach(objeto => {
	objeto.addEventListener('dragstart', () => {
		objeto.classList.add('dragging');
	});

	objeto.addEventListener('dragend', () => {
		objeto.classList.remove('dragging');
	});
});

let primeiraFuncao;
locais.forEach(local => {
	local.addEventListener('dragover', (e) => {
		e.preventDefault();
		const objetoAtual = document.querySelector('.dragging');
		objetoAtual.style.border = '1px solid var(--quarta-cor)';
		if (local.classList.contains('personalidade')) {
			objetoAtual.style.border = '1px solid lightblue';
			if (local.children.length < 1) {
				if (local.classList.contains('primeira'))
					local.appendChild(objetoAtual);

				if (local.classList.contains('segunda')) {
					let anterior = document.querySelector('.primeira').textContent;
					let opostas = funcoesOpostas(anterior);
					if (opostas) {
						if (objetoAtual.textContent === opostas[0] || objetoAtual.textContent === opostas[1])
							local.appendChild(objetoAtual);
					}
				}	

				if (local.classList.contains('terceira')) {
					let anterior = document.querySelector('.segunda').textContent;
					let complementar = funcaoComplementar(anterior);
					if (objetoAtual.textContent === complementar)
						local.appendChild(objetoAtual);
				}

				if (local.classList.contains('quarta')) {
					let anterior = document.querySelector('.primeira').textContent;
					let complementar = funcaoComplementar(anterior);
					if (objetoAtual.textContent === complementar)
						local.appendChild(objetoAtual);
				}			
			}

			let resultadoPersonalidade = verificaPersonalidade();
			if (resultadoPersonalidade !== 'Inexistente') {
				console.log(resultadoPersonalidade);
				document.querySelector('#res-personalidade').textContent = resultadoPersonalidade.personalidade;
				document.querySelector('#res-energia').textContent = resultadoPersonalidade.energia;
				document.querySelector('#res-informacao').textContent = resultadoPersonalidade.informacao;
				document.querySelector('#res-decisao').textContent = resultadoPersonalidade.decisao;
				document.querySelector('#res-viver').textContent = resultadoPersonalidade.viver;
				document.querySelector('#res-comunicacao').textContent = resultadoPersonalidade.comunicacao;
				document.querySelector('#res-raciocinio').textContent = resultadoPersonalidade.raciocinio;
				document.querySelector('#res-temperamento').textContent = resultadoPersonalidade.temperamento;
				document.querySelector('#res-loop').textContent = `${resultadoPersonalidade.funcoes[0]}-${resultadoPersonalidade.loop}`;
				document.querySelector('#res-grip').textContent = resultadoPersonalidade.grip;
			}
		} else {
			local.appendChild(objetoAtual);
		}

		const compativel = verificaCompatibilidade([... objetoAtual.classList], [... local.classList]);
		if (compativel && !local.classList.contains('personalidade')) {
			objetoAtual.style.border = '1px solid var(--quinta-cor)';
		}
		verificaConjuntoObjetos();
	});
});

// Menu

let menuAtivo = false;
toggleMenu.addEventListener('click', () => {
	if (!menuAtivo) {
		document.querySelector('nav ul').style.display = 'flex';
		menuAtivo = true;
	} else {
		document.querySelector('nav ul').style.display = 'none';
		menuAtivo = false;
	}
});

let a = document.querySelectorAll('a');
a.forEach(link => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		console.log(link.getAttribute('href'));
		const alvo = document.querySelector(link.getAttribute('href')); // substitua com o id ou seletor do elemento desejado
		const posicaoAlvo = alvo.getBoundingClientRect().top;
		const posicaoAtual = window.scrollY;
		const posicaoScroll = posicaoAtual + posicaoAlvo - 50;
		window.scrollTo({
			top: posicaoScroll,
			behavior: 'smooth'
		});
	});
});