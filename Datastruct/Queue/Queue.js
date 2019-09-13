import LinkedList from '../LinkedList/LinkedList';
export default class Queue {
    constructor(){
        this.linkedList = new LinkedList();
    }

    isEmty(){
        return !this.linkedList.head;
    }

    //read element at the front of the queue but not remove it
    peek(){
        if(!this.linkedList.head){
            return null;
        }
        return this.linkedList.head.value;
    }

    // add an element in the end of the queue 
    enqueue(value){
        return this.linkedList.append(value);
    }

    //remove an element in the front of the queue
    dequeue(){
        let dequeue = this.linkedList.deleteHead();
        return dequeue ? dequeue.value : null;
    }

    toString(callback){
        return this.linkedList.toString(callback);
    }
}
