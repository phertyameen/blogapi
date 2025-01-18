import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true
  }))

  // swagger configuration
  const config = new DocumentBuilder()
  .setVersion('1.0')
  .setTitle('NestJs Blog Application Api: Documentation')
  .setDescription('This documentation guides you through how the Api is setup')
  .setTermsOfService('http://termsofservice.essennce')
  .setLicense('MIT License', 'http://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt')
  .addServer('http://localhost:3000/')
  .build()

  // instanctiate a document object
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();