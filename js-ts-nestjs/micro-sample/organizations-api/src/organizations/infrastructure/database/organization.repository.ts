import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
  Organization,
  IOrganizationRepository,
} from 'src/organizations/domain';
import { Organization as OrganizationTable } from './tables';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { Criteria } from 'src/shared/models';

export class OrganizationRepository implements IOrganizationRepository {
  constructor(
    @InjectRepository(OrganizationTable)
    private repository: Repository<OrganizationTable>,
    @InjectMapper() private mapper: Mapper,
  ) {}

  async getAll(criteria: Criteria): Promise<Organization[]> {
    const dataTable = await this.repository.find();

    return await this.mapper.mapArrayAsync(
      dataTable,
      OrganizationTable,
      Organization,
    );
  }

  async getById(id: string): Promise<Organization> {
    const dataTable = await this.repository.findOneBy({ id });

    return await this.mapper.mapAsync(
      dataTable,
      OrganizationTable,
      Organization,
    );
  }

  async exists(name: string): Promise<boolean> {
    const result = await this.repository.findOneBy({ name });

    return result ? true : false;
  }

  async block(id: string): Promise<void> {
    const dataTable = await this.repository.findOneBy({ id });

    dataTable.status = 2;

    await this.repository.save(dataTable);
  }

  async save(id: string, item: Organization): Promise<void> {
    const dataTable = await this.repository.findOneBy({ id });

    dataTable.name = item.name.value;
    dataTable.status = item.status;

    await this.repository.save(dataTable);
  }

  async insert(item: Organization): Promise<void> {
    const table = new OrganizationTable();
    table.id = item.id.value;
    table.name = item.name.value;
    table.status = item.status;

    await this.repository.save(table);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
