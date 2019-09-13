import linkedListNode from './LinkedListNode';
import Comparator from '../Comparator/comparator';

export default class LinkedList {
    constructor(comparatorFunction) {
        this.head = null;
        this.tail = null;
        this.compare = new Comparator(comparatorFunction);
    }

    // Make a node to be a head
    prepend(value){
        var newNode = new linkedListNode(value, this.head);
        this.head = newNode;
        if(!this.tail){
            this.tail = newNode;
        }
        return this;
    }

    // them 1 phan tu vao cuoi linkedlist
    append(value){
        var newNode = new linkedListNode(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }

    delete(value){
        if(!this.head){
            return null;
        }
        let deleteNode = null;
        
        //if deleteNode is head
        while(this.head && this.compare.equal(this.head.value, value)){
            deleteNode = this.head;
            this.head = this.head.next;
        }
        // if deleteNode is tail
        while(this.tail && this.compare.equal(this.tail.value, value)){
            deleteNode = this.tail;
        }
        // another
        let currentNode = this.head;
        while(currentNode !== null){
            while(currentNode.next){
                if(this.compare.equal(currentNode.next.value, value)){
                    deleteNode = currentNode.next;
                    currentNode.next=  currentNode.next.next;
                }
                else{
                    currentNode = currentNode.next;
                }
            }
        }
        return deleteNode;
    }

    find(value){
        let currentNode = this.head;
        while(currentNode != null){
            if(currentNode.value = value){
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }

    deleteTail(){
        let deleteTail = this.tail;
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
            return deleteTail;
        }
        let currentNode = this.head;
        while(currentNode.next){
            if(!currentNode.next.next){
                currentNode.next = null;
            }
            else{
                currentNode = currentNode.next;
            }
        }
        this.tail = currentNode;
        return deleteTail;
    }

    deleteHead(){
        if(!this.head){
            return null;
        }
        var deleteHead = this.head;
        if(this.head.next){
            this.head = this.head.next;
        }
        else{
            this.head = null;
            this.tail = null;
        }
        return deleteHead;
    }

    reverse(){
        let currentNode = this.head;
        let preNode = null;
        let nextNode = null;
        while(currentNode){
            nextNode = currentNode.next;
            currentNode.next = preNode;
            preNode = currentNode;
            currentNode = nextNode;
        }
        this.tail = this.head;
        this.head = preNode;
        return this;
    }

    fromArray(values) {
        values.forEach(value => this.append(value));
        return this;
    }

    toArray() {
        const nodes = [];
    
        let currentNode = this.head;
        while (currentNode) {
          nodes.push(currentNode);
          currentNode = currentNode.next;
        }
    
        return nodes;
    }
    //toString
    toString(callback){
        return this.toArray().map(node => node.toString(callback)).toString();
    }
}