import { useEffect, useState } from "react"

export default function test() {
    const [obj, setObj] = useState(
        {
            status : 1
        }
    )
    
    function guide1(){
        if (obj.status === 1){
           setObj({...obj,status:2})      
        }  
        if (obj.status === 2){
            setObj({...obj,status:3})  
         }
         if (obj.status === 3){
            setObj({...obj,status:1})  
         }
    }

    console.log(obj)
  return (
    <>
        <div className="grid cursor-pointer h-10 w-10 bg-red" onClick={guide1}>
            {obj.status === 1 &&
                <div className="bg-red-500">
                    1
                </div>
            }
            {obj.status === 2 &&
                <div className="bg-black">
                    2
                </div>
            }
            {obj.status === 3 &&
                <div className="bg-green-5--">
                    3
                </div>
            }
      </div>
    </>
  )
}