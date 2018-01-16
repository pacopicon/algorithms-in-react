function LinkedList() {
  let Node = function(el) {
    this.element = el 
    this.next = null 
    // This would make a several-item linked list into a deeply nested set of objects. == 
    // Node {
    //   element: 1,
    //   next: Node {
    //     element: 2,
    //     next: Node {
    //       element: 3,
    //       next: Node {
    //         element: true,
    //         next: Node {
    //           element: "string",
    //           next: '...and so on and so forth'
    //         }
    //       }
    //     }
    //   }
    // }
  }
  
  let length = 0
  let head = null
  
  this.getHead = function() {
    return head
  }
  
  this.append = function(element) {
    let node = new Node(element), current
    
    if (head === null) {
      head = node
    } else {
      current = head  
      
      while (current.next) {  // loops to the last current, which will be one without a .next (since that will stop the loop), aka the last Node.
        current = current.next
      }
      current.next = node // Node is placed as last current's .next.
    }
    length++
  }
  this.insert = function(element,position) {
    if (position >= 0 && position <= length) {
      let node = new Node(element),
      current = head,
      previous,
      index = 0
      
      if (position === 0) {
        node.next = current
        head = node
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }  
        node.next = current // current = element in position after the inserted element
        previous.next = node // previous = element in position before the inserted element
      }
      length++
      return true
      
    } else {
      return false
    }
  }
  this.removeAt = function(position) {
    if (position > -1 && position < length) {
      let current = head, 
      previous,
      index = 0
      
      if (position === 0) {
        head = current.next  // current, the previous head, isn't then deleted so much as the code loses reference to it.  It floats in space with no tether.  But it then gets cleaned by the garbage collector.
      } else {
        while (index++ < position) {
          // index doesn't increment until next loop around
          previous = current
          current = current.next
        } // this while loop loops through each current.next and makes it to a current, loops through each current and makes it into a previous, until index equals position.
        previous.next = current.next // previous's link to current is replaced by a link to current.next, setting current tetherless to be picked up by garbage collector
      }
      length--
      
      return current.element
      
    } else {
      return null
    }
  }
  
  this.remove = function(element) {
    let index = this.indexOf(element)
    return this.removeAt(index)
  }
  
  this.indexOf = function(element) {
    let current = head, 
    index = -1
    
    while (current) {
      index++
      if (element === current.element) {
        return index
      }
      current = current.next
    }
    return index
  }
  
  this.isEmpty = function() {
    return length === 0
  }
  this.size = function() {
    return length
  }
  this.toString = function() {
    let current = head,
    string = ''
    
    while (current) {
      string += current.element + (current.next ? ', ': '')
      current = current.next
    }
    
    return string
  }
  
  this.print = function() {
    let current = head,
    string = ''
    
    while (current) {
      string += (current === head ? '[ {element: ' : '{element: ') + current.element + (current.next ? (', next: ' + current.next.element + '}, ') : ', next: null} ]')
      current = current.next
    }
    return string
  }
  
  
}