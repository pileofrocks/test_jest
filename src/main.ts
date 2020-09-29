export function calc(x: any) {
 return x < 5 ? 1 : 3;
}
export function foo(b: any) {
 let a = calc(b);
 if (a==2) {
  // flow will flag this as dead code based on cfg traversal
 }
}
// if this line is included this is "not a module"
// foo(5);
