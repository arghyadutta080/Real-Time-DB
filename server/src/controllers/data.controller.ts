import { Request, Response } from "express";
import { getAllData, createData, updateData, deleteData } from "../services/data.service";

export const getDataHandler = async (req: Request, res: Response) => {
    try {
        const data = await getAllData();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching data", error });
    }
};

export const createDataHandler = async (req: Request, res: Response) => {
    try {
        const newData = await createData(req.body);
        res.status(201).json(newData);
    } catch (error) {
        res.status(500).json({ message: "Error creating data", error });
    }
};

export const updateDataHandler = async (req: Request, res: Response) => {
    try {
        const updatedData = await updateData(req.params.id, req.body);
        res.status(200).json(updatedData);
    } catch (error) {
        res.status(500).json({ message: "Error updating data", error });
    }
};

export const deleteDataHandler = async (req: Request, res: Response) => {
    try {
        await deleteData(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: "Error deleting data", error });
    }
};
