const conect = require('../config/BD_CONECT');

class UsuarioModel {
  constructor (telefone, senha) {
    this._id = null;
    this._telefone = telefone;
    this._senha = senha;
  }
  
  get senha() {
    return this._senha;
  }
  get telefone() {
    return this._telefone;
  }
  get id() {
    return this._id;
  }
  set senha(value) {
    this._senha = value;
  }
  set telefone(value) {
    this._telefone = value;
  }
  set id(value) {
    this._id = value;
  }
  
  salvarUsuario(usuario) {
    return new Promise((resolve, reject) => {
      conect.query(`INSERT INTO usuario(telefone, senha) VALUES(?,?)`, [usuario._telefone, usuario._senha], (err, result) => {
        if (err) {
          reject(err.message);
        } else {
          resolve(result);
        }
      });
    });   
  }

  listarUsuarios(usuario) {
    return new Promise((resolve, reject) => {
      conect.query(`SELECT * FROM usuario`, (err, result) => {
        if (err) {
          reject(err.message);
        } else {
          resolve(result);
        }
      });
    });
  }

  login(usuario) {
    return new Promise((resolve, reject) => {
      conect.query(`SELECT * FROM usuario WHERE telefone = ? AND senha = ?`, [usuario.telefone, usuario.senha], (err, result) => {
        if (err) {
          reject(err.message);
        } else {
          resolve(result);
        }
      });
    });
  }

}

module.exports = UsuarioModel;




