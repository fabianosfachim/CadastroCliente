import { AuthService } from './../../services/auth.service';
import { AddressService } from "./../../services/address.service";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { IViaCep } from "../../models/IViaCep";
import { IAddressDto } from "src/app/models/IAddress";
import { IStates } from 'src/app/models/IStates';
import Swal from 'sweetalert2';
import { IAddress } from '../../models/IAddress';

@Component({
  selector: "app-insert-address",
  templateUrl: "./insert-address.component.html",
  styleUrls: ["./insert-address.component.scss"],
})
export class InsertAddressComponent implements OnInit {
  addressForm: FormGroup = new FormGroup({
    id: new FormControl(0, []),
    cep: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    street: new FormControl(null, [Validators.required]),
    complement: new FormControl(null, []),
    neighborhood: new FormControl(null, [Validators.required]),
    number: new FormControl(0, [Validators.required]),
    city: new FormControl(null, [Validators.required]),
    state: new FormControl(null, [Validators.required]),
    country: new FormControl(null, [Validators.required]),
    idCliente: new FormControl(0, [Validators.required])
  });

  get cep() {
    return this.addressForm.get("cep");
  }
  get street() {
    return this.addressForm.get("street");
  }
  get complement() {
    return this.addressForm.get("complement");
  }
  get neighborhood() {
    return this.addressForm.get("neighborhood");
  }
  get number() {
    return this.addressForm.get("number");
  }
  get city() {
    return this.addressForm.get("city");
  }
  get state() {
    return this.addressForm.get("state");
  }
  get country() {
    return this.addressForm.get("country");
  }

  isEdit: boolean = false;
  stateList: any[] = [];

  constructor(
    private route: ActivatedRoute,
    public title: Title,
    private router: Router,
    private service: AddressService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.addressForm.controls["street"]?.disable();
    this.addressForm.controls["neighborhood"]?.disable();
    this.addressForm.controls["city"]?.disable();
    this.addressForm.controls["state"]?.disable();
    this.addressForm.controls["country"]?.disable();

    this.getState();

    this.route.params.subscribe((params) => {
      if (params["idcliente"] && params["id"]) {
        this.title.setTitle("Alsofer - Editar Endereço do Cliente");

        this.addressForm.controls["cep"]?.disable();

        this.isEdit = true;

        this.addressForm.patchValue({
          id: parseInt(params["id"]),
          idCliente: parseInt(params["idcliente"])
        })

        this.getAddressByClientId(params["idcliente"], params["id"]);
      } else {
        this.title.setTitle("Alsofer - Vincular Endereço do Cliente");
        this.addressForm.patchValue({
          idCliente: parseInt(params["idcliente"])
        })
      }
    });
  }

  getAddressByClientId(clientId: number, AddressId: number) {
    this.service.getByAddressAndClientId(clientId, AddressId).subscribe((res: IAddress) => {
      this.addressForm.patchValue({
        cep: res.cep,
        number: res.numeroEndereco,
        complement: res.complementoEndereco
      });

      this.getAddressByCep(res.cep);
    });
  }

  registerAddress(address: any) {
    const idEstado = this.stateList.find((s: any) => (s.siglaEstado === address.state));

    const input: IAddressDto = {
      endereco: {
        id: address.id,
        cep: address.cep,
        endereco: address.street,
        bairro: address.neighborhood,
        complementoEndereco: address.complement,
        idEstado: idEstado.id,
        numeroEndereco: address.number,
        dtCadastro: new Date(),
        nmUsuarioCadastro: this.auth.getAuthenticatedUser().nome,
        dtAlteracao: null,
        nmUsuarioAlteracao: null,
        idCliente: address.idCliente,
      }
    }

    this.service.postAddress(input).subscribe((res: any) => {

      if (res.executado) {
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
          text: res.mensagemRetorno
        });
      }
    });
  }

  editAdress(address: any) {
    const idEstado = this.stateList.find((s: any) => (s.siglaEstado === address.state));

      const input: IAddressDto = {
        endereco: {
          id: address.id,
          cep: address.cep,
          endereco: address.street,
          bairro: address.neighborhood,
          complementoEndereco: address.complement,
          idEstado: idEstado.id,
          numeroEndereco: address.number,
          dtCadastro: new Date(),
          nmUsuarioCadastro: this.auth.getAuthenticatedUser().nome,
          dtAlteracao: null,
          nmUsuarioAlteracao: null,
          idCliente: address.idCliente,
        }
      }

    this.service.putAddress(input).subscribe((res: any) => {
      if (res.executado) {
        Swal.fire({
          icon: 'success',
          title: 'Sucesso',
          text: 'Registro atualizado com sucesso na base.'
        });

        this.router.navigate(['dashboard']);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Ops',
          text: res.mensagemRetorno
        });
      }
    });
  }

  getAddressByCep(cep: string) {
    this.service.getAddressByViaCepService(cep).subscribe((res: IViaCep) => {
      if (!res.erro) {
        this.addressForm.controls["street"]?.disable();
        this.addressForm.controls["neighborhood"]?.disable();
        this.addressForm.controls["city"]?.disable();
        this.addressForm.controls["state"]?.disable();
        this.addressForm.controls["country"]?.disable();

        this.addressForm.patchValue({
          street: res.logradouro,
          neighborhood: res.bairro,
          city: res.localidade,
          state: res.uf,
          country: "Brasil",
        });
      } else {
        this.addressForm.controls["street"]?.enable();
        this.addressForm.controls["neighborhood"]?.enable();
        this.addressForm.controls["city"]?.enable();
        this.addressForm.controls["state"]?.enable();

        this.addressForm.patchValue({
          country: "Brasil",
        });
      }
    });
  }

  getState() {
    this.service.getAllStates().subscribe((res: IStates) => {
      this.stateList = res.estados;
    });
  }

  onBack() {
    this.router.navigate(["dashboard"]);
  }
}
