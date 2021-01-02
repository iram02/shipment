import React, {useState, useEffect} from 'react'
import "./App.css";
import Main from './components/Main';
import axios from 'axios';
import Loading from './components/Layout/Loading';

const App = () => {

  const [data, setData] = useState([]);
  const [del, setDel] = useState([]);
  const [int, setInt] = useState([]);
  const [ood, setOod] = useState([]);
  const [dex, setDex] = useState([]);
  const [nfi, setNfi] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = "https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch";

  async function fetchUrl() {
    try {
      const config = {
        headers: { Authorization: `Bearer tTU3gFVUdP` }
      };

      const bodyParameters = {
        email: "iramkhan7079@gmail.com"
      };

      const res = await axios.post(url, bodyParameters, config);
     
      setData(res.data);
      console.log(res.data);
      if(res.data.length) {
        setDel(res.data.filter(d => d['current_status_code'] === "DEL"));
        setInt(res.data.filter(d => d['current_status_code'] === "INT"));
        setOod(res.data.filter(d => d['current_status_code'] === "OOD"));
        setDex(res.data.filter(d => d['current_status_code'] === "DEX"));
        setNfi(res.data.filter(d => d['current_status_code'] === "NFI"));
        setLoading(false);
        console.log(loading);
      }
    }
    catch(err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    
    fetchUrl();
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, data]);

  return (
    <div>
      {
        loading ? <Loading /> : (
                  <Main data={data}
                        del={del}
                        int={int}
                        ood={ood}
                        dex={dex}
                        nfi={nfi}
                        />
        )
      }
      
    </div>
  )
}

export default App
