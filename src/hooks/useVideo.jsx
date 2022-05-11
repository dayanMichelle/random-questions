import { useContext } from "react"
import { VideoContext } from "../context/VideoProvider"

const useVideo = () => {
    return useContext(VideoContext)
}
export default useVideo