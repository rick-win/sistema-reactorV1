export class UserFull{
    constructor(
        public userID?: number | null | undefined,
        public email?: string | null | undefined,
        public password?: string | null | undefined,
        public lastname?: string | null | undefined,
        public phone?: string | null | undefined,
        public role?: string | null | undefined,
        public name?: string | null | undefined
    ){

    }
}
