//Q2.Diff between var, const and let with code examples

/*var:The scope of a variable defined with the keyword “var” is limited to the “function” within which it is defined.
Hence, var is “function scoped”.*/

{
    var a  = 69;
    console.log(a);
} //block1

{
    a++;
    console.log(a);
}//block2

/* Since we are using "var a=69", scope of "a" is limited to the function within which it is defined. In this case it is within the global function scope */


/* let: The scope of a variable defined with the keyword “let” or “const” is limited to the “block” defined by curly braces i.e. {} .
Hence, let is block scoped*/ 

{
    let b=420;
    console.log(b);
   } //block 1
   {
     a++;
     console.log(b);
   } //block 2
   /* Since we are using "let b=420", scope of "a" is limited to block 1 and "b" is not recognized in block 2 */

/* const: The scope of a variable defined with the keyword “const” is limited to the block defined by curly braces. However if a variable is defined with keyword const, it cannot be reassigned.
const cannot be re-assigned, but it can be mutated */
{
    const PI=3.14;
    console.log(PI);
   } //block 1
   {
     console.log(PI);
   } //block 2
   /* Since we are using "const PI=3.14", scope of "PI" is limited to block 1 and "PI" is not recognized in block 2 */
