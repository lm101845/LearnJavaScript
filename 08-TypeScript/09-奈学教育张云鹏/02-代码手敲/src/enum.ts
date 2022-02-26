enum ErrorCode {
    Success = 200,
    NotFoundError = 404,
    ServerError = 500,
    UnauthorizedError = 401,
    OtherError = -1
}
function getList(type: string): ErrorCode {
    if (type == 'Success') {
        return ErrorCode.Success
    } else if (type == 'NotFoundError') {
        return ErrorCode.NotFoundError
    } else if (type == 'ServerError') {
        return ErrorCode.ServerError
    } else if (type == 'UnauthorizedError') {
        return ErrorCode.UnauthorizedError
    } else {
        return ErrorCode.OtherError
    }
}
let res1 = getList('Success')
let res2 = getList('NotFoundError')
let res3 = getList('ServerError')
let res4 = getList('UnauthorizedError')
let res5 = getList('Other')
console.log(res1, res2, res3, res4, res5)
