import { v4 as uuidv4 } from 'uuid';

export class GenerateId {
  public generate(): string {
    return uuidv4();
  }
}

export default GenerateId;