import { Place } from "./Place";


class Industry extends Place {
  constructor(
    protected machinesQuantity: number,
    cep: string
  ) {
    super(cep)
  }

  public getIndustryQuantity(): number {
    return this.machinesQuantity;
  }
}

export default Industry