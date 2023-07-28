const findNode = (id, arr) => {
    for (let node of arr) {
        if (node.id === id) {
            return node;
        } else if (node.children && node.children.length > 0) {
            const foundNode = findNode(id, node.children);
            if (foundNode) {
                return foundNode
            }
        }
    }
    return null;
}

export default findNode