# rhobust 

Rhobust tries to address some of our societies deepest problems using Rchain, a secure, scalable and sustainable blockchain architecture.


#### Use case : company X hires Bob by signing a secure smart contract in which every bit of legal information is implemented as a **formally proven** smart contract

#### when the contract is deployed on rchain, the terms of the contract are ***automatically processed*** in real time.


- on the company's side : workload management is embedded in the contracts. secure and cost effective. 

- on the IRS' side : tax handling is embedded in the contract. say bye bye to fraud and tax evasion.

- on the employee's side : worker's rights are embedded in the contract. working time, paid vacations and salary are automatically secured and available in real time.

- any other contractors' rights embedded in the contract would be enforced in the most natural way, following the initial terms.

## Technical details

#### Rhobust uses Rchain and Rholang

- ***RChain*** is pioneering transparent and secure transactions with an ultra-fast, global scale technology platform. Cooperative governance and a sustainable economic model make RChain a public utility that can be applied to climate change, data security, digital identity, and many other challenges we are collectively facing. It' a breakthrough concurrent computational system that unshackles the blockchain.

- ***Rholang*** is a behaviorally typed, concurrent programming language, with a focus on message-passing and formally modeled by the ρ-calculus, a reflective, higher-order extension of the π-calculus. It is designed to be used to implement protocols and "smart contracts" on a general-purpose blockchain, but could be used in other settings as well.

#### Rholang, RChain's contract programming language, lets developers write for concurrency and formally verify all processes.


# Confidence is now back in everyone's hand. The world goes round again.


## install & run (mac)

```brew cask install java```

```brew install libsodium```

```brew install rchain/rchain/rnode```

```npm i```

```freshr```

```npm run deploy-contract```

```npm start localhost 40401 8080```

Navigate to the user interface in your favorite browser at localhost:8080

## roadmap

- implement MVP POC (contract, server, frontend)

- dockerize the project

- deploy rhobust v0.1 dapp on Rchain's "mainnet" blockchain

### Credits 

- @JoshyOrndorff for his gentle "Write Your First Dapp" tutorial, on which this project's initial structure is based uppon