const findNodeAndParent = (id, arr) => {
    for (let node of arr) {
        if (node.id === id) {
            return { node, parentArr: arr };
        } else if (node.children && node.children.length > 0) {
            const foundNode = findNodeAndParent(id, node.children);
            if (foundNode) {
                return foundNode
            }
        }
    }
    return null;
}

export default findNodeAndParent