
export abstract class DioAccount {
    private readonly name: string;
    private readonly accountNumber: number;
    private balance: number = 0;
    private status: boolean = true;

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    getName = (): string => {
        return this.name;
    }

    deposit = (value: number): void => {
        if(this.validateStatus()){
            this.balance += value; 
            console.log(`Você depositou ${value}R$`);
        }
    }

    withdraw = (value: number): void => {
        if(this.validateStatus() && this.balance > value){
            this.balance -= value;
            console.log(`Você sacou ${value}R$`);
        } else {
            console.log('Saldo insuficiente!');
        }
    }

    getBalance = (): number => {
        return this.balance;
    }

    setBalance = (value: number): number => {
        return this.balance = value; 
    }

    getStatus = (): boolean => {
        if(this.validateStatus()) {
            return this.status;
        }
        throw new Error('Conta invalida!');
    }

    private validateStatus = (): boolean => {
        if(this.status) {
            return this.status;
        }

        throw new Error('Conta invalida!');
    }
}