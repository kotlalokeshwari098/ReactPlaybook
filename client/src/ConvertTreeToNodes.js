
export function convertTreeToNodes(tree){
    
    let nodeTree={
        name:'',
        children:[],
        status:''
    }
    // console.log(tree);
    if(tree.type){
        nodeTree.name=tree.type;
    }
    if (tree.status) {
    nodeTree.status = tree.status;
  }
    if(tree.children){
        let node=tree.children.map((item)=>convertTreeToNodes(item))
        nodeTree.children=node;
    }
    
    console.log("nodetree",nodeTree)
    return nodeTree;
   
}