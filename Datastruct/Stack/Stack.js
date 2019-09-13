import LinkedList from '../LinkedList/LinkedList';
export default class Stack {
    constructor(){
        this.linkedList = new LinkedList();
    }
    isEmty(){
        return !this.linkedList.head;
    }
    peek(){
        if(this.isEmty()){
            return null;
        }
        return this.linkedList.head.value;
    }
    push(value){
        return this.linkedList.prepend(value);
    }
    pop(value){
        let pop = this.linkedList.deleteHead();
        return pop ? pop.value : null;
    }
    toArray(){
        return this.linkedList.toArray().map(linkedListNode => linkedListNode.value);
    }
    toString(callback){
        return this.linkedList.toString(callback);
    }

}