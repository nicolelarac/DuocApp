import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  //VAMOS A CREAR EL GRUPO DEL FORMULARIO:
  alumno = new FormGroup({
    rut : new FormControl('', [Validators.required, Validators.pattern('[0-9]{1,2}.[0-9]{3}.[0-9]{3}-[0-9kK]{1}')]),
    nom_completo: new FormControl('', [Validators.required, Validators.minLength(3)]),
    fecha_nac: new FormControl('', Validators.required),
    correoduoc: new FormControl('', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[duocuc]+.[a-z]{2,4}$')]),
    semestre: new FormControl('', [Validators.required, Validators.min(1), Validators.max(8)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(18)]),
    tipo_usuario: new FormControl('alumno')
  });

  //VAMOS A CREAR UNA VARIABLE PARA OBTENER LA LISTA DE USUARIOS DEL SERVICIO DE USUARIOS:
  //usuarios: any[] = [];
  verificar_password: string;

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
    //this.usuarios = this.usuarioService.obtenerUsuarios();
  }

  //método del formulario
  registrar(){
    if (this.alumno.controls.password.value != this.verificar_password) {
      alert('CONTRASEÑAS NO COINCIDEN!');
      return;
    }
    this.usuarioService.agregarUsuario(this.alumno.value);
    alert('ALUMNO REGISTRADO!');
    this.router.navigate(['/login']);
    //this.alumno.reset();
    //this.verificar_password = '';
  }


  
}
