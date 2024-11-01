import { DioAccount } from "./DioAccount";

export class NewAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    };

    depositPlus = (value: number): void => {
        this.deposit(value + 10);
        console.log('Seu depósito teve um acréscimo de 10R$');
    }
}