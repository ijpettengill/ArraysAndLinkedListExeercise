/** Node: node for a singly linked list. */

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  /** LinkedList: chained together nodes. */
  
  class LinkedList {
    constructor(vals = []) {
      this.head = null;
      this.tail = null;
      this.length = 0;
  
      for (let val of vals) this.push(val);
    }
  
    /** push(val): add new value to end of list. */
  
    push(val) {
      const node = new Node(val);
      if (this.length === 0) {
        this.head = node;
        this.tail = node;
      }
      else if (this.length === 1) {
        this.head.next = node;
        this.tail = node;
      }
      else {
        this.tail.next = node;
        this.tail = node;
      }
      this.length += 1;
    }
  
    /** unshift(val): add new value to start of list. */
  
    unshift(val) {
      const node = new Node(val);
      if (this.length === 0) {
        this.head = node;
        this.tail = node;
      }
      else if (this.length === 1) {
        this.head = node;
        this.head.next = this.tail;
      }
      else {
        node.next = this.head;
        this.head = node;
      }
      this.length += 1;
    }
    // n > n > null
    /** pop(): return & remove last item. */
  
    pop() {
      if (this.length === 0)
        throw new Error('List length must be greater than 0');
      
      const returnedVal = this.tail.val;
  
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      }
      else {
        let n = this.head;
        while (true) {
          if (n.next === this.tail) {
            n.next = null;
            this.tail = n;
            break;
          }
          n = n.next;
        }
      }
      this.length -= 1;
      return returnedVal;
    }
  
    /** shift(): return & remove first item. */
  
    shift() {
      if (this.length === 0)
        throw new Error('List length must be greater than 0');
      const hVal = this.head.val;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      }
      else {
        this.head = this.head.next;
      }
      this.length -= 1;
      return hVal;
  }
  
    /** getAt(idx): get val at idx. */
  
    getAt(idx) {
      if (idx > this.length - 1 || idx < 0)
        throw new Error('Index out of bounds');
      let n = this.head;
      for (let i = 0; i <= idx; i++) {
        if (i === idx) {
          return n.val;
        }
        n = n.next;
      }
    }
  
    /** setAt(idx, val): set val at idx to val */
  
    setAt(idx, val) {
      if (idx > this.length - 1 || idx < 0)
        throw new Error('Index out of bounds');
      let n = this.head;
      for (let i = 0; i <= idx; i++) {
        if (i === idx) {
          n.val = val;
          return;
        }
        n = n.next;
      }
    }
  
    /** insertAt(idx, val): add node w/val before idx. */
  
    insertAt(idx, val) { 
      if (idx > this.length || idx < 0) throw new Error('Index out of bounds');
      const node = new Node(val);
      if (idx === 0) {
        this.head = node;
        this.tail = this.head;
      }
      else if (idx === this.length) {
        this.tail.next = node;
        this.tail = node;
      }
      else {
        let n = this.head;
        for (let i = 0; i < idx; i++) {
          if (i + 1 === idx) {
            const next = n.next;
            const inserted = node;
            n.next = inserted;
            inserted.next = next;
            // properly set tail
            break;
          }
          n = n.next;
        }
        
      }
      this.length += 1;
    }
  
    /** removeAt(idx): return & remove item at idx, */
  
    removeAt(idx) {
      if (idx > this.length - 1 || idx < 0)
        throw new Error('Index out of bounds');
      let deletedVal;
      if (this.length === 1) {
        deletedVal = this.head.val;
        this.head = null;
        this.tail = null;
      }
      else if (idx === 0) {
        deletedVal = this.head.val;
        this.head = this.head.next;
      }
      else {
        let n = this.head;
        for (let i = 0; i < idx; i++) {
          if (i + 1 === idx) {
            const next = n.next.next;
            deletedVal = n.next.val;
            n.next = next;
            return deletedVal;
          }
          n = n.next;
        }
      }
      this.length -= 1;
      return deletedVal;
    }
  
    /** average(): return an average of all values in the list */
  
    average() {
      if (this.length === 0) return 0;
      let sum = 0;
      let n = this.head;
      while (n) {
        sum += n.val;
        n = n.next;
      }
      return parseFloat((sum / this.length).toPrecision(5));
    }
  }
  
  module.exports = LinkedList;