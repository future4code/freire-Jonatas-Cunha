import { Place } from "./Place";


class Commerce extends Place {
  constructor(
    protected comemerceQuantity: number,
    cep: string
  ) {
    super(cep)
  }

  public getcomemerceQuantity(): number {
    return this.comemerceQuantity;
  }
}

export default Commerce