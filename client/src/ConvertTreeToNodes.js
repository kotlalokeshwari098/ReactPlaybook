
export function convertTreeToNodes(tree){
    
    let nodeTree={
        name:'',
        children:[]
    }
    console.log(tree);
    if(tree.type){
        nodeTree.name=tree.type;
    }
    if(tree.children){
        let node=tree.children.map((item)=>convertTreeToNodes(item))
        nodeTree.children=node;
    }
    
    console.log(nodeTree)
    return nodeTree;
   
}