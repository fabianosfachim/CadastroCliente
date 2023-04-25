import { IAddress } from "./IAddress"

export interface IClientResponse {
    data: IDataAuth,
    errors: any,
    logEventLevel: string,
    message: string,
    succeeded: boolean
}

interface IDataAuth {
    executado: boolean,
    cliente: IClient[],
    mensagemRetorno: string
}

export interface IClient {
    id: number,
    razaoSocial: string,
    nomeFantasia: string,
    cpfCnpj: string,
    email: string,
    ddd: string,
    telefone: string,
    nmUsuarioCadastro: string,
    dtCadastro: Date,
    nmUsuarioAlteracao: string,
    dtAlteracao: Date
}

export interface IClientTable {
    id: number,
    razaoSocial: string,
    nomeFantasia: string,
    cpfCnpj: string,
    email: string,
    ddd: string,
    telefone: string,
    addressList: IAddress[],
    nmUsuarioCadastro: string,
    dtCadastro: Date,
    nmUsuarioAlteracao: string,
    dtAlteracao: Date
}