import { IAddress } from './../../models/IAddress';
import { IStates } from './../../models/IStates';
import { AddressService } from './../../services/address.service';
import { AuthService } from './../../services/auth.service';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { IClientTable } from '../../models/IClient';
import { Observable, switchMap } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tableObject: EventEmitter<IClientTable> = new EventEmitter();

  clientList: IClientTable[] = [];
  expandSet = new Set<number>();

  constructor(private title: Title, private service: AuthService, private addressService: AddressService) { }

  ngOnInit(): void {
    this.title.setTitle('Alsofer - Dashboard');

    this.tableObject.subscribe((res: IClientTable) => {
      this.clientList.push(res);
      console.log(this.clientList)
    });

    this.getAllClients();
  }

  getAllClients() {
    this.service.getAll()
      .subscribe((res: IClientTable[]) => {
        this.clientList = res.map((client: IClientTable, i: number, arr: IClientTable[]) => {
          client.addressList = [];

          return client
        });
      });
  }

  findStateName(stateId: number): any {
    if (stateId === 1) {
      return 'SP'
    } else if (stateId === 2) {
      return 'RJ'
    } else if (stateId === 3) {
      return 'ES'
    } else {
      return 'MG'
    }
  }

  findClientAddress(id: number) {
    this.addressService.getByClientId(id).subscribe((address: any[]) => {
      this.clientList.map((client: IClientTable) => {
        if (client.id === id) {
          client.addressList = address;
        }
      });
    })
  }

  deleteUser(id: number) {
    Swal.fire({
      icon: 'warning',
      title: 'Atenção',
      text: 'Tem certeza de que deseja excluir o registro?',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteUser(id).subscribe((client: any) => {
          if (client.executado) {
            this.getAllClients();

            Swal.fire({
              icon: 'success',
              title: 'Sucesso',
              text: 'Registro removido com sucesso da base.'
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Ops',
              text: client.mensagemRetorno
            });
          }
        });;
      }
    });
  }
  
  deleteAddress(id: number, clientId: number) {
    Swal.fire({
      icon: 'warning',
      title: 'Atenção',
      text: 'Tem certeza de que deseja excluir o endereço?',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.addressService.deleteAddress(id).subscribe((address: any) => {
          if (address.executado) {
            this.findClientAddress(clientId);

            Swal.fire({
              icon: 'success',
              title: 'Sucesso',
              text: 'Registro removido com sucesso da base.'
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Ops',
              text: address.mensagemRetorno
            });
          }
        });;
      }
    });
  }

  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.findClientAddress(id);
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }
}
