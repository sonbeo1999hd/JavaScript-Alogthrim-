import Heap from './Heap';
export default class MaxHeap extends Heap {
    checkCorrectOrder(elementOne, elementTwo){
        return this.compare.greaterThanOrEqual(elementOne, elementTwo);
    }
}