import {HttpParams} from "@angular/common/http";

export class RepositoryBase {

  objectToHttpParams<T extends DataObject>(data: T): HttpParams {
    let params = new HttpParams();
    for (const key in data) {
      params = params.append(key, data[key]);
    }

    return params
  }

}
interface DataObject {
  [key: string]: any;
}
