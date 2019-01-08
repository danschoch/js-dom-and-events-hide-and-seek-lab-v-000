function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
    return document.getElementById('nested').getElementsByClassName('target')[0];
}

function deepestChild() {
    let grandNode = document.getElementById('grand-node');
    let nextNode = grandNode.children[ 0 ]
    let node

    while ( nextNode ) {
        node = nextNode
        nextNode = node.children[ 0 ]
      }

    return node
}

function increaseRankBy(n) {
    const rankElements = document.getElementsByClassName('ranked-list');

    for ( let i = 0, l = rankElements.length; i < l; i++ ) {
        let children = rankElements[ i ].children
    
        for ( let j = 0, k = children.length; j < k; j++ ) {
          children[ j ].innerHTML = parseInt( children[ j ].innerHTML ) + n
        }
    }
}