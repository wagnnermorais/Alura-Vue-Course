export default class Service {
  constructor(resource) {
    this._resource = resource("v1/fotos{/id}");
  }

  cadastra(foto) {
    if (foto._id) {
      return this._resource.update({ id: foto._id }, foto);
    }
    return this._resource.save(foto);
  }

  lista() {
    return this._resource.query().then(
      (res) => res.json(),
      (err) => {
        console.log(err);
        throw new Error("Não foi possível obter as fotos. Tente mais tarde!");
      }
    );
  }

  apaga(id) {
    return this._resource.delete({ id }).then(null, (err) => {
      console.log(err);
      throw new Error("Não foi possível remover a foto.");
    });
  }

  busca(id) {
    return this._resource.get({ id }).then((res) => res.json());
  }
}
