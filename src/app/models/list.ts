import{ Candidate } from './candidat';

export class ElectoralList {
    
    id         : number;
    name       : string;
    head       : Candidate;
    candidates : Candidate[];
}