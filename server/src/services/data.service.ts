import DataModel from "../models/data.model";
import { IData } from "../types/data.type";

export const getAllData = async () => {
    return await DataModel.find();
};

export const createData = async (data: IData) => {
    return await DataModel.create(data);
};

export const updateData = async (id: string, data: Partial<IData>) => {
    return await DataModel.findByIdAndUpdate(id, data, { new: true });
};

export const deleteData = async (id: string) => {
    return await DataModel.findByIdAndDelete(id);
};
