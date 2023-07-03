

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="assets/nft.jpg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Full-ERC721-Deploy on EVM-Based (Polygon)</h3>

  <p align="center">
    This project demonstrates the creation of an NFT (Non-Fungible Token) contract using Hardhat, the implementation of the ERC721 contract and the steps to deploy the contract, store the asset in IPFS and mint the NFT.
    <br />
  </p>
</div>

<a name="readme-top"></a>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This project demonstrates the deployment of a full ERC721 contract on an EVM-based blockchain. It includes the necessary files and instructions to deploy the contract and interact with it.



### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- Hardhat - A development environment for Ethereum smart contracts.
- Solidity - A programming language for writing smart contracts.
- TypeScript - A statically typed superset of JavaScript.
- Ethers.js - A library for interacting with Ethereum.



<!-- GETTING STARTED -->
## Getting Started

To get started with the project, follow these steps:

### Prerequisites

Make sure you have the following software installed on your machine:

- Node.js (version 12 or higher)
- npm (Node.js package manager)

### Installation

1. Clone the repository:

```sh
git clone https://github.com/ffelipesimoes/Full-ERC721-Deployed-on-EVM-Based.git
```

2. Navigate to the project directory:

```sh
cd Full-ERC721-Deployed-on-EVM-Based
```

3. Install the project dependencies:

```sh
npm install
```

### Deployment

1. Configure your network settings in the `hardhat.config.js` file, including the network URL and account mnemonic.

2. Run the following command to compile the contracts:

```sh
npx hardhat compile
```

3. Run the deployment script to deploy the ERC721 contract:

```sh
npx hardhat run --network <NETWORK_NAME> scripts/deploy-contract.ts
```

Replace `<NETWORK_NAME>` with the name of the network you want to deploy to (e.g., `sepolia`, `mumbai`, or `mainnet`).

4. Take note of the deployed contract address displayed in the console.

### Interacting with the Contract

1. Create the `contractAddress` variable in the `.env` file with the deployed contract address.

2. Run the following command to mint a new NFT:

```sh
npx hardhat run --network <NETWORK_NAME> scripts/mint-nft.ts
```

Replace `<NETWORK_NAME>` with the name of the network you deployed to.

This script will mint a new NFT with a unique token ID and assign it to the specified recipient address.

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## License

Distributed under the MIT License. See the `LICENSE` file for more information.

## Contact

Felipe Simões - [LinkedIn](https://www.linkedin.com/in/ffelipesimoes)

Project Link: [https://github.com/ffelipesimoes/Full-ERC721-Deployed-on-EVM-Based](https://github.com/ffelipesimoes/Full-ERC721-Deployed-on-EVM-Based)


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="assets/nft.jpg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Full-ERC721-Deploy no EVM-Based (Polygon)</h3>

  <p align="center">
    Este projeto demonstra a criação de um contrato NFT (Token Não-Fungível) usando o Hardhat, a implementação do contrato ERC721 e os passos para implantar o contrato, armazenar o ativo no IPFS e criar o NFT.
    <br />
  </p>
</div>

<a name="readme-top"></a>


<!-- TABELA DE CONTEÚDO -->
<details>
  <summary>Tabela de Conteúdo</summary>
  <ol>
    <li>
      <a href="#about-the-project">Sobre o Projeto</a>
      <ul>
        <li><a href="#built-with">Desenvolvido com</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Primeiros Passos</a>
      <ul>
        <li><a href="#prerequisites">Pré-requisitos</a></li>
        <li><a href="#installation">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contribuição</a></li>
    <li><a href="#license">Licença</a></li>
    <li><a href="#contact">Contato</a></li>
  </ol>
</details>



<!-- SOBRE O PROJETO -->
## Sobre o Projeto

Este projeto demonstra a implantação de um contrato ERC721 completo em uma blockchain baseada em EVM. Ele inclui os arquivos necessários e instruções para implantar o contrato e interagir com ele.


### Desenvolvido com

Esta seção deve listar os principais frameworks/bibliotecas utilizados no projeto. Deixe os complementos/plugins para a seção de reconhecimentos. Aqui estão alguns exemplos.

- Hardhat - Um ambiente de desenvolvimento para contratos inteligentes Ethereum.
- Solidity - Uma linguagem de programação para escrever contratos inteligentes.
- TypeScript - Um superset de JavaScript com tipos estáticos.
- Ethers.js - Uma biblioteca para interagir com Ethereum.


<!-- PRIMEIROS PASSOS -->
## Primeiros Passos

Para começar com o projeto, siga estes passos:

### Pré-requisitos

Certifique-se de ter o seguinte software instalado em sua máquina:

- Node.js (versão 12 ou superior)
- npm (gerenciador de pacotes Node.js)

### Instalação

1. Clone o repositório:

```sh
git clone https://github.com/ffelipesimoes/Full-ERC721-Deployed-on-EVM-Based.git
```

Navegue até o diretório do projeto:

```sh
cd Full-ERC721-Deployed-on-EVM-Based
```

Instale as dependências do projeto:
```sh
npm install
```
### Implantação
Configure as informações da sua rede no arquivo hardhat.config.js, incluindo a URL da rede e a mnemônica da conta.

Execute o seguinte comando para compilar os contratos:
```sh
npx hardhat compile
```
Execute o script de implantação para implantar o contrato ERC721:
```sh
npx hardhat run --network <NETWORK_NAME> scripts/deploy-contract.ts
```

Substitua <NETWORK_NAME> pelo nome da rede em que deseja implantar (por exemplo, sepolia, mumbai ou mainnet).

Anote o endereço do contrato implantado exibido no console.

### Interação com o Contrato
Crie a variável contractAddress no arquivo .env com o endereço do contrato implantado.

Execute o seguinte comando para criar um novo NFT:

```sh
npx hardhat run --network <NETWORK_NAME> scripts/mint-nft.ts
```

Substitua <NETWORK_NAME> pelo nome da rede em que você implantou.

Este script criará um novo NFT com um ID de token exclusivo e o atribuirá ao endereço do destinatário especificado.

<!-- CONTRIBUTING -->
## Contribuição
Contribuições são o que tornam a comunidade open source um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer é muito apreciada.

Se você tiver uma sugestão que possa melhorar este projeto, faça um fork do repositório e crie uma pull request. Você também pode simplesmente abrir uma issue com a tag "melhoria".
Não se esqueça de dar uma estrela no projeto! Obrigado mais uma vez!

Faça um Fork do Projeto
Crie uma Branch para a sua Feature (git checkout -b feature/AmazingFeature)
Faça o Commit das suas Alterações (git commit -m 'Add some AmazingFeature')
Faça o Push para a Branch (git push origin feature/AmazingFeature)
Abra uma Pull Request

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>
Licença
Distribuído sob a Licença MIT. Veja o arquivo LICENSE para mais informações.

Contato
Felipe Simões - LinkedIn

Link do Projeto: https://github.com/ffelipesimoes/Full-ERC721-Deployed-on-EVM-Based

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>
```