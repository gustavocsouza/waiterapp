import { Request, Response } from "express";

import { Order } from "../../models/Order";

export async function cancelOrder(request: Request, response: Response) {
  try {
    const { orderId } = request.params;

    await Order.findByIdAndDelete(orderId);

    response.sendStatus(204);
  } catch(error) {
    console.log(error);
    response.sendStatus(500);
  }
}
