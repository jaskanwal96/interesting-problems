class Node {
	// constructor
	constructor(element) {
		this.element = element;
		this.next = null
	}
}
// linkedlist class
class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	// adds an element at the end
	// of list
	add(element) {
		// creates a new node
		var node = new Node(element);

		// to store current node
		var current;

		// if list is Empty add the
		// element and make it head
		if (this.head == null)
			this.head = node;
		else {
			current = this.head;

			// iterate to the end of the
			// list
			while (current.next) {
				current = current.next;
			}

			// add node
			current.next = node;
		}
		this.size++;
	}

	// insert element at the position index
	// of the list
	insertAt(element, index) {
		if (index < 0 || index > this.size)
			return console.log("Please enter a valid index.");
		else {
			// creates a new node
			var node = new Node(element);
			var curr, prev;

			curr = this.head;

			// add the element to the
			// first index
			if (index == 0) {
				node.next = this.head;
				this.head = node;
			} else {
				curr = this.head;
				var it = 0;

				// iterate over the list to find
				// the position to insert
				while (it < index) {
					it++;
					prev = curr;
					curr = curr.next;
				}

				// adding an element
				node.next = curr;
				prev.next = node;
			}
			this.size++;
		}
	}

	// removes an element from the
	// specified location
	removeFrom(index) {
		if (index < 0 || index >= this.size)
			return console.log("Please Enter a valid index");
		else {
			var curr, prev, it = 0;
			curr = this.head;
			prev = curr;

			// deleting first element
			if (index === 0) {
				this.head = curr.next;
			} else {
				// iterate over the list to the
				// position to removce an element
				while (it < index) {
					it++;
					prev = curr;
					curr = curr.next;
				}

				// remove the element
				prev.next = curr.next;
			}
			this.size--;

			// return the remove element
			return curr.element;
		}
	}

	// removes a given element from the
	// list
	removeElement(element) {
		var current = this.head;
		var prev = null;

		// iterate over the list
		while (current != null) {
			// comparing element with current
			// element if found then remove the
			// and return true
			if (current.element === element) {
				if (prev == null) {
					this.head = current.next;
				} else {
					prev.next = current.next;
				}
				this.size--;
				return current.element;
			}
			prev = current;
			current = current.next;
		}
		return -1;
	}


	// finds the index of element
	indexOf(element) {
		var count = 0;
		var current = this.head;

		// iterae over the list
		while (current != null) {
			// compare each element of the list
			// with given element
			if (current.element === element)
				return count;
			count++;
			current = current.next;
		}

		// not found
		return -1;
	}

	// checks the list for empty
	isEmpty() {
		return this.size == 0;
	}

	// gives the size of the list
	size_of_list() {
		console.log(this.size);
	}


	// prints the list items
	printList() {
		var curr = this.head;
		var str = "";
		while (curr) {
			str += curr.element + " ";
			curr = curr.next;
		}
		console.log(str);
	}

    // 10 <- 20 <- 30 <- 40 <- 50 -> null
    //                        rest
    reverseUtil(head) {
        if(head.next === null || head === null) {return head;}
        const rest = this.reverseUtil(head.next);
        console.log(rest);
        head.next.next = head;
        head.next = null;
        return rest;
    }

    reverse()
    {
        this.head = this.reverseUtil(this.head);
    }

    FindMaxSum(arr, n)
    { 
        if (n <= 0) return 0;
        const odds = n <= 1 ? 0 : parseInt(arr[n - 1]) + parseInt(this.FindMaxSum(arr, n - 2));
        const evens = n <= 2 ? 0 : parseInt(arr[n - 2]) + parseInt(this.FindMaxSum(arr, n - 3));
        console.log(odds, evens, n);
        return Math.max(odds, evens);
    }

	isSubset(arr, sum, n) {
		console.log(sum);
        if (sum === 0 || n === 0) {
            return true;
        }
        if(arr[n - 1] < sum) {
            return this.isSubset(arr, sum - arr[n - 1], n - 1) || this.isSubset(arr, sum, n - 1);
        }
        return this.isSubset(arr, sum, n - 1);
    }
    
    equalPartition(arr, n)
    {
        let sum = arr.reduce((prev, curr) => prev + curr);
        if(sum % 2 !== 0) {
            return false;
        }
        else {
            sum = sum / 2;
            return this.isSubset(arr, sum, n);
        }
        
    }

}

// creating an object for the
// Linkedlist class
var ll = new LinkedList();

// testing isEmpty on an empty list
// returns true

// ll.add(10);
// ll.add(20);
// ll.add(30);
// ll.add(40);
// ll.add(50);


// ll.insertAt(60, 2);

// ll.reverse();
// ll.printList();

res = ll.equalPartition([1, 5, 11, 5], 4);
console.log(res);