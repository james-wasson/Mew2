
class MewError extends Error {
    constructor(message) {
        super(message);
        this.name = "MewError";
    }
}

export {
    MewError
}
