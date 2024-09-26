import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Subdivision } from "../models/subdivision.model";

@Injectable({
  providedIn: "root",
})
export class SubdivisionService {
  private apiUrl = "http://localhost:3000/v1/subdivisions";

  constructor(private http: HttpClient) {}

  getSubdivisions(): Observable<Subdivision[]> {
    return this.http
      .get<{ subdivisions: Subdivision[] }>(this.apiUrl)
      .pipe(map((response) => response.subdivisions));
  }
}
