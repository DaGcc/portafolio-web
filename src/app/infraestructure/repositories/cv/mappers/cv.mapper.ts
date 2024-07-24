import { CvEntity } from "@domain/entities/cv.entity";
import { CvModel } from "@infraestructure/models/cv.model";
import { Mapper } from "src/base/utils/mapper";

export class CvMapper extends Mapper<CvModel, CvEntity> {

    override mapFrom(param: CvModel): CvEntity {
        throw new Error("Method not implemented.");
    }
    override mapTo(param: CvEntity): CvModel {
        throw new Error("Method not implemented.");
    } 
     
}