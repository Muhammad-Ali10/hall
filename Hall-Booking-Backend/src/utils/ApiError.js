
class ApiError extends Error {

    constructor(
        statuscode = 400,
        message = "Some Thing Went wrong",
        error = [],
        stack = ""

    ) {
        super(message)
        this.statuscode = statuscode,
        this.message = message
        this.error = error
        this.data = null
        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export { ApiError }