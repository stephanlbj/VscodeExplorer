import { Explorer } from "../data"

export const useTraverse  = ()=>{
    function insert(tree:Explorer, folderID:string, item:string, isFolder:boolean):any{
        
        if(tree.id === folderID && tree.isFolder){
         tree.items.unshift({
            id:new Date().getTime().toString(),
            name:item,
            isFolder,
            items:[]
         })

         return tree
        }
               
    let latestArray = []
    latestArray = tree.items.map((EachTree)=>{
      
            return insert(EachTree,folderID, item, isFolder )
    
    })
      return {...tree, items:latestArray}
    }


    return {insert}
}