"use client"


import { useTheatre } from '@/app/hooks';
import { useParams } from "next/navigation"

export default function Home() {
  const {id}=useParams<{ id: string }>()
  const {loading,theatre}= useTheatre({
      id:id||""
  })  
  console.log(theatre);
  
    if(theatre){
      return <div>Everything is fine </div>
    }else{
      return <div>Not so good</div>
    }

}
