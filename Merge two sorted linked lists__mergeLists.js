function toArray(root) {
    let array = [root];
    let temp = root;
    
    while(temp.next)
    {
        array.push(temp.next)
        temp = temp.next;
    }
    
    array.forEach(n => { n.next = null });
    
    return array;
}

function toNode(array) {
    let root = array[0];   
    let temp = root;
         
    for(let i = 1; i < array.length; i++)
    {
        temp.next = array[i];
        temp = temp.next;
    }
    
    return root;
}

function mergeLists(head1, head2) {
    let a1 = toArray(head1);
    let a2 = toArray(head2); 
    
    let a = a1.concat(a2)
        .sort((x, y) => x.data - y.data);
    
    return toNode(a);
}
