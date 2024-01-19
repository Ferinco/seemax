import React, { useEffect } from 'react'
import { fetchSingleMovie } from '../utils/api/axios';
import { useParams } from 'react-router-dom';

export default function DetailsPage() {
const {id} = useParams()
useEffect(()=>{
GetDetails()
}, [])
    async function GetDetails (){
        try{
           const response = await fetchSingleMovie(id)
            console.log(response.data)
        }
        catch(error){
            console.log(error)
        }
    }
  return (
    <div className="w-full px-7 flex flex-col gap-12 bg-black/5">

    </div>
  )
}
