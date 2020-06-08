import { getRepository, Repository } from 'typeorm';

import IOrdersRepository from '@modules/orders/repositories/IOrdersRepository';
import ICreateOrderDTO from '@modules/orders/dtos/ICreateOrderDTO';
import Order from '../entities/Order';
import OrdersProducts from '../entities/OrdersProducts';

class OrdersRepository implements IOrdersRepository {
  private ormRepository: Repository<Order>;

  constructor() {
    this.ormRepository = getRepository(Order);
  }

  public async create({ customer, products }: ICreateOrderDTO): Promise<Order> {
    const order_products: OrdersProducts[] = [];
    products.forEach(product => {
      order_products.push({
        product_id: product.product_id,
        price: product.price,
        quantity: product.quantity,
      });
    });
    const order = this.ormRepository.create({ customer, order_products });

    await this.ormRepository.save(order);

    return order;
  }

  public async findById(id: string): Promise<Order | undefined> {
    const order = await this.ormRepository.findOne({
      where: { id },
      relations: ['customer', 'order_products'],
    });

    return order;
  }
}

export default OrdersRepository;
