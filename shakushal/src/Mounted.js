import {React,useEffect,useRef} from 'react'

export const Mounted = () => {
    const mounted = useRef(false)

    useEffect(() => {
        mounted.current = true
        return () => {
            mounted.current = false
        }
    }, [])
    return mounted
}
