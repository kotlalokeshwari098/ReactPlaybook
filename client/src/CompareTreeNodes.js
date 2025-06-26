let treeOriginal=[];
let treeModified=[];
export function compareTreeNodes(type,tree) {
    console.log("type is",type,tree)
    if(type==='original') treeOriginal[0]=tree
    if(type==='modified'){ 
        if(treeModified.length>0){
            let lastTree=treeModified[treeModified.length-1];
            if(JSON.stringify(lastTree)===JSON.stringify(tree)){
                console.log("same tree, not pushing");
                return;
            }
            treeModified.pop();
            treeModified[0]=tree;
        }
        treeModified[0]=tree;
    }
    console.log("treeOriginal",treeOriginal);
    console.log("treeModified",treeModified);
      return tree;
}