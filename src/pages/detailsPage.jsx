import React, { useEffect, useState } from 'react'
import { fetchMovieImg, fetchSingleMovie } from '../utils/api/axios';
import { useParams } from 'react-router-dom';

export default function DetailsPage() {
const {id} = useParams()
const [details, setDetails] = useState()
useEffect(()=>{
GetDetails()
}, [])
    async function GetDetails (){
        try{
           const response = await fetchSingleMovie(id)
            setDetails(response.data)
            console.log(details)
        }
        catch(error){
            console.log(error)
        }
    }
  return (
    <div className="w-full px-0 flex flex-col gap-12 bg-black/5 h-full flex-flex-col relative">
    </div>
  )
}
