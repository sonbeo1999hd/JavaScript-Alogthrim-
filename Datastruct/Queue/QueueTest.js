import Queue from './Queue';
const queue = new Queue();
queue.enqueue(5);
queue.enqueue(2);
queue.enqueue(6);
console.log(queue.toString());
console.log(queue.peek());
queue.dequeue();
console.log(queue.toString());