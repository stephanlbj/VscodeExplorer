import { useCallback, useState } from 'react'
import './App.css'
import { Explorer } from './data'
import VsCodeFolder from './components/VsCodeFolder'
import { useTraverse } from './CustomFunction/useTraverse'
import vsExplorer from './data/dummyData'
import { toast } from 'react-toastify'





function App() {


  const [explorerState, setexplorerState] = useState<Explorer>(vsExplorer)

  const {insert} = useTraverse()

  const handleAddNode = (ID:string, item:string, isFolder:boolean)=>{
     const finalTree = insert(explorerState, ID, item, isFolder)
       setexplorerState(finalTree)

       if(isFolder)
       return toast.success("Folder created sucessfully.")
       else 
       return toast.success("File created sucessfully.")
    }

   

    
  const removeFolderRecursively = (obj: Explorer, folderId: string) => {
    obj.items = obj.items.filter(item => {
      if (item.items) {
        // Recursively remove items in folders
        removeFolderRecursively(item, folderId);
        return item.id !== folderId;
      } 
    });
  };

  const remove = useCallback((folderId: string, isFolder:boolean) => {
    setexplorerState((prevExplorerState) => {
      const newExplorerState = { ...prevExplorerState }; // Create a shallow copy
      removeFolderRecursively(newExplorerState, folderId);
      return newExplorerState;
    });

    if(isFolder)
    return toast.success("Folder deleted.")
  else
   return toast.success("File deleted.")
  },[])
 
 

  return (
    <main>
     <VsCodeFolder 
     tree={explorerState}
     addNode={handleAddNode}
     removeFolder={remove}
     />
    </main>
  )
}

export default App
