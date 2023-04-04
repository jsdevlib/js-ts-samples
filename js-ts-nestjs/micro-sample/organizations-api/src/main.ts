import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';

import { AppModule } from './app.module';
import { RabbitMQQueues } from './shared/constants';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqps://armiveit:S4CBV06WzwSUrTikZY5vS5Tn-WDPrJrx@beaver.rmq.cloudamqp.com/armiveit',
      ],
      queue: RabbitMQQueues.OrganizationQueue,
    },
  });
  await app.listen();
}
bootstrap();
