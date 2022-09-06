import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //variables necesarias para el trabajo del CRUD:
  usuarios: any[] = [
    {
      rut: '11.111.111-1',
      nom_completo: 'Satan',
      fecha_nac: '1990-03-24',
      semestre: 1,
      password: 'satan123',
      correoduoc: 'satan@duocuc.cl',
      tipo_usuario: 'administrador'
    },
    {
      rut: '11.111.111-2',
      nom_completo: 'Satan',
      fecha_nac: '1990-03-24',
      semestre: 1,
      correoduoc: 'satan1@duocuc.cl',
      password: 'satan123',
      tipo_usuario: 'alumno'
    },
    {
      rut: '11.111.111-3',
      nom_completo: 'elpepe',
      fecha_nac: '1990-03-24',
      semestre: 1,
      correoduoc: 'elpepe@duocuc.cl',
      password: 'elpepe',
      tipo_usuario: 'profesor'
    }
  ];

  constructor() { }

  //métodos del CRUD:
  agregarUsuario(usuario): boolean{
    if ( this.obtenerUsuario(usuario.rut) == undefined ) {
      this.usuarios.push(usuario);
      return true;
    }
    return false;
  }
  eliminarUsuario(rut){
    this.usuarios.forEach((usu, index) => {
      if (usu.rut == rut) {
        this.usuarios.splice(index, 1);
      }
    });
  }
  modificarUsuario(usuario){
    var index = this.usuarios.findIndex(usu => usu.rut == usuario.rut);
    this.usuarios[index] = usuario;
  }
  obtenerUsuario(rut){
    return this.usuarios.find(usuario => usuario.rut == rut);
  }
  obtenerUsuarios(){
    return this.usuarios;
  }

  //MÉTODO CUSTOMER:
  //validar rut y contraseña: método que recibe rut y password y me entrega un JSON de un usuario
  validarRutPassword(correoduoc, pass){
    return this.usuarios.find(u => u.correoduoc == correoduoc && u.password == pass);
  }

}
