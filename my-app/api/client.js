import axios from "axios";
// we should change this link each time the ip adress changes 
// cmd => ipconfig => ipv4 or use metro link  
export default axios.create({ baseURL: "http://192.168.43.208:5000" });
