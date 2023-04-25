import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { IClient } from '../../models/IClient';
import Swal from 'sweetalert2';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-insert-user',
  templateUrl: './insert-user.component.html',
  styleUrls: ['./insert-user.component.scss']
})
export class InsertUserComponent implements OnInit {
  clientForm: FormGroup = new FormGroup({
    id: new FormControl(0, []),
    razaoSocial: new FormControl(null, [Validators.required, Validators.minLength(10)]),
    nomeFantasia: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    cpfCnpj: new FormControl(null, [Validators.required, Validators.minLength(11)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    ddd: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    telefone: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    nmUsuarioCadastro: new FormControl(null, []),
    dtCadastro: new FormControl(null, []),
    nmUsuarioAlteracao: new FormControl(null, []),
    dtAlteracao: new FormControl(null, []),
  });

  userId: number = 0;
  isEdit: boolean = false;

  get razaoSocial() { return this.clientForm.get('razaoSocial'); }
  get nomeFantasia() { return this.clientForm.get('nomeFantasia'); }
  get cpfCnpj() { return this.clientForm.get('cpfCnpj'); }
  get email() { return this.clientForm.get('email'); }
  get ddd() { return this.clientForm.get('ddd'); }
  get telefone() { return this.clientForm.get('telefone'); }

  constructor(public title: Title, private router: Router, public route: ActivatedRoute, private auth: AuthService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.title.setTitle('Alsofer - Editar Cliente');
        this.isEdit = true;

        this.clientForm.patchValue({
          id: params['id']
        });
        this.getClientById(params['id']);
      } else {
        this.title.setTitle('Alsofer - Criar Cliente');
      }
    });
  }

  getClientById(id: number) {
    this.auth.getClientById(id).subscribe((client: IClient) => {
      this.clientForm.patchValue({
        id: client.id,
        razaoSocial: client.razaoSocial,
        nomeFantasia: client.nomeFantasia,
        cpfCnpj: client.cpfCnpj,
        email: client.email,
        ddd: client.ddd,
        telefone: client.telefone,
        nmUsuarioCadastro: client.nmUsuarioCadastro,
        dtCadastro: client.dtCadastro,
        nmUsuarioAlteracao: this.auth.getAuthenticatedUser().nome,
        dtAlteracao: new Date()
      });
    });
  }

  editUser(client: IClient) {
    client.nmUsuarioAlteracao = this.auth.getAuthenticatedUser().nome;
    client.dtAlteracao = new Date();

    const dto = {
      cliente: client
    };

    if (this.clientForm.valid) {
      this.auth.putUser(dto).subscribe((client: any) => {
        if (client.executado) {
          Swal.fire({
            icon: 'success',
            title: 'Sucesso',
            text: 'Registro editado com sucesso na base.'
          });

          this.router.navigate(['dashboard']);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Ops',
            text: client.mensagemRetorno
          });
        }
      });
    }
  }

  registerUser(client: IClient) {
    client.nmUsuarioCadastro = this.auth.getAuthenticatedUser().nome;
    client.dtCadastro = new Date();

    const dto = {
      cliente: client
    };

    if (this.clientForm.valid) {
      this.auth.postUser(dto).subscribe((client: any) => {
        if (client.executado) {
          Swal.fire({
            icon: 'success',
            title: 'Sucesso',
            text: 'Registro inserido com sucesso na base.'
          });

          this.router.navigate(['dashboard']);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Ops',
            text: client.mensagemRetorno
          });
        }
      });
    }
  }

  onBack() {
    this.router.navigate(['dashboard']);
  }

}
