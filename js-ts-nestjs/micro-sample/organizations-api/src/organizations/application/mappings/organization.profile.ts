import {
  createMap,
  forMember,
  mapFrom,
  Mapper,
  MappingProfile,
} from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';

import { Organization as OrganizationDomain } from 'src/organizations/domain';
import { Organization as OrganizationTable } from 'src/organizations/infrastructure';
import { OrganizationInfoDto } from '../dtos/info.dto';

@Injectable()
export class OrganizationProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  get profile(): MappingProfile {
    return (mapper) => {
      createMap(
        mapper,
        OrganizationTable,
        OrganizationInfoDto,
        forMember(
          (p) => p.id,
          mapFrom((d) => d.id),
        ),
        forMember(
          (p) => p.name,
          mapFrom((d) => d.name),
        ),
        forMember(
          (p) => p.status,
          mapFrom((d) => {
            switch (d.status) {
              case 0:
                return 'Inactive';
              default:
                return 'Active';
            }
          }),
        ),
      );

      createMap(mapper, OrganizationDomain, OrganizationInfoDto);
    };
  }
}
