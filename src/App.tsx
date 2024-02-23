import { useState } from 'react'
import './App.css'
import { Explorer } from './data'
import VsCodeFolder from './components/VsCodeFolder'
import { useTraverse } from './CustomFunction/useTraverse'
import vsExplorer from './data/dummyData'





function App() {


  const [explorerState, setexplorerState] = useState<Explorer>(vsExplorer)

  const {insert} = useTraverse()

  const handleAddNode = (ID:string, item:string, isFolder:boolean)=>{
     const finalTree = insert(explorerState, ID, item, isFolder)
       setexplorerState(finalTree)
    }


  return (
    <main>
     <VsCodeFolder 
     explorer={explorerState}
     addNode={handleAddNode}/>
    </main>
  )
}

export default App
