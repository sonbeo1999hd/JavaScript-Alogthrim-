import Heap from './Heap';
export default class MinHeap extends Heap {
    checkCorrectOrder(elementOne, elementTwo){
        return this.compare.lessThanOrEqual(elementOne, elementTwo);
    }
}