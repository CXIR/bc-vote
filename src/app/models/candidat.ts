import{ Political } from './political';

export class Candidate {

    id          : number;
    address     : string;
    name        : string;
    first       : string;
    age         : number;
    picture     : string;
    job         : string;
    slogan      : string;
    program     : string;
    programfile : string;
    description : string;
    political   : Political;
}