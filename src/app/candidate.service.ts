import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Candidate } from './models/candidat';
import { ElectoralList } from './models/list';
import { Political } from './models/political';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  private _apiUrl = 'localhost:3000';

  constructor( private http: HttpClient ) { 

  }


  // GET


  getCandidates() : Observable<Candidate[]> {

    let url = this._apiUrl + '/candidates';
    return this.http
               .get<Candidate[]>(url);
  }

  getPoliticals() : Observable<Political[]> {
 
    let url = this._apiUrl + '/politicals';
    return this.http
               .get<Political[]>(url);
  }

  getElectoralLists() : Observable<ElectoralList[]> {

    let url = this._apiUrl + '/lists';
    return this.http
               .get<ElectoralList[]>(url);
  }


  // POST


  addCandidate (candidate: Candidate) : Observable<Candidate> {

    let url = this._apiUrl = '/candidate';
    return this.http
               .post<Candidate>(url, candidate, httpOptions);
  }

  addPolitical (political: Political) : Observable<Political> {

    let url = this._apiUrl = '/political';
    return this.http
               .post<Political>(url, political, httpOptions);
  }
  

  // DELETE


  deleteCandidate (candidate: Candidate | number) : Observable<Candidate> {

    const id = typeof candidate === 'number' ? candidate : candidate.id;
    let url  = this._apiUrl + '/' + id;
    return this.http
               .delete<Candidate>(url, httpOptions);
  }

  deletePolitical (political: Political | number) : Observable<Political> {

    const id = typeof political === 'number' ? political : political.id;
    let url  = this._apiUrl + '/' + id;
    return this.http
               .delete<Political>(url, httpOptions);
  }

}
