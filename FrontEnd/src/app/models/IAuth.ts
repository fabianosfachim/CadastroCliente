export interface IAuth {
  email: string,
  password: string
}

export interface IAuthResponse {
  data: IDataAuth,
  errors: any,
  logEventLevel: string,
  message: string,
  succeeded: boolean
}

interface IDataAuth {
  executado: boolean,
  loginModel: IAuthLogin,
  mensagemRetorno: string
}

export interface IAuthLogin {
  ativo: boolean
  dtAlteracao: Date
  dtCadastro: Date
  email: string
  id: number
  nmUsuarioAlteracao: number
  nmUsuarioCadastro: number
  nome: string
}
