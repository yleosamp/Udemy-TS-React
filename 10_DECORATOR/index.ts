function createdDate(data: Function) {
  data.prototype.createdAt = new Date()
}

@createdDate
class User {
  name
  password
  createdAt?: Date

  constructor(name: string, password: number) {
    this.name = name
    this.password = password
  }
}

const usuario = new User("Leonardo", 123)
console.log(usuario)
console.log(usuario.createdAt)