import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { OrganizationCreatedDomainEvent } from 'src/organizations/domain/events';

@Injectable()
export class OrganizationSagas {
  @Saga()
  dragonKilled = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(OrganizationCreatedDomainEvent),
      delay(1000),
      map((event) => {
        //TODO
        return null;
      }),
    );
  };
}
