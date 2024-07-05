//oops : abstraction

class Add
{
 #a;
 #b;
 #c;   
 setData()
 {
  this.#a=10;
  this.#b=20;
 }
 addData()
 {
  this.#c=this.#a+this.#b;    
 }
 #showData()
 {
  console.log("a = "+this.#a);
  console.log("b = "+this.#b);
  console.log("add = "+this.#c);
 }
}


var obj = new Add();
obj.setData();
obj.addData();
obj.showData();

//Error
//console.log(obj.#a);
//obj.#a=100;