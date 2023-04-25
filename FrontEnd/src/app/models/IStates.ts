export interface IStates {
    estados: IStateObject[]
}

interface IStateObject {
    id: number,
    nomeEstado: string,
    siglaEstado: string
}