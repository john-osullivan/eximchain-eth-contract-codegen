# Ethereum Smart Contract based server code generation by EximChain

Generates Server and client code based on given configuration file, contract build file(which contains abi) and output path

```
sample configuration...
{
  "version": "1.0.0",           //API version
  "schemes": ["https"],         //access schemes, for swagger
  "host": "localhost:8080",     //host, for swagger
  "basePath": "/",              //bse path, for swagger
  "contract": "/home/<my_smart_contract>/build/contracts/<MyContract>.json", //contract path
  "tags": [
    {
      "name": "admins",                         //Custom Tag, same as swagger tags
      "description": "Only admin access"        //Custom Tag Description
    }
  ],
  "api": {                                      //definition to configure the contract functions's
    "pathName": {                               //function name
      "post": {                                 //http method
        "tags": [ "admins" ]                    //tags to be added to this http method for this contract function
      }
    }
  },
  "eth": {                                      //Eth configuration
    "provider": "http://localhost:8545",        //Smart contract will interact with the provider via web3
    "default_gas": 0,                           //default gas
    "default_gasPrice": 40                      //default gas price
  }
}
```

run to generate swagger config
```node OpenAPIGenerator.js <path_to_config_file> <path_to_output_file>```

run to generate connector files which interact with smart contract
```node ETHConnectorGenerator.js <path_to_config_file> <path_to_connector_output_folder>```

copy the above generated swagger config file and download nodejs-server stub's and extract it to desired folder, say <swagger_output>

then run to override the swagger service stub files
```node SwaggerServiceGenerator.js <path_to_config_file> <relative_path from output_folder to path_to_connector_output_folder> <swagger_output>/service```


Note: refer to same output generated in `out` folder