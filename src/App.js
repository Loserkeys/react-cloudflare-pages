import axios from 'axios'

function App() {
  const getRequest = async () => {
    await axios({
      method: 'get',
      url: 'https://loserkeys.tk/flow/app/vue/2.5.16/vue.min.js',
    })
  }

  const sendRequest = async () => {
    await axios({
      method: 'post',
      url: '/flow/app/server',
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
  }


  const getAliyunCss =async () => {
      await axios({
      method: 'get',
      url: 'https://loserkeys.tk/flow/app/fe-resource/sl-developer-center/test/1.0.20/umi.css',
    })
  }
  return (
    <div className='App'>
      <div>clourdflire 测试demo</div>
      <button onClick={getRequest}>获取 一个js 资源</button>
      <br />
      <br />
      <button onClick={sendRequest}>提交一些请求</button>

      <br />
      <br />
      <button onClick={getAliyunCss}>获取一个 css 资源</button>
    </div>
  )
}

export default App
