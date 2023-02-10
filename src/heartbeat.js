import axios from "axios"

export async function getStatus() {
    const res = await axios.get("http://ecourse.cpe.ku.ac.th/exceed05/hard/get_status")
    return res.data
}

export async function getBpm() {
    const res = await axios.get("http://ecourse.cpe.ku.ac.th/exceed05/hard/send_bpm")
    return res.data
}

export async function getMode() {
    const res = await axios.get("http://ecourse.cpe.ku.ac.th/exceed05/hard/on_off") 
    return res.data
}
