
import { CvEntity } from "@domain/entities/cv.entity";
import { Observable } from "rxjs";

export abstract class CvReporitory {
    abstract  readFileJsonCV(jsonName : string) : Observable<CvEntity>;
}