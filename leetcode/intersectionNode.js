const getIntersectionNode = (headA, headB) => {
  let cache = []
  while (headA) {
    cache.push(headA)
    headA = headA.next
  }
  while (headB) {
    if (cache.includes(headB)) {
      return headB
    }
    headB = headB.next
  }
}

/* optimized solutions */
function getIntersectionNodeOpt(headA, headB) {
  let set = new Set()

  while (headA) {
    set.add(headA)
    headA = headA.next
  }

  while (headB) {
    if (set.has(headB)) {
      return headB
    }
    headB = headB.next
  }
  return null
}

function getIntersectionNodeOpt2(headA, headB) {
  if (!headA || !headB) return null
  let currA = headA
  let currB = headB
  while (currA !== currB) {
    currA = currA === null ? headB : currA.next
    currB = currB === null ? headA : currB.next
  }
  return currA
}

getIntersectionNode([4, 1, 8, 4, 5], [5, 6, 1, 8, 4, 5])