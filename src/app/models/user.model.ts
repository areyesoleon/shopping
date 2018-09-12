export class User {
  constructor(
    public name?: string,
    public email?: string,
    public password?: string,
    public state?: boolean,
    public _id?: string,
    public remember?: boolean
  ) {}
}
