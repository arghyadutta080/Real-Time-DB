import { Schema, model } from "mongoose";

const DataSchema = new Schema(
    {
        name: { type: String, required: true },
        value: { type: String, required: true },
    },
    { timestamps: true }
);

export default model("datas", DataSchema);
