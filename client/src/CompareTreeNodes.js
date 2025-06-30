let treeOriginal = [];
let treeModified = [];
export function compareTreeNodes(type, tree) {
  // console.log("type is",type,tree)
  if (type === "original") treeOriginal[0] = tree;
  if (type === "modified") {
    if (treeModified.length > 0) {
      let lastTree = treeModified[treeModified.length - 1];
      if (JSON.stringify(lastTree) === JSON.stringify(tree)) {
        console.log("same tree, not pushing");
        return;
      }
      treeModified.pop();
      treeModified[0] = tree;
    }
    treeModified[0] = tree;
  }
  console.log("treeOriginal", treeOriginal);
  console.log("treeModified", treeModified);
  console.log("treeModified", treeModified[0]?.children);
  console.log(treeModified.length === 0);
  console.log(Array.isArray(treeModified));

  try{
    if(treeOriginal.length !==0 && treeModified.length !==0){
      console.log("they are not tmpty")
      if(treeOriginal[0].type===treeModified[0].type){
        console.log("sametype")
        if(treeOriginal[0].children?.length===treeModified[0].children?.length){
          console.log("have same childrens length")
          compareChildren(treeOriginal[0].children,treeModified[0].children)
        }
      }
      else{
        console.log("different types")
        treeModified[0].status='modified';
        if(treeOriginal[0].children?.length===treeModified[0].children?.length){
          console.log("have same childrens length")
          compareChildren(treeOriginal[0].children,treeModified[0].children)
        }
      }
    }

  }catch(err){
    console.log(err);
  }

  
     
  console.log("treeModified", treeModified);
  console.log(tree);
  return tree;
}


function compareChildren(originalChildren,modifiedChildren){
  console.log("original children",originalChildren)
  console.log("modified children",modifiedChildren)
  if(originalChildren.length==0 && modifiedChildren.length==0){
    console.log("both are empty")
  }
  if(originalChildren.length==1 && modifiedChildren.length==1){
    if(originalChildren[0]===modifiedChildren[0]){
      console.log("both are same")
    }
    else{
      console.log("both are different")
      modifiedChildren[0].status="modified";
    }
  }
  if(originalChildren.length>modifiedChildren.length){
    console.log("original has more children in modified deleted some children i guess!!!")
  }
  if(originalChildren.length<modifiedChildren.length){
    console.log("modified has more children that original i guess added some new children!!!");
    
    modifiedChildren.forEach((child)=>{
      if(!originalChildren.includes(child)){
        child.status="added";
      }
    })
  }
  if(originalChildren.length===modifiedChildren.length){
    console.log("both have same number of children")
    for(let i=0;i<originalChildren.length;i++){
      if(originalChildren[i].type===modifiedChildren[i].type){
        console.log("both are same type")
         if(originalChildren[i].children?.length >1 && modifiedChildren[i]?.children?.length>1 && originalChildren[i].children?.length===modifiedChildren[i]?.children?.length){
          console.log("both have same number of children")
          compareChildren(originalChildren[i].children,modifiedChildren[i].children);
         }
      }
      else if(originalChildren[i].type !=modifiedChildren[i].type){
        console.log("both are different types")
        modifiedChildren[i].status="modified";
        if(originalChildren[i].children?.length >1 && modifiedChildren[i]?.children?.length>1 && originalChildren[i].children?.length===modifiedChildren[i]?.length){
          console.log("both have same number of children")
          compareChildren(originalChildren[i].children,modifiedChildren[i].children);
         }
      }
      

    }
  }
}