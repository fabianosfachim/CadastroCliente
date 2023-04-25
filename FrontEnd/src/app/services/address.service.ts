import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IViaCep } from '../models/IViaCep';
import { IAddressDto } from '../models/IAddress';
import { IStates } from '../models/IStates';
import { IAddress } from '../models/IAddress';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  viaCepUrl: string = environment.viaCepUrl;
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAddressByViaCepService(cep: string): Observable<IViaCep> {
    return this.http.get<IViaCep>(`${this.viaCepUrl}/${cep}/json/`)
      .pipe(map((res: IViaCep) => res));
  }

  getByClientId(id: number) {
    return this.http.get<any>(`${this.apiUrl}/Endereco/ListarEndereco?id=${id}`)
      .pipe(map((res: any) => res.data.enderecos));
  }

  getByAddressAndClientId(clientId: number, Addressid: number): Observable<IAddress> {
    return this.http.get<any>(`${this.apiUrl}/Endereco/ListarEnderecoCliente?id=${Addressid}&idCliente=${clientId}`)
    .pipe(map((res: any) => res.data.objEndereco));
  }

  getAllStates(): Observable<IStates> {
    return this.http.get<any>(`${this.apiUrl}/Estado/ListarEstado`)
      .pipe(map((state: any) => state.data))
  }

  postAddress(input: IAddressDto): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Endereco/AdicionarEnderecoCliente`, input)
      .pipe(map((res: any) => res.data));
  }

  putAddress(input: IAddressDto): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Endereco/AtualizarEnderecoCliente`, input)
    .pipe(map((res: any) => res.data));
  }

  deleteAddress(id: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Endereco/ExcluirEnderecoCliente?id=${id}`, {})
    .pipe(map((res: any) => res.data));
  }
}
