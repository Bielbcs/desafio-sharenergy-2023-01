import { Request, Response } from "express";
import mongoose from "mongoose";
import { Clients } from "../models/clientsModel";

export default class ClientController {
  insertClient = async (req: Request, res: Response) => {
    const ObjectId = mongoose.Types.ObjectId;

    await Clients.create({_id: new ObjectId(), ...req.body});

    return res.status(201).end();
  };

  getClients = async (_req: Request, res: Response) => {
    const clients = await Clients.find().select('-__v');
    res.json(clients);
  }

  updateClients = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!await Clients.findOne({ _id: id }))
      return res.status(404).send({ error: "Cliente não encontrado" });

    await Clients.updateOne({ _id: id }, req.body);

    res.send({ message: "updated" });
  }

  destroyClients = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!await Clients.findOne({ _id: id }))
      return res.status(404).send({ error: "Cliente não encontrado" });

    await Clients.deleteOne({ _id: id });

    return res.send({ message: "deleted" });
  }
};