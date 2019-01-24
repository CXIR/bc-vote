import { Injectable } from '@angular/core';
import * as Web3 from 'web3';
import * as TruffleContract from 'truffle-contract';
import { Address } from 'cluster';

declare let require: any;
declare let window: any;

let tokenAbi = require('./tokenContract.json');

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  private _account: string = null;
  private _web3: any;

  private _tokenContract: any;
  private _tokenContractAddress: string = "0x14ad2fe51e127afbc464cc0dd8070699bda58c06"; // Our Election Contract address 

  constructor() { 

    if (typeof window.web3 !== 'undefined') {

      // Use MetaMask's provider
      this._web3 = new Web3(window.web3.currentProvider);

      if (this._web3.version.network !== '42') {

        alert('Please connect to the Kovan network');
      }
    } else {

      console.warn(
        'Please use dapp MetaMask plugin for chrome'
      );
    }

    this._tokenContract = this._web3.eth.contract(tokenAbi).at(this._tokenContractAddress);
  }

  private async getAccount(): Promise<string> {

    if (this._account == null) {

      this._account = await new Promise((resolve, reject) => {

        this._web3.eth.getAccounts((err, accs) => {

          if (err != null) {
            alert('There was an error fetching your accounts.');
            return;
          }
  
          if (accs.length === 0) {
            alert(
              'Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.'
            );
            return;
          }
          resolve(accs[0]);
        })
      }) as string;
  
      this._web3.eth.defaultAccount = this._account;
    }
  
    return Promise.resolve(this._account);
  }

  public async getUserBalance(): Promise<number> {

    let account = await this.getAccount();
  
    return new Promise((resolve, reject) => {

      let _web3 = this._web3;

      this._tokenContract.balanceOf.call(account, function (err, result) {

        if(err != null) {
          reject(err);
        }
  
        resolve(_web3.fromWei(result));
      });
    }) as Promise<number>;
  }

  public async vote(candidateAddress: any) : Promise<number> {

    return new Promise( (resolve, reject) => {

      this._tokenContract.methods
                         .vote(candidateAddress)
                         .call( { from : this._account }, function (error, result) {

        resolve(1);                          
      });
    }) as Promise<number>;
  }

  public async authorizeVoter (voterAddress :any) : Promise<number> {

    return new Promise( (resolve, reject) => {

      this._tokenContract.methods
                         .authorizeVoter(voterAddress)
                         .call( { from : this._account }, function (error, result) {
        
        resolve(1);
      });
    }) as Promise<number>;
  }

  public async unauthorizeVoter (voterAddress :any) : Promise<number> {

    return new Promise( (resolve, reject) => {

      this._tokenContract.methods
                         .unauthorizeVoter(voterAddress)
                         .call( { from : this._account }, function (error, result) {

        resolve(1);
      });
    }) as Promise<number>;
  }

  public async attachCandidateToList (headCandidateAddress :any,  memberCandidateAddress :any) : Promise<number> {

    return new Promise( (resolve, reject) => {

      this._tokenContract.methods
                         .attachCandidateToList(headCandidateAddress, memberCandidateAddress)
                         .call( { from : this._account }, function (error, result) {

        resolve(1);
      });
    }) as Promise<number>;
  }

  public async pushCandidateToHeadList(candidateId: any) : Promise<number> { // some issue here, contract function wait local candidate ID 

    return new Promise( (resolve, reject) => {

      this._tokenContract.methods
                         .pushCandidateToHeadList(candidateId)
                         .call( { from : this._account }, function (error, result) {

        resolve(1);
      });
    }) as Promise<number>;
  }

  public async disqualifyCandidate(candidateId: any) : Promise<number> { // some issue here, contract function wait local candidate ID

    return new Promise( (resolve, reject) => {

      this._tokenContract.methods
                         .disqualifyCandidate(candidateId)
                         .call( { from : this._account }, function (error, result) {

        resolve(1);
      });
    }) as Promise<number>;
  }

  public async isElector (voterAddress :any) : Promise<number> {

    return new Promise( (resolve, reject) => {

      this._tokenContract.methods
                         .isElector(voterAddress)
                         .call( { from : this._account }, function (error, result) {

        resolve(1);
      });
    }) as Promise<number>;
  }

  public async closeElection () : Promise<number> {

    return new Promise( (resolve, reject) => {

      this._tokenContract.methods
                         .closeElection()
                         .call( { from : this._account }, function (error, result) {

        resolve(1);
      });
    }) as Promise<number>;
  }

  public async openElection () : Promise<number> {

    return new Promise( (resolve, reject) => {

      this._tokenContract.methods
                         .openElection()
                         .call( { from : this._account }, function (error, result) {

        resolve(1);
      });
    }) as Promise<number>;
  }

  public async abstainers () : Promise<number> {

    return new Promise( (resolve, reject) => {

      this._tokenContract.methods
                         .abstainers()
                         .call( { from : this._account }, function (error, result) {
                          
        resolve(1);
      });
    }) as Promise<number>;
  }
}
