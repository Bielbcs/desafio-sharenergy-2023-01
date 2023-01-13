import { Router } from "express";
import ClientController from "../controllers/clientsController";

export const router = Router();

const clients = new ClientController();

router.post('/', clients.insertClient);

router.get('/', clients.getClients);

router.put('/:id', clients.updateClients);

router.delete('/:id', clients.destroyClients);
