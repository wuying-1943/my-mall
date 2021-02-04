import axios from 'axios'

function myRequest(url){
  return axios({
    url
  })
}

export default myRequest