import { Explorer } from "../data"

 
  export const  insert = (tree:Explorer, folderID:string, item:string, isFolder:boolean):any =>{
        
        if(tree.id === folderID && tree.isFolder){
         tree.items.push({
            id:new Date().getTime().toString(),
            name:item,
            isFolder,
            items:[]
         })

         return tree
        }
               
    let subFolder = []
    subFolder = tree.items.map((EachTree)=>{
      
            return insert(EachTree,folderID, item, isFolder )
    
    })
      return {...tree, items:subFolder}
    }


  