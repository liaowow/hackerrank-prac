class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  let currentNode = linkedList
	while (currentNode !== null) {
		let nextNonDuplicate = currentNode.next
		while (nextNonDuplicate !== null && nextNonDuplicate.value === currentNode.value) {
			nextNonDuplicate = nextNonDuplicate.next;
		}
		currentNode.next = nextNonDuplicate
		currentNode = nextNonDuplicate
	}
  return linkedList;
}