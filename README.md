# LOX_EVM Engine Command-Line Interface (CLI)


## Prerequisites

- Node.js (v14+)

## Installation

```shell
npm install -g tanya-evm-cli
```

## Usage

See https://github.com/lox_evm-is-lox/lox_evm-engine#usage for usage examples.

### Key Management

The CLI will load the following local keys by default, if found:

- `$HOME/.lox-credentials/*/*.json`: credentials stored by the lox CLI

- `$HOME/.lox/validator_key.json`: the local `loxcore` validator key
  (for the `test.lox` master account)

## Reference

- [`lox_evm help`](#lox_evm-help)
- [`lox_evm install`](#lox_evm-install)
- [`lox_evm init`](#lox_evm-init)
- [`lox_evm get-version`](#lox_evm-get-version)
- [`lox_evm get-owner`](#lox_evm-get-owner)
- [`lox_evm get-bridge-prover`](#lox_evm-get-bridge-prover)
- [`lox_evm get-chain-id`](#lox_evm-get-chain-id)
- [`lox_evm get-upgrade-index`](#lox_evm-get-upgrade-index)
- [`lox_evm stage-upgrade`](#lox_evm-stage-upgrade)
- [`lox_evm deploy-upgrade`](#lox_evm-deploy-upgrade)
- [`lox_evm deploy-code`](#lox_evm-deploy-code)
- [`lox_evm call`](#lox_evm-call)
- [`lox_evm meta-call`](#lox_evm-meta-call)
- [`lox_evm view`](#lox_evm-view)
- [`lox_evm get-code`](#lox_evm-get-code)
- [`lox_evm get-balance`](#lox_evm-get-balance)
- [`lox_evm get-nonce`](#lox_evm-get-nonce)
- [`lox_evm get-storage-at`](#lox_evm-get-storage-at)
- [`lox_evm begin-chain`](#lox_evm-begin-chain)
- [`lox_evm begin-block`](#lox_evm-begin-block)
- [`lox_evm dump-storage`](#lox_evm-dump-storage)
- [`lox_evm encode-address`](#lox_evm-encode-address)
- [`lox_evm encode-hash`](#lox_evm-encode-hash)

### `lox_evm help`

```console
$ lox_evm help
Usage: lox_evm [options] [command]

Options:
  -d, --debug                                    enable debug output
  -v, --verbose                                  enable verbose output
  --network <network>                            specify lox network ID (default: "local")
  --endpoint <url>                               specify lox RPC endpoint URL
  --engine <account>                             specify Aurora Engine account ID
  --signer <account>                             specify signer account ID (default: "test.lox")
  -h, --help                                     display help for command

Commands:
  install|upgrade [options] <contract>
  initialize|init [options]
  get-version
  get-owner
  get-bridge-prover
  get-chain-id|get-chain
  get-upgrade-index
  stage-upgrade
  deploy-upgrade
  deploy-code|deploy <bytecode>
  call <address> <input>
  meta-call
  view [options] <address> <input>
  get-code <address>
  get-balance <address>
  get-nonce <address>
  get-storage-at|get-storage <address> <key>
  begin-chain <id>
  begin-block <hash>
  dump-storage
  encode-address <account>
  encode-hash <base58>
  help [command]                              display help for command
```

### `lox_evm install`

```console
$ lox_evm install -h
Usage: lox_evm install|upgrade [options] <contract>

Options:
  --chain <id>               specify EVM chain ID (default: "0")
  --owner <account>          specify owner account ID (default: "")
  --bridge-prover <account>  specify bridge prover account ID (default: "")
  --upgrade-delay <blocks>   specify upgrade delay block count (default: "0")
  -h, --help                 display help for command
```

### `lox_evm init`

```console
$ lox_evm init -h
Usage: lox_evm initialize|init [options]

Options:
  --chain <id>               specify EVM chain ID (default: "0")
  --owner <account>          specify owner account ID (default: "")
  --bridge-prover <account>  specify bridge prover account ID (default: "")
  --upgrade-delay <blocks>   specify upgrade delay block count (default: "0")
  -h, --help                 display help for command
```

### `lox_evm get-version`

```console
$ lox_evm get-version -h
Usage: lox_evm get-version|get_version [options]

Options:
  -h, --help  display help for command
```

### `lox_evm get-owner`

```console
$ lox_evm get-owner -h
Usage: lox_evm get-owner|get_owner [options]

Options:
  -h, --help  display help for command
```

### `lox_evm get-bridge-prover`

```console
$ lox_evm get-bridge-prover -h
Usage: lox_evm get-bridge-prover|get_bridge_prover [options]

Options:
  -h, --help  display help for command
```

### `lox_evm get-chain-id`

```console
$ lox_evm get-chain-id -h
Usage: lox_evm get-chain-id|get_chain_id [options]

Options:
  -h, --help  display help for command
```

### `lox_evm get-upgrade-index`

```console
$ lox_evm get-upgrade-index -h
Usage: lox_evm get-upgrade-index|get_upgrade_index [options]

Options:
  -h, --help  display help for command
```

### `lox_evm stage-upgrade`

```console
$ lox_evm stage-upgrade -h
Usage: lox_evm stage-upgrade|stage_upgrade [options]

Options:
  -h, --help  display help for command
```

### `lox_evm deploy-upgrade`

```console
$ lox_evm deploy-upgrade -h
Usage: lox_evm deploy-upgrade|deploy_upgrade [options]

Options:
  -h, --help  display help for command
```

### `lox_evm deploy-code`

```console
$ lox_evm deploy-code -h
Usage: lox_evm deploy-code|deploy [options] <bytecode>

Options:
  -h, --help  display help for command
```

### `lox_evm call`

```console
$ lox_evm call -h
Usage: lox_evm call [options] <address> <input>

Options:
  -h, --help  display help for command
```

### `lox_evm meta-call`

```console
$ lox_evm meta-call -h
Usage: lox_evm meta-call|meta_call [options]

Options:
  -h, --help  display help for command
```

### `lox_evm view`

```console
$ lox_evm view -h
Usage: lox_evm view [options] <address> <input>

Options:
  --sender <address>  specify the sender address (default:
                      "0x0000000000000000000000000000000000000000")
  --amount <value>    attach an ETH amount (default: "0")
  -h, --help          display help for command
```

### `lox_evm get-code`

```console
$ lox_evm get-code -h
Usage: lox_evm get-code|get_code [options] <address>

Options:
  -h, --help  display help for command
```

### `lox_evm get-balance`

```console
$ lox_evm get-balance -h
Usage: lox_evm get-balance|get_balance [options] <address>

Options:
  -h, --help  display help for command
```

### `lox_evm get-nonce`

```console
$ lox_evm get-nonce -h
Usage: lox_evm get-nonce|get_nonce [options] <address>

Options:
  -h, --help  display help for command
```

### `lox_evm get-storage-at`

```console
$ lox_evm get-storage-at -h
Usage: lox_evm get-storage-at|get_storage_at [options] <address> <key>

Options:
  -h, --help  display help for command
```

### `lox_evm begin-chain`

```console
$ lox_evm begin-chain -h
Usage: lox_evm begin-chain|begin_chain [options] <id>

Options:
  -h, --help  display help for command
```

### `lox_evm begin-block`

```console
$ lox_evm begin-block -h
Usage: lox_evm begin-block|begin_block [options] <hash>

Options:
  -h, --help  display help for command
```

### `lox_evm dump-storage`

```console
$ lox_evm dump-storage -h
Usage: lox_evm dump-storage|dump_storage [options]

Options:
  -h, --help  display help for command
```

### `lox_evm encode-address`

```console
$ lox_evm encode-address -h
Usage: lox_evm encode-address [options] <account>

Options:
  -h, --help  display help for command
```

### `lox_evm encode-hash`

```console
$ lox_evm encode-hash -h
Usage: lox_evm encode-hash [options] <base58>

Options:
  -h, --help  display help for command
```

## Development

### Local development

```sh
alias lox_evm='node lib/lox_evm.js'
export lox_URL=http://localhost:3030
```
