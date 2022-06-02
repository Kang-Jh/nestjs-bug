import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MicroserviceService } from './microservice.service';

@Controller()
export class MicroserviceController {
  constructor(private readonly microserviceService: MicroserviceService) {}

  @MessagePattern('GET_HELLO')
  getHello(): string {
    return this.microserviceService.getHello();
  }
}
