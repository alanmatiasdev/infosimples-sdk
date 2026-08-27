# Changelog

## [0.6.0](https://github.com/alanmatiasdev/infosimples-sdk/compare/v0.5.0...v0.6.0) (2026-08-27)


### Features

* **anp:** add baseDistribuicao, instalacoesSimp, postos and revendas endpoints ([#19](https://github.com/alanmatiasdev/infosimples-sdk/issues/19)) ([6aa9632](https://github.com/alanmatiasdev/infosimples-sdk/commit/6aa9632fc84b0bc06a11d0484677343a9b15ea3e))
* **antecedentes-criminais:** add pfEmit, pfVal, mg and sp endpoints ([#21](https://github.com/alanmatiasdev/infosimples-sdk/issues/21)) ([d248edf](https://github.com/alanmatiasdev/infosimples-sdk/commit/d248edfb6440f867c8b57882148b73b359df370d))
* **antt:** add ANTT endpoints (piso de frete, produtos perigosos, SIFAMA, RNTRC) ([#22](https://github.com/alanmatiasdev/infosimples-sdk/issues/22)) ([435d1ae](https://github.com/alanmatiasdev/infosimples-sdk/commit/435d1ae930fd8894a381c48bbd748c3a491c20a3))
* **cgu:** add cncTipo1 and cncTipo2 endpoints ([#26](https://github.com/alanmatiasdev/infosimples-sdk/issues/26)) ([b2cdc38](https://github.com/alanmatiasdev/infosimples-sdk/commit/b2cdc389e88813f651371efd0a03b729954e449f))
* **cnj:** add improbidade, mandadosPrisao, serventias and seeuProcessos endpoints ([#23](https://github.com/alanmatiasdev/infosimples-sdk/issues/23)) ([6585b70](https://github.com/alanmatiasdev/infosimples-sdk/commit/6585b70e82acf42cb93adbd4a554cf03dadbeb00))
* **correios:** add cep, completaCep, rastreamento and restricoesEntrega endpoints ([#27](https://github.com/alanmatiasdev/infosimples-sdk/issues/27)) ([8136573](https://github.com/alanmatiasdev/infosimples-sdk/commit/8136573b10f71981601d4a3f8bc805729e9fd984))
* **inpi:** add marcas, patentes and processo de registro de marca endpoints ([#28](https://github.com/alanmatiasdev/infosimples-sdk/issues/28)) ([6b956c0](https://github.com/alanmatiasdev/infosimples-sdk/commit/6b956c073030a628afb7cc61845f3ebf908efc95))
* **mpf:** add amazoniaProtege, certidaoNegativa and processos endpoints ([#24](https://github.com/alanmatiasdev/infosimples-sdk/issues/24)) ([9819183](https://github.com/alanmatiasdev/infosimples-sdk/commit/98191835b68e15f6ae153ee958f4f972dd5de1f4))
* **onu,icij:** add sancoes and offshoreLeaks endpoints ([#29](https://github.com/alanmatiasdev/infosimples-sdk/issues/29)) ([1fd2845](https://github.com/alanmatiasdev/infosimples-sdk/commit/1fd28458a5f663405961da395de7e222964c6654))
* **tcu:** add cni, cnp, consolidadaPj, inabilitados and inidoneos endpoints ([#25](https://github.com/alanmatiasdev/infosimples-sdk/issues/25)) ([2801fe5](https://github.com/alanmatiasdev/infosimples-sdk/commit/2801fe59eb8051ceda85b144d5e5c9c718dd1141))

## [0.5.0](https://github.com/alanmatiasdev/infosimples-sdk/compare/v0.4.0...v0.5.0) (2026-08-27)


### Features

* **anatel:** add celularLegal endpoint ([#13](https://github.com/alanmatiasdev/infosimples-sdk/issues/13)) ([b1eba27](https://github.com/alanmatiasdev/infosimples-sdk/commit/b1eba2700668a8881ffc593677347537e249c487))
* **anvisa:** add bularioEletronico, empresas and processo endpoints ([#16](https://github.com/alanmatiasdev/infosimples-sdk/issues/16)) ([3780219](https://github.com/alanmatiasdev/infosimples-sdk/commit/378021943997e2e5e494e50c330e003661cbbfea))
* **bcb:** add cotacoes and valoresReceber endpoints ([#14](https://github.com/alanmatiasdev/infosimples-sdk/issues/14)) ([d90e560](https://github.com/alanmatiasdev/infosimples-sdk/commit/d90e56068bd46b1ec9cdfbe258f05710d7b6a770))
* **cadastur:** add prestadores endpoint ([#17](https://github.com/alanmatiasdev/infosimples-sdk/issues/17)) ([194a24d](https://github.com/alanmatiasdev/infosimples-sdk/commit/194a24d2cee1e5fffa5341510534a00510296c2c))
* **cvm:** add participante, processoAdministrativo and sancionadores endpoints ([#15](https://github.com/alanmatiasdev/infosimples-sdk/issues/15)) ([4d4124c](https://github.com/alanmatiasdev/infosimples-sdk/commit/4d4124c30db30b3b9d76230a1e939989f4f2b123))


### Bug Fixes

* exclude CHANGELOG.md from prettier format:check [skip ci] ([506c711](https://github.com/alanmatiasdev/infosimples-sdk/commit/506c7118c1775a6f40d700d94533e92a9203fa0a))

## [0.4.0](https://github.com/alanmatiasdev/infosimples-sdk/compare/v0.3.3...v0.4.0) (2026-08-27)


### Features

* **portal-transparencia:** add missing endpoints and fix optional params ([#9](https://github.com/alanmatiasdev/infosimples-sdk/issues/9)) ([6b8a4ba](https://github.com/alanmatiasdev/infosimples-sdk/commit/6b8a4ba1c4956eba606956cd352fe68cc9f276fa))
* **receita-federal:** add missing endpoints and require birthdate on CPF lookups ([#11](https://github.com/alanmatiasdev/infosimples-sdk/issues/11)) ([f7439c0](https://github.com/alanmatiasdev/infosimples-sdk/commit/f7439c074300c08324db72b1c46890d69851da36))
* **sit:** add caepi endpoint and fix trabalhoEscravo optional params ([#7](https://github.com/alanmatiasdev/infosimples-sdk/issues/7)) ([65951a5](https://github.com/alanmatiasdev/infosimples-sdk/commit/65951a57da52c3d451a834c148736c9cac6bb1c7))


### Bug Fixes

* run prettier on receitaFederal.ts and docs/testing.md ([#12](https://github.com/alanmatiasdev/infosimples-sdk/issues/12)) ([995c014](https://github.com/alanmatiasdev/infosimples-sdk/commit/995c01431797f396d85f087555ea0d4b2cc8a5db))

## 0.3.2 (April 27, 2022)

- Fix: update .npmignore adding dist dir.

## 0.3.0 (April 08, 2022)

- Fix: ofac sancoes endpoint;
- Fix: TRF4 endpoint;
- Fix: TRF1 endpoint;
- Fix: TRT15 endpoint;
