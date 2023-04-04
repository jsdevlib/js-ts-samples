import { Criteria } from '../models';
import { Nullable } from './nullable.domain';

export interface IRepository<T> {
  getAll(criteria: Criteria): Promise<Array<T>>;
  getById(id: string): Promise<Nullable<T>>;
  insert(item: T): Promise<void>;
  save(id: string, item: T): Promise<void>;
  delete(id: string): Promise<void>;
}
