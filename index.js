const receivesAFunction = (callback) => callback();
// const returnsANamedFunction = () => receivesAFunction();
function returnsAnAnonymousFunction(){
    return function(){
        return a *b;
    }
}
function returnsANamedFunction() {
  return function namedFunction() {
  };
}