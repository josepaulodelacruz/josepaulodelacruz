import ReactMarkdown  from 'react-markdown'

function Viewer({value = ""}) {
  return <ReactMarkdown>
    {value}
  </ReactMarkdown>
}

export default Viewer
