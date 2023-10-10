import { Schema, model } from "mongoose";
import { IAuthor } from "../interfaces/author.interface";

const AuthorSchema: Schema = new Schema<IAuthor>(
    {
        fullName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, require: true, minLength: 6, maxLength: 255 },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const AuthorModel = model<IAuthor>("Author", AuthorSchema);

export default AuthorModel;
