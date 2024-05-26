import { Request, Response } from "express";

import { Product } from "../../models/Product";

export async function listProducts(request: Request, response: Response) {
  try {
    const products = await Product.find();

    response.json(products);
  }
  catch(error) {
    console.log(error);
    response.sendStatus(500);
  }
}
