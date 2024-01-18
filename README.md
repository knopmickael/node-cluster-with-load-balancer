
# Node Cluster with Load Balancer

Este projeto demonstra a implementação de um servidor Node.js aprimorado com cluster e balanceamento de carga para melhorar o desempenho e a disponibilidade. Utiliza-se bibliotecas nativas como `cluster` e `os`, além de recursos incorporados como `process`. O projeto inclui simulação de testes de carga e geração de relatórios usando a biblioteca `autocannon`

## Como Instalar e Executar
Para instalar as dependências:
```bash
npm install
```

Para executar o servidor em modo simples:
```bash
npm run simple
```

Para executar com cluster sem LB:
```bash
npm run cluster
```

Para executar com cluster com LB:
```bash
npm run cluster-lb
```

Para realizar testes de carga, adicione `-test` para cada exemplo acima (simple-test, cluster-test, cluster-lb-test) e execute:
```bash
npm run test
```

## Funcionalidades
- Implementação de clusters para melhorar a eficiência do servidor
- Opção de ativar o balanceamento de carga
- Testes de carga automatizados com relatórios

## Relatórios
- Já existem relatórios realizados em ambiente de desenvolvimento (processador AMD Ryzen 5 5000 Series) e podem ser encontradas na pasta `benchmarks`
