
 // Definition for singly-linked list.
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
}

/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/
var addTwoNumbers = function(l1, l2) {
  let check = new ListNode();
  let check1 = check;
  let sum = 0, rest = 0;

  while (l1 || l2 || rest) {
      sum = rest;

      if (l1) {
          sum += l1.val;
          l1 = l1.next;
      }

      if (l2) {
          sum += l2.val;
          l2 = l2.next;
      }

      rest = Math.floor(sum / 10);
      check.next = new ListNode(sum % 10);
      check = check.next;
  }

  return check1.next; 
};