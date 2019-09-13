import Comparator from '../Comparator/comparator';
export default class Heap {
    constructor(comparatorFunction){
        this.heapContainer = [];
        this.compare = new Comparator(comparatorFunction);
    }
    getLeftChildIndex(parentIndex){
        return (2 * parentIndex) + 1;
    }
    getRightChilIndex(parentIndex){
        return (2 * parentIndex) + 2;
    }
    getParentIndex(childIndex){
        return Math.floor((childIndex - 1) / 2)
    }
    hasParent(childIndex){
        return this.getParentIndex(childIndex) >= 0;
    }
    hasLeftChild(parentIndex){
        return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
    }
    hasRightChild(parentIndex){
        return this.getRightChilIndex(parentIndex) < this.heapContainer.length;
    }
    getLeftChild(parentIndex){
        return this.heapContainer[this.getLeftChildIndex(parentIndex)];
    }
    getRightChild(parentIndex){
        return this.heapContainer[this.getRightChilIndex(parentIndex)];
    }
    getParent(childIndex){
        return this.heapContainer[this.getParentIndex(childIndex)];
    }
    peek(){
        if(this.heapContainer.length == 0){
            return null;
        }
        return this.heapContainer[0];
    }
    isEmty(){
        return !this.heapContainer.length;
    }

    swap(elementOne, elementTwo){
        let temp = this.heapContainer[elementTwo];
        this.heapContainer[elementTwo] = this.heapContainer[elementOne];
        this.heapContainer[elementOne] = temp;
    }

    find(item, comparator = this.compare){
        const foundItem = [];
        for(let itemIndex = 0; itemIndex < this.heapContainer.length; itemIndex++){
            if(comparator.equal(item, this.heapContainer[itemIndex])){
                foundItem.push(itemIndex);
            }
        }
        return foundItem;
    }

    remove(item, comparator = this.compare){
        let numberOfItemsNeedRemove = this.find(item,comparator).length;
        for(let i = 0; i<numberOfItemsNeedRemove.length; i++){
            let indexToRemove = this.find(item, comparator).pop();
            
            // Nếu phần tử cần bỏ là phần tử cuối cùng trong heap
            if(indexToRemove == (this.heapContainer.length - 1)){
                this.heapContainer.pop();

            } else{
                // Đưa phần tử cuối cùng đến vị trí xóa
                this.heapContainer[indexToRemove] = this.heapContainer.pop();
                let parentItem = this.getParent(indexToRemove);
                if(this.hasLeftChild && (!parentItem || this.checkCorrectOrder(parentItem, this.heapContainer[indexToRemove]))){
                    this.heapifyDown(indexToRemove);
                }else{
                    this.heapifyUp(indexToRemove);
                }
            }

        }
        return this;
    }

    //Lấy ra phần tử root
    poll(){
        if(this.heapContainer.length == 0){
            return null;
        }
        if(this.heapContainer.length == 1){
            return this.heapContainer.pop();
        }
        let item = this.heapContainer[0];
        this.heapContainer[0] = this.heapContainer.pop();
        this.heapifyDown();
        return item;
    }

    add(item){
        this.heapContainer.push(item);
        this.heapifyUp();
        return this;
    }

    // Lấy ra phần tử cuối cùng của heap và 
    // kéo nó lên đúng vị trí so với cha của nó
    heapifyUp(customStartIndex){
        let currentIndex = customStartIndex || this.heapContainer.length - 1;
        while(this.hasParent(currentIndex) && !this.checkCorrectOrder(this.getParent(currentIndex), this.heapContainer[currentIndex])){
            this.swap(currentIndex, this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex);
        }

    }

    //So sánh cha với phần tử con và swap nếu sai vị trí
    //Tiếp tục thực hiện với phần tử con sau đó
    heapifyDown(customStartIndex = 0){
        let currentIndex = customStartIndex;
        let nextIndex = null;
        while(this.hasLeftChild(currentIndex)){
            if(this.hasRightChild(currentIndex) && this.checkCorrectOrder(this.getRightChild(currentIndex), this.getLeftChild(currentIndex))){
                nextIndex = this.getRightChildIndex(currentIndex);
            }else{
                nextIndex = this.getLeftChildIndex(currentIndex);
            }
            if(this.checkCorrectOrder(this.heapContainer[currentIndex], this.heapContainer[nextIndex])){
                break;
            }
            this.swap(currentIndex, nextIndex);
            currentIndex = nextIndex;
        }
    }
    toString(){
        return this.heapContainer.toString();
    }
    
    //kiểm tra các cặp phần tử sắp xếp đúng chưa
    //Với MinHeap phần tử đầu tiên luôn luôn nhỏ hơn hoặc bằng
    //Với MaxHeap phần tử đầu tiên luôn luôn lớn hơn hoặc bằng
    checkCorrectOrder(elementOne, elementTwo){
        throw new Error(`
            You have to implement heap pair comparision method
            for ${elementOne} and ${elementTwo} values.
        `);
    }
}
