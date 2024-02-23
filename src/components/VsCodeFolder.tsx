import { useState } from "react"
import { Explorer, inputType } from "../data"
import {AiFillFileAdd, AiFillFolderAdd} from "../Icon/index"



type VsFolderTypeProps = {
  addNode: (ID: string, item: any, isFolder: boolean) => void
  tree:Explorer
}

const VsCodeFolder = ({tree, addNode}:VsFolderTypeProps) => {

 const [open, setOpen] = useState(false)
 const [isInputVisible, setisInputVisible] = useState<inputType>(
  {
    visible:false,
    isFolder: null
  }
 )
    

 const handleIconClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, isFolder:boolean)=>{
  
  e.stopPropagation()

  if(isFolder){
    setisInputVisible((prev)=>{
      if(prev.visible === null){
        return {
          isFolder:true,
          visible:true
        }
      } else if(prev.visible=== true){
        return {
          isFolder:true,
          visible:false
        }
      } else {
        return {
          isFolder:true,
          visible:!isInputVisible.visible
        }
      }
    }) 
  } else{
    setisInputVisible((prev)=>{
      if(prev.visible === null){
        return {
          isFolder:false,
          visible:true
        }
      } else if(prev.visible=== true){
        return {
          isFolder:false,
          visible:false
        }
      } else {
        return {
          isFolder:false,
          visible:true
        }
      }
    }) 
  }
 }

 const createFolder = (e:any)=>{

  const value = e.target.value
   if(e.keyCode===13 && value){
    if(isInputVisible.isFolder!==null)
    addNode(tree.id, value, isInputVisible.isFolder )
    setisInputVisible({...isInputVisible, visible:false})
   }
 }

  return (
    <div>
        
        <div style={{display:'flex', flexDirection:'row', gap:10, alignItems:'center'}}>
        <p 
        onClick={()=>setOpen((prev)=>!prev)}
         style={{color:'white', cursor:'pointer'}}> {tree.isFolder ? "📁" : "📄"}
         {tree.name} </p>


        {
          tree.isFolder ? (
            <>
            <div 
            onClick={(e)=>handleIconClick(e, true)}
            style={{height:20, color:'yellow', cursor:'pointer'}}>
             <AiFillFolderAdd/>
            </div>
   
            <div 
            onClick={(e)=>handleIconClick(e, false)}
            style={{height:20, color:'white', cursor:'pointer'}}>
             <AiFillFileAdd/>
            </div>
            </>
          ) : null
        }
         
        </div>


         {
          isInputVisible.visible && (
            <div style={{display:'flex', flexDirection:'row', gap:10, alignItems:'center'}}>
            <p 
            
             style={{color:'white', cursor:'pointer'}}> {isInputVisible.isFolder ? "📁" : "📄"}
            </p>
             <input
              
             onKeyDown={(e)=>createFolder(e)}
             autoFocus
             onBlur={()=>setisInputVisible({...isInputVisible, visible:false})}
             style={{outline:'none'}}
             />
            </div>
          )
         }
        
         {tree.items.sort((a,b)=>a.name.localeCompare(b.name)).map((expo)=>{
            return <div key={expo.id} 
                 style={{display: open ? "block" : "none",
                 marginLeft:30}}>
                 
                 <VsCodeFolder 
                 addNode={addNode}
                 tree={expo}/>
                </div>
         })}
      
    </div>
  )
}

export default VsCodeFolder