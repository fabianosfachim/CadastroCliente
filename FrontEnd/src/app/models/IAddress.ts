export interface IAddressDto {
    endereco: IAddress
}

export interface IAddress {
    id: number,
    endereco: string,
    complementoEndereco: string | null,
    numeroEndereco: number,
    cep: string,
    bairro: string,
    idEstado: number,
    nmUsuarioCadastro: string,
    dtCadastro: Date,
    nmUsuarioAlteracao: string | null,
    dtAlteracao: Date | null,
    idCliente: number
}