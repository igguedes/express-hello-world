const axios = require('axios');
var express = require('express');
var app = express();

const url = 'https://novorevan.brisanet.net.br/remoto';

var config = {
    headers : {
        'Accept': '*/*',
        'Accept-Language': 'en-US,en;q=0.9',
        'Connection': 'keep-alive',
        'Cookie': 'NovoRevan=eyJhdXRoIjp7ImFkbWluaXN0cmFkb3IiOjEsImNoYXQiOltdLCJjaGF0X2hhYmlsaXRhZG8iOjAsImNoYXRfaWQiOi0xLCJjaWRhZGVfaWQiOjEsImNvZGlnb191c3VhcmlvIjoiMDIwNzYxYzAtODU5OC00MGNiLWJjNTUtZTY0MGZmNWRmZmViIiwiZGVwYXJ0YW1lbnRvX2dlcmVudGUiOjAsImRlcGFydGFtZW50b19pZCI6MTgsImRlcGFydGFtZW50b19ub21lIjoiRGVzZW52b2x2aW1lbnRvIiwiZW1haWwiOm51bGwsImVxdWlwZV9pZCI6bnVsbCwiZXJyb3JfY2hhdCI6IiIsImZ1bmNpb25hcmlvX2lkIjoxNCwiaWQiOjIwLCJpbWFnZW0iOiIyMC5wbmciLCJsb2dpbiI6IjA2MS45MTMuMTgzLTc1Iiwibm9tZSI6Iklnb3IgQ2Fyb2xpbm8gR3VlZGVzIGRlIFNvdXNhIiwib3RwX2NvbmZpZ3VyYWRvIjoxLCJvdHBfaGFiaWxpdGFkbyI6MSwicGFndWVicmlzYSI6eyJkb21pbmlvX2lkIjoxfSwicHJlZmVyZW5jaWEiOiJ7XCJ0ZW1hXCI6IFwie1xcXCJ0ZW1hXFxcIjogXFxcImJsdWVcXFwiLCBcXFwidXJsX2NhcGFcXFwiOiBcXFwiXFxcIiwgXFxcInRpcG9fbWFwYVxcXCI6IFxcXCJoeWJyaWRcXFwiLCBcXFwiZmlyc3RfbG9naW5fcmF1bWlsXFxcIjogMH1cIiwgXCJ1cmxfY2FwYVwiOiBcImh0dHBzOlwvXC93YWxscGFwZXJjYXZlLmNvbVwvd3BcL3dwMjM1NTc3OS5qcGdcIiwgXCJ0aXBvX21hcGFcIjogXCJoeWJyaWRcIiwgXCJmaXJzdF9sb2dpbl9yYXVtaWxcIjogMH0iLCJyYXVtaWwiOnsicHJlZmVyZW5jaWEiOnsiZmlyc3RfbG9naW5fcmF1bWlsIjowLCJ0ZW1hIjoie1widGVtYVwiOiBcImJsdWVcIiwgXCJ1cmxfY2FwYVwiOiBcIlwiLCBcInRpcG9fbWFwYVwiOiBcImh5YnJpZFwiLCBcImZpcnN0X2xvZ2luX3JhdW1pbFwiOiAwfSIsInRpcG9fbWFwYSI6Imh5YnJpZCIsInVybF9jYXBhIjoiaHR0cHM6XC9cL3dhbGxwYXBlcmNhdmUuY29tXC93cFwvd3AyMzU1Nzc5LmpwZyJ9fSwicmV2YW4iOnsiYnlwYXNzIjoxfSwic2V0b3JfaWQiOm51bGwsInNldG9yX25vbWUiOm51bGwsInNldG9yZXMiOlt7InNldG9yX2lkIjo4LCJzZXRvcl9ub21lIjoiU2lzdGVtYSAtIERldnMiLCJzdXBlcnZpc29yIjpmYWxzZX1dLCJzZXRvcmVzX2lkcyI6WzhdLCJzaXN0ZW1hX2VzdG9xdWUiOjEsInRlbGVmb25lIjoiODg5OTI3NjQwODIiLCJ0b2tlbiI6IjBkMzJjMTYzNGViOGI1Nzc2OWJjMGZjZmIyYmYwZjcxNGNlYmQ5YjAwNjY3Y2Y4N2Y5N2I0NGMyNGEyOGI3NmMiLCJ0b2tlbl9kYXRhX2NyaWFjYW8iOiIyNFwvMTJcLzIwMjMgMTc6MTc6MDgiLCJ2ZW5kYV9jYW5hbF9pZCI6MTB9LCJleHBpcmVzIjoxNzAzNjM3ODQ5fQ----f8114f80dbbcc3c0265ac80a1024a9f9a7891485cla',
        'Referer': 'https://novorevanh.brisanet.net.br/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'X-Auth-Brisanet': '48487864-4bdc-41a4-93d2-328f5874374e',
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"'
      }
};

function formatarCPF(cpf) {

    cpf = cpf.replace(/\D/g, '');
  
    if (cpf.length !== 11) {
      return 'CPF inválido';
    }

    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}
  
  

async function localizarCliente(cpf){
    const path = url + '/venda/clienteV2';
    const params = {
        limite: 1,
        descolcamento: 0,
        filtro: JSON.stringify({documento: formatarCPF(cpf)})
    }
    
    const response = await axios.get(path,{...config, params});
    if(response.data.total > 0){
        return {status: 200, data: response.data.data[0]};
    }
    return {status: 404, data: 'Cliente não encontrato'};
}

//TODO - Simplificar o retorno da rota
async function lerTimeLine(cliente_id) {
    const path = url + '/brisasearch/timeline/buscar';
    const params = {
        limite: 200,
        descolcamento: 0,
        identificador: 'cliente_' + cliente_id
    }
    const response = await axios.get(path,{...config, params});
    if(response.data){
        return {status: 200, data: response.data};
    }
    return {status: 404, data: 'Informações não encontradas'};
}

function normalizarDadosContrato(item, array){
    
        array.push({
            categoria: item.categoria_nome,
            endereco:  item.endereco_contrato.logradouro + ', ' + item.endereco_contrato.numero + ', ' + item.endereco_contrato.nome + ', ' + item.endereco_contrato.bairro + ', ' + item.endereco_contrato.cep + ', ' + (item.endereco_contrato.ponto_referencia_1 || '') + ', ' + (item.endereco_contrato.ponto_referencia2 || ''),
            plano_principal: item.planos.filter(function(plano){
                if(plano.principal && !plano.cancelado) return plano;
            }).map(item => item.nome),
            planos_adicionais: item.planos.filter(function(plano){
                if(!plano.principal && !plano.cancelado) return plano;
            }).map(item => item.nome),
            rota: item.rota_configuracao.rota,
            olt_id: item.rota_configuracao.olt_id,
            pon: item.rota_configuracao.pon,
            olt: item.rota_configuracao.olt_id,
            splitter_nome: item.rota_configuracao.splitter_nome,
            splitter_id: item.rota_configuracao.splitter_id,
            splitter_porta: item.rota_configuracao.splitter_porta
        });

    
}

async function lerInformacoesGeraisContratos(cliente_id) {

    const path = url + '/venda/cliente/' + cliente_id + '/contrato';
    const params = {
        filtro: JSON.stringify({cancelado: false})
    }

    
    const response = await axios.get(path, {...config, params});

    if(response.data){
        const contratos_inativos = [];
        const contratos_ativos = [];
        response.data.data.forEach(function(item){
            if(item.ativo){
                normalizarDadosContrato(item, contratos_ativos);
            } else {
                normalizarDadosContrato(item, contratos_inativos);
            }
        });
        return {
            status: 200,
            data: {
                quantidade_contratos_ativos: contratos_ativos.length,
                quantidade_contratos_inativos: contratos_inativos.length,
                contratos_ativos,
                contratos_inativos
            }   
        }
    }
    return {status: 404, data: 'Informações não encontradas'};

}

function rotaComProblema(rota){
    const rotas_com_problema = [];
    return rotas_com_problema.some(function(rota){});
}

async function buscarAnosComFatura(cliente_id) {
    const path = url + '/financeiro/cliente/' +cliente_id +'/fatura/sumario/anual';
    
    try {
        const response = await axios.get(path, config);
        if(response.data){
            return {status: 200, data: {
                anos_com_faturas: response.data.map(function(item){ return item.ano}),
                anos_com_fatura_em_aberto : response.data.filter(function(item){ if(item.status == 0) return item}).map(item => item.ano)
            }};
        }
        
    } catch(e) {
        console.log(e.message);
        return {status: 404, data: 'Informações não encontradas'};
    }
}

async function buscarMesesComFatura(cliente_id, ano){
    const path = url + '/financeiro/cliente/' + cliente_id + '/fatura/sumario';
    const params = {
        ano
    }

    const response = await axios.get(path, {...config, params});

    if(response.data){
        return {status: 200, data: {
            meses_com_faturas: response.data.map(function(item){return item.data_vencimento}),
            meses_com_faturas_em_aberto: response.data.filter(item => item.sumario.estado == 0).map(item => item.data_vencimento)
        }}
    } else {
        return {status: 404, data: 'Informações não encontradas'};
    }
}

//TODO associar faturas a endereços
async function buscarFaturasPorCompetencia(cliente_id, meses_com_fatura) {
    const path = url + '/financeiro/cliente/' + cliente_id + '/faturas';

    const ano = meses_com_fatura[0].split('-')[0];

    const faturas = [];

    for(var i=0; i<meses_com_fatura.length; i++) {
        const params = {
            data_vencimento: meses_com_fatura[i],
            fatura_em_aberto: 0
        }
        const response = await axios.get(path, {...config, params});
        var obj = {};
        obj[meses_com_fatura[i]] = response.data.detalhamento.map((function(item){
            return {
                id: item.id,
                descricao: item.descricao,
                vencimento: item.data_vencimento,
                estado: item.estado,
                valor: item.valor,
                lancamentos: item.lancamentos.map(function(item){
                    return {
                        nome: item.nome,
                        tipo: item.tipo_lancamento == "d"? "Débito" : "Crédito",
                        valor: item.valor
                    }
                })
            }
        }));

        faturas.push(obj);
    }

    if(faturas.length){
        const objRetorno = {};
        objRetorno[ano] = faturas;
        return {status: 200, data: objRetorno};
    } else {
        return {status: 400, data: 'Informações não encontradas'}
    }
}

async function lerFinanceiro(cliente_id) {
    const anos_com_faturas = (await buscarAnosComFatura(cliente_id)).data;

    var meses_com_faturas = [];
    var meses_com_faturas_em_aberto = [];

    

    for(ano in anos_com_faturas.anos_com_faturas){
        const response = await buscarMesesComFatura(cliente_id, anos_com_faturas.anos_com_faturas[ano]);
        response.data.meses_com_faturas.forEach(item => meses_com_faturas.push(item));
        response.data.meses_com_faturas_em_aberto.forEach(item => meses_com_faturas_em_aberto.push(item));
    }

    const faturas = await buscarFaturasPorCompetencia(cliente_id, meses_com_faturas);

    return {
        anos_com_faturas: anos_com_faturas.anos_com_faturas,
        anos_com_fatura_em_aberto: anos_com_faturas.anos_com_fatura_em_aberto,
        meses_com_faturas,
        meses_com_faturas_em_aberto,
        faturas: faturas.data
    }
}

async function lerChamados(cliente_id) {

}


app.get('/localizar_cliente/:cpf', async function(req, res){
    var response = await localizarCliente(req.params.cpf);
    res.json(response);
});

app.get('/informacoes_gerais_contrato/:cliente_id', async function(req, res){
    var response = await lerInformacoesGeraisContratos(req.params.cliente_id);
    res.json(response);
});

app.get('/informacoes_financeiras/:cliente_id', async function(req, res){
    var response = await lerFinanceiro(req.params.cliente_id);
    res.json(response)
});

async function main() {
    const a = await buscarFaturasPorCompetencia(107, [
        '2023-01', '2023-02',
        '2023-03', '2023-04',
        '2023-05', '2023-06',
        '2023-07', '2023-08',
        '2023-09', '2023-10',
        '2023-11', '2023-12'
      ]);
    console.log(a);
    a.data['2023'].forEach(function(item){
        console.log(item)
        if(item.lancamentos){
            item.lancamentos.forEach(a => console.log(a));
        }
    }); 

}

// main();

app.listen(3000, function(){
    console.log('Servidor rodando na porta 3000');
});

