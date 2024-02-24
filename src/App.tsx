import { useCallback, useState } from 'react'
import './App.css'
import { Explorer } from './data'
import VsCodeFolder from './components/VsCodeFolder'
import { insert } from './CustomFunction/addtoTree'
import vsExplorer from './data/dummyData'
import { toast } from 'react-toastify'
import { removeObjectFromTree } from './CustomFunction/removeFromTree'





function App() {


  const [explorerState, setexplorerState] = useState<Explorer>(vsExplorer)

 

  const handleAddNode = (ID:string, item:string, isFolder:boolean)=>{
     const finalTree = insert(explorerState, ID, item, isFolder)
       setexplorerState(finalTree)

       if(isFolder)
       return toast.success("Folder created sucessfully.")
       else 
       return toast.success("File created sucessfully.")
    }

   

    
  

  const remove = useCallback((folderId: string, isFolder:boolean) => {
    setexplorerState((prevExplorerState) => {
      const newExplorerState = { ...prevExplorerState }; 
   
      removeObjectFromTree(newExplorerState, folderId);
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
