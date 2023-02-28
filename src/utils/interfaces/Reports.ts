import { ImagesType } from "@/utils/types/images";

export interface Reports {
    id: Number,
    name: String,
    day: Date,
    image: ImagesType,
    description: String
}