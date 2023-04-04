import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { GlobalFilters } from './shared/filters';
import { GlobalIntercetors } from './shared/interceptors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(...GlobalFilters);
  app.useGlobalInterceptors(...GlobalIntercetors);
  app.useGlobalPipes(new ValidationPipe());

  buildOpenApi(app);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();

const buildOpenApi = async (app) => {
  const options = new DocumentBuilder()
    .setTitle('Challenge NESTJS Gateway API')
    .setDescription('Gateway API for Challenge NESTJS')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('/api/v1/docs', app, document, {
    swaggerOptions: {
      filter: true,
    },
  });
};
