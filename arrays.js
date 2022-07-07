// const array = ["Diego", "Karen", "Oscar"];

class MyArray {
    constructor() {
      this.length = 0;
      this.data = {};
    }
    get(index) {
      return this.data[index];
    }
    push(item) {
      this.data[this.length] = item;
      this.length++;
      return this.data;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
      }
      delete(index) {
        const item = this.data[index];
        this.shiftIndex(index);
    
        return item;
      }
      shiftIndex(index) {
        for (let i = index; i < this.length - 1; i++) {
          this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
      }
  }
  
  const myArray = new MyArray();

  console.log(myArray);
  myArray.push("Jesús");
  console.log(myArray);
  myArray.push("Pedro");
  console.log(myArray);
  console.log(myArray.get(1));
  myArray.push("Juan");
  console.log(myArray);
  myArray.pop();
  console.log(myArray.data);