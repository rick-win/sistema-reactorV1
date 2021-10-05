export class User{
    constructor(
        public nombre?: string | null | undefined,
        public email?: string | null | undefined,
        public foto?: string | null | undefined,
        public rol?: string | null | undefined,
        public uid?: string | null | undefined,
    ){

    }
}