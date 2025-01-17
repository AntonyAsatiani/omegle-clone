import React,{useEffect, useRef} from 'react';

type Props = {
    localStream:MediaProvider | string | null;
    remoteStream:MediaProvider | string | null;
}

const Frame = (props: Props) => {
    const localVideo = useRef<HTMLVideoElement>();
    const remoteVideo = useRef<HTMLVideoElement>();

    useEffect(()=>{
        if(props.localStream !== null && typeof props.localStream === "object"){
            if(localVideo.current){
                localVideo.current.srcObject = props.localStream;
            }
        }else if(props.localStream === null){
            console.log(props.localStream);
            if(localVideo.current){
                localVideo.current.srcObject = props.localStream;
            }
        }
    },[props.localStream])

    useEffect(()=>{
        if(props.remoteStream !== null && typeof props.remoteStream === "object"){
            if(remoteVideo.current){
                remoteVideo.current.srcObject = props.remoteStream;
            }
        }else if(props.remoteStream === null){
            if(remoteVideo.current){
                remoteVideo.current.srcObject = props.remoteStream;
            }
        }
    },[props.remoteStream])
  return (
    <div className='flex flex-col gap-y-5 pl-2 pt-2 '>
        {/* Remote Frame */}
        {
            typeof props.remoteStream === "string" && "Loading"
        }
        <div className="w-56 rounded-md h-36 p-2">
            <video src="" ref={remoteVideo} id="localVideo" width="600" height="300" className="object-fit-cover rounded-lg" autoPlay playsInline></video>
        </div>

        {/* Local Frame */}
        {
            typeof props.localStream === "string" && "Loading"
        }
        <div className="w-56 rounded-md h-36 p-2">
            <video src="" ref={localVideo} id="localVideo" width="600" height="300" className="object-fit-cover rounded-lg" autoPlay playsInline></video>
        </div>
    </div>
  )
}

export default Frame