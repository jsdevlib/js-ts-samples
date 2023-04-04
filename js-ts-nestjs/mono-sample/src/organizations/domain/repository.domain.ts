import { IRepository } from 'src/shared/domain';
import { Organization } from './organization.domain';

export interface IOrganizationRepository extends IRepository<Organization> {
  block(id: string): Promise<void>;
  exists(name: string): Promise<boolean>;
}
