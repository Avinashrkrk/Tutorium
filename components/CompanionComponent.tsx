// 'use client'

// import { cn, getSubjectColor, configureAssistant } from "@/lib/utils"
// import { vapi } from "@/lib/vapi.sdk"
// import { error } from "console"
// import Lottie, { LottieComponentProps, LottieRefCurrentProps } from "lottie-react"
// import Image from "next/image"
// import { useEffect, useRef, useState } from "react"
// import soundwaves from '@/constants/soundwaves.json'

// enum CallStatus {
//   INACTIVE = "INACTIVE",
//   CONNECTING = "CONNECTING",
//   ACTIVE = "ACTIVE",
//   FINISHED = "FINISHED"
// }

// const CompanionComponent = ({
//     companionId, 
//     subject, 
//     topic,
//     name,
//     userName,
//     userImage,
//     style,
//     voice
// }: CompanionComponentProps) => {
//     const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE)
//     const [isSpeaking, setIsSpeaking] = useState(false)
//     const [isMuted, setisMuted] = useState(false)
//     const [messages, setMessages] = useState<SavedMessage[]>([]);


//     const lottieRef = useRef<LottieRefCurrentProps>(null);

//     useEffect(() => {
//         if(lottieRef) {
//             if(isSpeaking) {
//                 lottieRef.current?.play()
//             } else {
//                 lottieRef.current?.stop()
//             }
//         }
//     }, [isSpeaking, lottieRef])


//     useEffect(()=>{
//         const onCallStart =() => setCallStatus(CallStatus.ACTIVE)

//         const onCallEnd = () => setCallStatus(CallStatus.FINISHED)

//         const onMessage = (message: Message) => {
//             if(message.type === 'transcript' && message.transcriptType === 'final') {
//                 const newMessage= { role: message.role, content: message.transcript}
//                 setMessages((prev) => [newMessage, ...prev])
//             }
//         }

//         const onSpeechStart = () => setIsSpeaking(true)
//         const onSpeechEnd = () => setIsSpeaking(false)

//         const onError = (error: Error) => console.log('Error', error)

//         vapi.on('call-start', onCallStart)
//         vapi.on('call-end', onCallEnd)
//         vapi.on('message', onMessage)
//         vapi.on('error', onError)
//         vapi.on('speech-start', onSpeechStart)
//         vapi.on('speech-end', onSpeechEnd)

//         return () => {
//             vapi.off('call-start', onCallStart)
//             vapi.off('call-end', onCallEnd)
//             vapi.off('message', onMessage)
//             vapi.off('error', onError)
//             vapi.off('speech-start', onSpeechStart)
//             vapi.off('speech-end', onSpeechEnd)
//         }

//     }, [])

//     const toggleMicrophone = () => {
//         const isMuted = vapi.isMuted()
//         vapi.setMuted(!isMuted)
//         setisMuted(!isMuted)
//     }

//     const handleCall = async () => {
//         setCallStatus(CallStatus.CONNECTING)

//         const assistantOverrides = {
//             variableValues: { subject, topic, style },
//             clientMessages: ["transcript"],
//             serverMessages: [],
//         }

//         // @ts-expect-error
//         vapi.start(configureAssistant(voice, style), assistantOverrides)
//     }

//     const handleDisconnect = () => {
//         setCallStatus(CallStatus.FINISHED)
//         vapi.stop()
//     }
 
//     return(
//         <section className="flex flex-col h-[70vh]">
//             <section className="flex gap-8 max-sm:flex-col">
//                 <div className="companion-section">
//                     <div className="companion-avatar" style={{backgroundColor: getSubjectColor(subject)}}>
//                         <div 
//                             className={
//                                 cn(
//                                     'absolute transition-opacity duration-1000',
//                                     callStatus === CallStatus.FINISHED || callStatus === CallStatus.INACTIVE ? 'opacity-101':'opacity-0',
//                                     callStatus === CallStatus.CONNECTING && 'opacity-100 animate-pulse'
//                                 )
//                             }>
//                                 <Image 
//                                     src={`/icons/${subject}.svg`}
//                                     alt={subject}
//                                     width={150}
//                                     height={150}
//                                     className="max-sm:w-fit"
//                                 />
//                             </div>

//                             <div
//                                 className={
//                                     cn(
//                                         'absolute transition-opacity duration-1000',
//                                         callStatus === CallStatus.ACTIVE ? 'opacity-100' : 'opacity-0'
//                                     )
//                                 }
//                             >
//                                 <Lottie
//                                     lottieRef={lottieRef}
//                                     animationData={soundwaves}
//                                     autoplay={false}
//                                     className="companion-lottie"
//                                 />
                                
//                             </div>
//                     </div>
//                     <p className="font-bold text-2xl">{name}</p>
//                 </div>

//                 <div className="user-section">
//                     <div className="user-avatar">
//                         <Image
//                             src={userImage}
//                             alt={userName}
//                             width={130}
//                             height={130}
//                             className="rounded-lg"
//                         />
//                         <p className="font-bold text-2xl" >{userName}</p>
//                     </div>
//                     <button className="btn-mic" onClick={toggleMicrophone} disabled={callStatus !== CallStatus.ACTIVE}>
//                         <Image src={isMuted ? '/icons/mic-off.svg' : '/icons/mic-on.svg'} alt="mic" width={36} height={36} />
//                         <p className="max-sm:hidden">
//                             {isMuted ? 'Turn on microphone' : 'Turn off microphone'}
//                         </p>
//                     </button>
//                     <button className={cn('rounded-lg py-2 cursor-pointer transition-colors w-full text-white', callStatus ===CallStatus.ACTIVE ? 'bg-red-700' : 'bg-primary', callStatus === CallStatus.CONNECTING && 'animate-pulse')} onClick={callStatus === CallStatus.ACTIVE ? handleDisconnect : handleCall}>
//                         {callStatus === CallStatus.ACTIVE
//                         ? "End Session"
//                         : callStatus === CallStatus.CONNECTING
//                             ? 'Connecting'
//                         : 'Start Session'
//                         }
//                     </button>
//                 </div>
//             </section>

//             <section className="transcript">
//     <div className="transcript-message no-scrollbar">
//         {messages.map((message, index) => {
//             if(message.role === 'assistant') {
//                 return (
//                     <p key={index} className="max-sm:text-sm">
//                         {
//                             name
//                                 .split(' ')[0]
//                                 .replace(/[.,]/g, '')
//                         }: {message.content}
//                     </p>
//                 )
//             } else {
//                 return (
//                     <p key={index} className="text-primary max-sm:text-sm">
//                         {userName}: {message.content}
//                     </p>
//                 )
//             }
//         })}
//     </div>

//     <div className="transcript-fade" />
// </section>
//         </section>
//     )
// }

// export default CompanionComponent


'use client'

import { cn, getSubjectColor, configureAssistant } from "@/lib/utils"
import { vapi } from "@/lib/vapi.sdk"
import { error } from "console"
import Lottie, { LottieComponentProps, LottieRefCurrentProps } from "lottie-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import soundwaves from '@/constants/soundwaves.json'

enum CallStatus {
  INACTIVE = "INACTIVE",
  CONNECTING = "CONNECTING",
  ACTIVE = "ACTIVE",
  FINISHED = "FINISHED"
}

const CompanionComponent = ({
    companionId, 
    subject, 
    topic,
    name,
    userName,
    userImage,
    style,
    voice
}: CompanionComponentProps) => {
    const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE)
    const [isSpeaking, setIsSpeaking] = useState(false)
    const [isMuted, setisMuted] = useState(false)
    const [messages, setMessages] = useState<SavedMessage[]>([]);

    const lottieRef = useRef<LottieRefCurrentProps>(null);

    useEffect(() => {
        if(lottieRef) {
            if(isSpeaking) {
                lottieRef.current?.play()
            } else {
                lottieRef.current?.stop()
            }
        }
    }, [isSpeaking, lottieRef])

    useEffect(()=>{
        const onCallStart =() => setCallStatus(CallStatus.ACTIVE)
        const onCallEnd = () => setCallStatus(CallStatus.FINISHED)
        const onMessage = (message: Message) => {
            if(message.type === 'transcript' && message.transcriptType === 'final') {
                const newMessage= { role: message.role, content: message.transcript}
                setMessages((prev) => [newMessage, ...prev])
            }
        }
        const onSpeechStart = () => setIsSpeaking(true)
        const onSpeechEnd = () => setIsSpeaking(false)
        const onError = (error: Error) => console.log('Error', error)

        vapi.on('call-start', onCallStart)
        vapi.on('call-end', onCallEnd)
        vapi.on('message', onMessage)
        vapi.on('error', onError)
        vapi.on('speech-start', onSpeechStart)
        vapi.on('speech-end', onSpeechEnd)

        return () => {
            vapi.off('call-start', onCallStart)
            vapi.off('call-end', onCallEnd)
            vapi.off('message', onMessage)
            vapi.off('error', onError)
            vapi.off('speech-start', onSpeechStart)
            vapi.off('speech-end', onSpeechEnd)
        }
    }, [])

    const toggleMicrophone = () => {
        const isMuted = vapi.isMuted()
        vapi.setMuted(!isMuted)
        setisMuted(!isMuted)
    }

    const handleCall = async () => {
        setCallStatus(CallStatus.CONNECTING)
        const assistantOverrides = {
            variableValues: { subject, topic, style },
            clientMessages: ["transcript"],
            serverMessages: [],
        }
        // @ts-expect-error
        vapi.start(configureAssistant(voice, style), assistantOverrides)
    }

    const handleDisconnect = () => {
        setCallStatus(CallStatus.FINISHED)
        vapi.stop()
    }
 
    return(
        <section className="flex flex-col min-h-[80vh] max-h-[90vh] bg-gradient-to-br from-slate-50 via-white to-blue-50/30 rounded-2xl border border-slate-200/60 shadow-xl p-6 backdrop-blur-sm">
            {/* Header with status indicator */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className={cn(
                        "w-3 h-3 rounded-full transition-all duration-500",
                        callStatus === CallStatus.ACTIVE ? "bg-green-500 shadow-lg shadow-green-500/50 animate-pulse" :
                        callStatus === CallStatus.CONNECTING ? "bg-yellow-500 shadow-lg shadow-yellow-500/50 animate-pulse" :
                        callStatus === CallStatus.FINISHED ? "bg-gray-400" : "bg-gray-300"
                    )} />
                    <span className="text-sm font-medium text-slate-600">
                        {callStatus === CallStatus.ACTIVE ? "Live Session" :
                         callStatus === CallStatus.CONNECTING ? "Connecting..." :
                         callStatus === CallStatus.FINISHED ? "Session Ended" : "Ready to Connect"}
                    </span>
                </div>
                <div className="px-3 py-1 bg-white/70 rounded-full text-xs font-medium text-slate-500 border border-slate-200">
                    {subject} • {topic}
                </div>
            </div>

            {/* Main interaction area */}
            <section className="flex gap-8 max-lg:gap-6 max-sm:flex-col mb-8">
                {/* Companion Section */}
                <div className="flex-1 flex flex-col items-center space-y-6">
                    <div className="relative group">
                        {/* Animated background rings */}
                        <div className={cn(
                            "absolute inset-0 rounded-full transition-all duration-1000",
                            callStatus === CallStatus.ACTIVE ? "bg-gradient-to-br from-blue-400/20 to-purple-400/20 animate-pulse scale-110" :
                            callStatus === CallStatus.CONNECTING ? "bg-gradient-to-br from-yellow-400/20 to-orange-400/20 animate-pulse scale-105" :
                            "bg-gradient-to-br from-slate-200/40 to-slate-300/40"
                        )} />
                        
                        {/* Main avatar container */}
                        <div 
                            className="relative w-48 h-48 max-sm:w-36 max-sm:h-36 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/80 backdrop-blur-sm transition-all duration-500 hover:scale-105"
                            style={{
                                background: `linear-gradient(135deg, ${getSubjectColor(subject)}15, ${getSubjectColor(subject)}35)`
                            }}
                        >
                            {/* Static companion icon */}
                            <div 
                                className={cn(
                                    'absolute inset-0 flex items-center justify-center transition-all duration-1000 transform',
                                    callStatus === CallStatus.FINISHED || callStatus === CallStatus.INACTIVE ? 'opacity-100 scale-100':'opacity-0 scale-95',
                                    callStatus === CallStatus.CONNECTING && 'opacity-100 scale-100 animate-pulse'
                                )}
                            >
                                <div className="p-8 rounded-full bg-white/50 backdrop-blur-sm">
                                    <Image 
                                        src={`/icons/${subject}.svg`}
                                        alt={subject}
                                        width={120}
                                        height={120}
                                        className="max-sm:w-20 max-sm:h-20 drop-shadow-lg"
                                    />
                                </div>
                            </div>

                            {/* Animated soundwaves */}
                            <div
                                className={cn(
                                    'absolute inset-0 flex items-center justify-center transition-all duration-1000',
                                    callStatus === CallStatus.ACTIVE ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                                )}
                            >
                                <Lottie
                                    lottieRef={lottieRef}
                                    animationData={soundwaves}
                                    autoplay={false}
                                    className="w-32 h-32 max-sm:w-24 max-sm:h-24"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="text-center space-y-2">
                        <p className="font-bold text-2xl max-sm:text-xl text-slate-800">{name}</p>
                        <p className="text-sm text-slate-500 font-medium">AI Learning Companion</p>
                    </div>
                </div>

                {/* User Section */}
                <div className="flex-1 flex flex-col items-center space-y-6">
                    <div className="relative group">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 transform rotate-1 group-hover:rotate-2 transition-transform duration-300" />
                        <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50">
                            <div className="flex flex-col items-center space-y-4">
                                <div className="relative">
                                    <Image
                                        src={userImage}
                                        alt={userName}
                                        width={120}
                                        height={120}
                                        className="rounded-xl shadow-lg border-2 border-white"
                                    />
                                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow-lg" />
                                </div>
                                <p className="font-bold text-xl text-slate-800">{userName}</p>
                            </div>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="w-full max-w-xs space-y-4">
                        {/* Microphone Button */}
                        <button 
                            className={cn(
                                "w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg",
                                callStatus !== CallStatus.ACTIVE ? "bg-gray-100 text-gray-400 cursor-not-allowed" :
                                isMuted ? "bg-red-50 text-red-600 border-2 border-red-200 hover:bg-red-100" :
                                "bg-green-50 text-green-600 border-2 border-green-200 hover:bg-green-100"
                            )}
                            onClick={toggleMicrophone} 
                            disabled={callStatus !== CallStatus.ACTIVE}
                        >
                            <Image 
                                src={isMuted ? '/icons/mic-off.svg' : '/icons/mic-on.svg'} 
                                alt="mic" 
                                width={24} 
                                height={24} 
                            />
                            <span className="max-sm:hidden text-sm">
                                {isMuted ? 'Unmute' : 'Mute'}
                            </span>
                        </button>

                        {/* Main Action Button */}
                        <button 
                            className={cn(
                                'w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg relative overflow-hidden',
                                callStatus === CallStatus.ACTIVE ? 
                                'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-red-500/30' : 
                                'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-blue-500/30',
                                callStatus === CallStatus.CONNECTING && 'animate-pulse'
                            )} 
                            onClick={callStatus === CallStatus.ACTIVE ? handleDisconnect : handleCall}
                        >
                            <span className="relative z-10">
                                {callStatus === CallStatus.ACTIVE
                                ? "End Session"
                                : callStatus === CallStatus.CONNECTING
                                    ? 'Connecting...'
                                : 'Start Session'
                                }
                            </span>
                            {callStatus === CallStatus.CONNECTING && (
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                            )}
                        </button>
                    </div>
                </div>
            </section>

            {/* Enhanced Transcript Section */}
            <section className="flex-1 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 shadow-inner overflow-hidden flex flex-col" style={{minHeight: '300px'}}>
                <div className="p-4 border-b border-slate-200/50 bg-gradient-to-r from-slate-50/50 to-white/50 flex-shrink-0">
                    <h3 className="font-semibold text-slate-700 flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                        Live Transcript
                    </h3>
                </div>
                
                <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
                        {messages.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-48 text-center">
                                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </div>
                                <p className="text-slate-500 text-sm">Start a session to see the conversation transcript</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {messages.map((message, index) => {
                                if(message.role === 'assistant') {
                                    return (
                                        <div key={index} className="flex gap-3 animate-fadeIn">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                                                <span className="text-white text-sm font-bold">
                                                    {name.split(' ')[0].charAt(0)}
                                                </span>
                                            </div>
                                            <div className="flex-1 max-w-[80%]">
                                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl rounded-tl-md p-4 shadow-sm border border-blue-100/50">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="font-semibold text-blue-700 text-sm">
                                                            {name.split(' ')[0].replace(/[.,]/g, '')}
                                                        </span>
                                                        <span className="text-xs text-slate-400">AI Assistant</span>
                                                    </div>
                                                    <p className="text-sm text-slate-700 leading-relaxed">
                                                        {message.content}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div key={index} className="flex gap-3 justify-end animate-fadeIn">
                                            <div className="flex-1 max-w-[80%] flex justify-end">
                                                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl rounded-tr-md p-4 shadow-sm text-white">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="font-semibold text-sm">
                                                            {userName}
                                                        </span>
                                                        <span className="text-xs text-green-100">You</span>
                                                    </div>
                                                    <p className="text-sm leading-relaxed">
                                                        {message.content}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                                                <span className="text-white text-sm font-bold">
                                                    {userName.charAt(0)}
                                                </span>
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                            </div>
                        )}
                </div>
            </section>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
                
                .animate-shimmer {
                    animation: shimmer 2s infinite;
                }
                
                .scrollbar-thin {
                    scrollbar-width: thin;
                }
                
                .scrollbar-thumb-slate-300::-webkit-scrollbar-thumb {
                    background-color: rgb(203 213 225);
                    border-radius: 6px;
                }
                
                .scrollbar-track-transparent::-webkit-scrollbar-track {
                    background-color: transparent;
                }
                
                .scrollbar-thin::-webkit-scrollbar {
                    width: 6px;
                }
            `}</style>
        </section>
    )
}

export default CompanionComponent