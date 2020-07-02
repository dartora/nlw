import knex from ".././database/connection";
import { Request, Response } from "express";
class PointsController {
  async index(request: Request, response: Response) {
    //cidade, uf, items (query params)
    const { city, uf, items } = request.query;
    const parsedItems = String(items)
      .split(",")
      .map((item) => Number(item.trim()));

    const points = await knex("point")
      .join("point_items", "point.id", "=", "point_items.point_id")
      .whereIn("point_items.item_id", parsedItems)
      .where("city", String(city))
      .where("uf", String(uf))
      .distinct()
      .select("point.*");

    return response.json(points);
  }
  async create(request: Request, response: Response) {
    const { name, email, latitude, longitude, city, uf, items } = request.body;

    const trx = await knex.transaction();
    const point = {
      image:
        "https://s2.glbimg.com/2yK3rTPvEDofzpusIhAgrkasz9A=/e.glbimg.com/og/ed/f/original/2019/09/30/oriontree_fairbairn_960.jpg",
      name,
      email,
      latitude,
      longitude,
      city,
      uf,
    };
    const insertedIds = await trx("point").insert(point);
    const point_id = insertedIds[0];
    const pointItems = items.map((item_id: number) => {
      return {
        item_id,
        point_id,
      };
    });
    console.log("test");
    await trx("point_items").insert(pointItems);

    await trx.commit();
    return response.json({ id: point_id, ...point });
  }
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const point = await knex("point").where("id", id).first();

    if (!point) {
      return response.status(400).json({ message: "Point not found." });
    }
    const items = await knex("items")
      .join("point_items", " items.id", "=", "point_items.item_id")
      .where("point_items.point_id", id)
      .select("items.title");
    return response.json({ point, items });
  }
}

export default PointsController;
