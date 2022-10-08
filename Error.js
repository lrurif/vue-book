let handleError = null;
module.exports = {
    foo(fn) {
        callWithErrorHandling(fn)
    },
    registerErrorHandle(fn) {
        handleError = fn;
    }
}
function callWithErrorHandling(fn) {
    try {
        fn();
    }catch(e) {
        handleError && handleError(e)
    }
}