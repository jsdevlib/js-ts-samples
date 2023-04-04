import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { RabbitMQQueues } from '../constants';

// TODO: Refactoring this with a Provider pattern,fetching the data or configuration from a table storage.
@Injectable()
export class ClientProxyApp {
  constructor(private readonly config: ConfigService) {}

  clientProxyUsers(): ClientProxy {
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [
          'amqps://armiveit:S4CBV06WzwSUrTikZY5vS5Tn-WDPrJrx@beaver.rmq.cloudamqp.com/armiveit',
        ],
        queue: RabbitMQQueues.UsersQueue,
      },
    });
  }

  clientProxyOrganizations(): ClientProxy {
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [this.config.get('AMQP_URL')],
        queue: RabbitMQQueues.OrganizationsQueue,
      },
    });
  }
}
