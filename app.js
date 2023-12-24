const express = require('express');
const app = express();
const port = 3000;


app.get('/cliente/:cpf', function(req, res){
    var clientes = [
            {
                "ativo": true,
                "carteira_corporativa_nome": null,
                "documento": "618.854.413-04",
                "funcionario": false,
                "funcionario_ativo": false,
                "grande_empresa": 0,
                "id": 4,
                "nome": "Alexandre Heitor Souza",
                "nota_fiscal": 0,
                "nota_padrao": 0,
                "nota_provedor": 0,
                "nota_publico": 0,
                "orgao_publico": 0,
                "pcd": null,
                "pessoa_juridica": false
            },
            {
                "ativo": true,
                "carteira_corporativa_nome": null,
                "documento": "335.039.363-27",
                "funcionario": false,
                "funcionario_ativo": false,
                "grande_empresa": 0,
                "id": 10,
                "nome": "Alexandre Yago Oliveira",
                "nota_fiscal": 0,
                "nota_padrao": 0,
                "nota_provedor": 0,
                "nota_publico": 0,
                "orgao_publico": 0,
                "pcd": null,
                "pessoa_juridica": false
            },
            {
                "ativo": true,
                "carteira_corporativa_nome": null,
                "documento": "061.913.183-75",
                "funcionario": true,
                "funcionario_ativo": true,
                "grande_empresa": 0,
                "id": 107,
                "nome": "Igor Carolino Guedes de Sousa",
                "nota_fiscal": 0,
                "nota_padrao": 0,
                "nota_provedor": 0,
                "nota_publico": 0,
                "orgao_publico": 0,
                "pcd": null,
                "pessoa_juridica": false
            },

        ];

        function limparCPF(cpf) {
            return cpf.replace(/[.-]/g, '');
        }
        
        function encontrarClientePorDocumento() {
            documentoProcurado = limparCPF(req.params.cpf);
        
            return clientes.find(cliente => limparCPF(cliente.documento) === documentoProcurado);
        }
    
      
        var clienteEncontrado = encontrarClientePorDocumento();
        
        if (clienteEncontrado) {
            res.send(clienteEncontrado);
        } else {
            res.status(404).send("Cliente não encontrado.");
        }

});

app.get('/financeiro/sumario/:cliente_id', function(req, res){
    var data = {
        107: [
            {
            data_vencimento: "2023-01",
            revan_cliente_id: 107,
            sumario: {
            estado: 1,
            fatura_atual_aberta: false,
            fatura_em_aberto: false,
            fatura_fechada: false,
            proxima_fatura: false,
            valor: 119.34
            }
            },
            {
            data_vencimento: "2023-02",
            revan_cliente_id: 107,
            sumario: {
            estado: 1,
            fatura_atual_aberta: false,
            fatura_em_aberto: false,
            fatura_fechada: false,
            proxima_fatura: false,
            valor: 128.07
            }
            },
            {
            data_vencimento: "2023-03",
            revan_cliente_id: 107,
            sumario: {
            estado: 1,
            fatura_atual_aberta: false,
            fatura_em_aberto: false,
            fatura_fechada: false,
            proxima_fatura: false,
            valor: 128.1
            }
            },
            {
            data_vencimento: "2023-04",
            revan_cliente_id: 107,
            sumario: {
            estado: 1,
            fatura_atual_aberta: false,
            fatura_em_aberto: false,
            fatura_fechada: false,
            proxima_fatura: false,
            valor: 128.28
            }
            },
            {
            data_vencimento: "2023-05",
            revan_cliente_id: 107,
            sumario: {
            estado: 1,
            fatura_atual_aberta: false,
            fatura_em_aberto: false,
            fatura_fechada: false,
            proxima_fatura: false,
            valor: 128.27
            }
            },
            {
            data_vencimento: "2023-06",
            revan_cliente_id: 107,
            sumario: {
            estado: 1,
            fatura_atual_aberta: false,
            fatura_em_aberto: false,
            fatura_fechada: false,
            proxima_fatura: false,
            valor: 126.19
            }
            },
            {
            data_vencimento: "2023-07",
            revan_cliente_id: 107,
            sumario: {
            estado: 1,
            fatura_atual_aberta: false,
            fatura_em_aberto: false,
            fatura_fechada: false,
            proxima_fatura: false,
            valor: 126.16
            }
            },
            {
            data_vencimento: "2023-08",
            revan_cliente_id: 107,
            sumario: {
            estado: 1,
            fatura_atual_aberta: false,
            fatura_em_aberto: false,
            fatura_fechada: false,
            proxima_fatura: false,
            valor: 128.21
            }
            },
            {
            data_vencimento: "2023-09",
            revan_cliente_id: 107,
            sumario: {
            estado: 1,
            fatura_atual_aberta: false,
            fatura_em_aberto: false,
            fatura_fechada: false,
            proxima_fatura: false,
            valor: 128.29
            }
            },
            {
            data_vencimento: "2023-10",
            revan_cliente_id: 107,
            sumario: {
            estado: 1,
            fatura_atual_aberta: false,
            fatura_em_aberto: false,
            fatura_fechada: false,
            proxima_fatura: false,
            valor: 128.32
            }
            },
            {
            data_vencimento: "2023-11",
            revan_cliente_id: 107,
            sumario: {
            estado: 1,
            fatura_atual_aberta: false,
            fatura_em_aberto: false,
            fatura_fechada: false,
            proxima_fatura: false,
            valor: 128.26
            }
            },
            {
            data_vencimento: "2023-12",
            revan_cliente_id: 107,
            sumario: {
            estado: 0,
            fatura_atual_aberta: false,
            fatura_em_aberto: false,
            fatura_fechada: true,
            proxima_fatura: false,
            valor: 128.26
            }
            }
            ],
        4: [
            {
            data_vencimento: "2023-01",
            revan_cliente_id: 302,
            sumario: {
            estado: 1,
            fatura_atual_aberta: false,
            fatura_em_aberto: false,
            fatura_fechada: false,
            proxima_fatura: false,
            valor: 82.33
            }
            },
            {
            data_vencimento: "2023-02",
            revan_cliente_id: 302,
            sumario: {
            estado: 1,
            fatura_atual_aberta: false,
            fatura_em_aberto: false,
            fatura_fechada: false,
            proxima_fatura: false,
            valor: 82.3
            }
            },
            {
            data_vencimento: "2023-03",
            revan_cliente_id: 302,
            sumario: {
            estado: 1,
            fatura_atual_aberta: false,
            fatura_em_aberto: false,
            fatura_fechada: false,
            proxima_fatura: false,
            valor: 82.27
            }
            },
            {
            data_vencimento: "2023-04",
            revan_cliente_id: 302,
            sumario: {
            estado: 1,
            fatura_atual_aberta: false,
            fatura_em_aberto: false,
            fatura_fechada: false,
            proxima_fatura: false,
            valor: 82.19
            }
            },
            {
            data_vencimento: "2023-05",
            revan_cliente_id: 302,
            sumario: {
            estado: 1,
            fatura_atual_aberta: false,
            fatura_em_aberto: false,
            fatura_fechada: false,
            proxima_fatura: false,
            valor: 82.3
            }
            },
            {
            data_vencimento: "2023-06",
            revan_cliente_id: 302,
            sumario: {
            estado: 1,
            fatura_atual_aberta: false,
            fatura_em_aberto: false,
            fatura_fechada: false,
            proxima_fatura: false,
            valor: 82.26
            }
            },
            {
            data_vencimento: "2023-07",
            revan_cliente_id: 302,
            sumario: {
            estado: 1,
            fatura_atual_aberta: false,
            fatura_em_aberto: false,
            fatura_fechada: false,
            proxima_fatura: false,
            valor: 82.33
            }
            },
            {
            data_vencimento: "2023-08",
            revan_cliente_id: 302,
            sumario: {
            estado: 1,
            fatura_atual_aberta: false,
            fatura_em_aberto: false,
            fatura_fechada: false,
            proxima_fatura: false,
            valor: 82.3
            }
            },
            {
            data_vencimento: "2023-09",
            revan_cliente_id: 302,
            sumario: {
            estado: 1,
            fatura_atual_aberta: false,
            fatura_em_aberto: false,
            fatura_fechada: false,
            proxima_fatura: false,
            valor: 82.27
            }
            },
            {
            data_vencimento: "2023-10",
            revan_cliente_id: 302,
            sumario: {
            estado: 1,
            fatura_atual_aberta: false,
            fatura_em_aberto: false,
            fatura_fechada: false,
            proxima_fatura: false,
            valor: 79.99
            }
            },
            {
            data_vencimento: "2023-11",
            revan_cliente_id: 302,
            sumario: {
            estado: 1,
            fatura_atual_aberta: false,
            fatura_em_aberto: false,
            fatura_fechada: false,
            proxima_fatura: false,
            valor: 82.27
            }
            },
            {
            data_vencimento: "2023-12",
            revan_cliente_id: 302,
            sumario: {
            estado: 0,
            fatura_atual_aberta: false,
            fatura_em_aberto: false,
            fatura_fechada: true,
            proxima_fatura: false,
            valor: 82.18
            }
            }
            ],
        10: [
            {
            data_vencimento: "2023-01",
            revan_cliente_id: 1256,
            sumario: {
            estado: 1,
            fatura_atual_aberta: false,
            fatura_em_aberto: false,
            fatura_fechada: false,
            proxima_fatura: false,
            valor: 82.3
            }
            },
            {
            data_vencimento: "2023-02",
            revan_cliente_id: 1256,
            sumario: {
            estado: 1,
            fatura_atual_aberta: false,
            fatura_em_aberto: false,
            fatura_fechada: false,
            proxima_fatura: false,
            valor: 84.13
            }
            },
            {
            data_vencimento: "2023-03",
            revan_cliente_id: 1256,
            sumario: {
            estado: 1,
            fatura_atual_aberta: false,
            fatura_em_aberto: false,
            fatura_fechada: false,
            proxima_fatura: false,
            valor: 79.99
            }
            },
            {
            data_vencimento: "2023-04",
            revan_cliente_id: 1256,
            sumario: {
            estado: 1,
            fatura_atual_aberta: false,
            fatura_em_aberto: false,
            fatura_fechada: false,
            proxima_fatura: false,
            valor: 79.99
            }
            },
            {
            data_vencimento: "2023-05",
            revan_cliente_id: 1256,
            sumario: {
            estado: 1,
            fatura_atual_aberta: false,
            fatura_em_aberto: false,
            fatura_fechada: false,
            proxima_fatura: false,
            valor: 79.99
            }
            },
            {
            data_vencimento: "2023-06",
            revan_cliente_id: 1256,
            sumario: {
            estado: 1,
            fatura_atual_aberta: false,
            fatura_em_aberto: false,
            fatura_fechada: false,
            proxima_fatura: false,
            valor: 79.99
            }
            },
            {
            data_vencimento: "2023-07",
            revan_cliente_id: 1256,
            sumario: {
            estado: 1,
            fatura_atual_aberta: false,
            fatura_em_aberto: false,
            fatura_fechada: false,
            proxima_fatura: false,
            valor: 79.99
            }
            },
            {
            data_vencimento: "2023-08",
            revan_cliente_id: 1256,
            sumario: {
            estado: 1,
            fatura_atual_aberta: false,
            fatura_em_aberto: false,
            fatura_fechada: false,
            proxima_fatura: false,
            valor: 82.02
            }
            },
            {
            data_vencimento: "2023-09",
            revan_cliente_id: 1256,
            sumario: {
            estado: 1,
            fatura_atual_aberta: false,
            fatura_em_aberto: false,
            fatura_fechada: false,
            proxima_fatura: false,
            valor: 79.99
            }
            },
            {
            data_vencimento: "2023-10",
            revan_cliente_id: 1256,
            sumario: {
            estado: 1,
            fatura_atual_aberta: false,
            fatura_em_aberto: false,
            fatura_fechada: false,
            proxima_fatura: false,
            valor: 82.18
            }
            },
            {
            data_vencimento: "2023-11",
            revan_cliente_id: 1256,
            sumario: {
            estado: 1,
            fatura_atual_aberta: false,
            fatura_em_aberto: false,
            fatura_fechada: false,
            proxima_fatura: false,
            valor: 81.82
            }
            },
            {
            data_vencimento: "2023-12",
            revan_cliente_id: 1256,
            sumario: {
            estado: 1,
            fatura_atual_aberta: false,
            fatura_em_aberto: false,
            fatura_fechada: false,
            proxima_fatura: false,
            valor: 79.99
            }
            }
            ]
    }
    var clienteBuscado = data[req.params.cliente_id];
    if(clienteBuscado!= null){
        res.json(clienteBuscado);
    } else {    
        res.status(404).send('Nenhum dado foi encontrado!');
    }
});


app.listen(3000);
