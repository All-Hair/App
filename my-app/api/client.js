import axios from "axios";
// we should change this link each time the ip adress changes 
// cmd => ipconfig => ipv4 or use metro link  
export default axios.create({ baseURL: "192.168.104.4:5000" });
