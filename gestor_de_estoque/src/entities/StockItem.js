// lista de categorias
export const CATEGORIES = ["Jogos", "Livros", "Brinquedos", "Acessórios"];

// classe para criação do item
export default class StockItem {
  constructor({ name, description, quantity, price, category }) {
    (this.id = Math.floor(Math.random() * 100000000)),
      (this.name = name),
      (this.description = description),
      (this.quantity = +quantity),
      (this.price = +price),
      (this.category = category);
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.#validate();
  }

  // validação para item
  #validate() {
    const validName = typeof this.name === "string";
    const validDescription = typeof this.description === "string";
    const validQuantity =
      typeof this.quantity === "number" && Number.isInteger(this.quantity);
    const validPrice = typeof this.price === "number";
    const validCategory = CATEGORIES.includes(this.category);
    if (
      !(
        validName &&
        validDescription &&
        validQuantity &&
        validPrice &&
        validCategory
      )
    ) {
      throw new Error("Invalid item!");
    }
  }
}
