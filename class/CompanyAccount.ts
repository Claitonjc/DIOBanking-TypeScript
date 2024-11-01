import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    getLoan = (value: number): number => {
        if(this.getStatus()){
            let balance: number = this.getBalance();
            this.setBalance(balance += value);
            console.log(`Você pegou um empréstimo de ${value}R$`);
        }
        return this.getBalance();
    }
}