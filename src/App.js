import axios from 'axios'

function App() {
  const [ipAddress, setIpAddress] = useState('')
  const [js, setJS] = useState('')
  const [css, setCss] = useState('')

  const getRequest = async () => {
    const res = await axios({
      method: 'get',
      url: 'https://loserkeys.tk/app/flow/vue/2.5.16/vue.min.js',
    })
    setJS(res)
  }

  const sendRequest = async () => {
    const { data } = await axios({
      method: 'post',
      url: '/app/flow/ip/test/ip_geo',
      data: {
        firstName: 'Fred',
        lastName: 'Flintstone',
      },
      params: {
        page: 1,
        current: '231321',
      },
      header: {
        header_uuid: '321321212-13221321-321321-ewqeq',
      },
    })
    setIpAddress(data)
  }

  const getAliyunCss = async () => {
    const res = await axios({
      method: 'get',
      url: 'https://loserkeys.tk/app/flow/fe-resource/sl-developer-center/test/1.0.20/umi.css',
    })
    setCss(res)
  }

  return (
    <div className='App'>
      <div>clourdflire 测试demo</div>
      <button onClick={getRequest}>获取 一个js 资源</button>
      <div>js======{js}</div>

      <br />
      <br />
      <button onClick={sendRequest}>提交一些请求</button>
      <div>当前的ip所在的地区======{ipAddress}</div>

      <br />
      <br />
      <button onClick={getAliyunCss}>获取一个 css 资源</button>
      <div>css======{css}</div>
    </div>
  )
}

export default App
