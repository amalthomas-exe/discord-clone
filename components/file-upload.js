"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import "@uploadthing/react/styles.css";
import { X } from "lucide-react";
import Image from "next/image";

export const FileUpload = ({onChange,value,endpoint})=>{
    const fileType = value?.split(".").pop()
    if(value && fileType !=="pdf"){
        return(
            <div className="relative h-20 w-20">
                <Image 
                 fill
                 src= {value}
                 alt = "Upload"
                 className="rounded-full" />
            </div>
        )
    }

    return(
        <UploadDropzone 
            endpoint={endpoint}
            onClientUploadComplete={(res)=>{
                onchange(res?.[0].url);
            }}
            onUploadError={(err)=>{
                console.log(err)
            }}
        />
    )
}