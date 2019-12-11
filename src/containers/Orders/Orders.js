import React, { useState, useEffect } from 'react';
import { OrdersService } from '../../services/orders';
import { Order } from '../../components/Order/Order';
import classes from './Order.module.css';

export const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      const orders = await OrdersService.get();
      setOrders(orders);
    }

    fetchOrders();
  }, []);

  return (
    <div className={classes.OrdersTitle}>
      <h1>Orders</h1>
      <div className={classes.Orders}>
        {orders.map(order => (
          <Order key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};
