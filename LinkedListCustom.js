class LinkedList {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  
    linkToNext(val) {
      const newNode = new LinkedList(val);
      newNode.next = null;
      if (this.head == null) {
          this.head = newNode;
      } else {
        let temp = this.head;
        while(temp.next != null) {
          temp = temp.next;
        }
        temp.next = newNode;
      }
    }
  
  
    
    getHead() {
      return this.head;
    }
  }
  
  
  const linkedList = new LinkedList();
  
  linkedList.linkToNext(6);
  linkedList.linkToNext(1);
  linkedList.linkToNext(2);
  linkedList.linkToNext(0);
  linkedList.linkToNext(9);
  
  const head = linkedList.getHead();
  let temp = head;
  console.log(temp);
  
  while(temp!=null) {
    console.log(temp.val);
    temp = temp.next;
  }
  