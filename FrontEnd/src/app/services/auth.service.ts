import { EventEmitter, Injectable } from '@angular/core';
import { IAuth, IAuthLogin, IAuthResponse } from '../models/IAuth';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';
import { IClient, IClientResponse, IClientTable } from '../models/IClient';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated: EventEmitter<boolean> = new EventEmitter();
  userList: EventEmitter<any[]> = new EventEmitter();

  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  auth(authDto: IAuth): Observable<IAuthResponse> {
    return this.http.post<IAuthResponse>(`${this.apiUrl}/Login/LoginSistema?email=${authDto.email}&password=${authDto.password}`, {});
  }

  getAll(): Observable<IClientTable[]> {
    return this.http.get<any>(`${this.apiUrl}/Cliente/ListarClientes`)
    .pipe(map((res: any) => (res.data.cliente)));
  }

  getClientById(id: number): Observable<IClient> {
    return this.http.get<any>(`${this.apiUrl}/Cliente/ListarDadosCliente?id=${id}`)
    .pipe(map((res: any) => (res.data.objCliente)));
  }

  getAuthenticatedUser() {
    const hasSession = localStorage.getItem('alsoferUser');

    if (hasSession) {
      const authUser: IAuthLogin = JSON.parse(hasSession);
      return authUser;
    }

    return {} as IAuthLogin;
  }

  postUser(clientDto: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Cliente/AdicionarClientes`, clientDto)
    .pipe(map((res: any) => (res.data)));
  }

  putUser(clientDto: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Cliente/AtualizarDadosCliente`, clientDto)
    .pipe(map((res: any) => (res.data)));
  }

  deleteUser(id: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Cliente/ExcluirDadosCliente?id=${id}`, {})
    .pipe(map((res: any) => (res.data)));
  }
}
