import { useEffect, useState } from 'react'
import Terminal, { ColorMode, TerminalOutput, TerminalInput } from 'react-terminal-ui';
import './index.css'

const date = new Date()
const currentDate = `${date.toDateString()}`
const help = [
  <TerminalOutput key={1}>Last Login { currentDate } </TerminalOutput>,
  <TerminalOutput key={2}></TerminalOutput>,
  <TerminalOutput key={3}>The following example commands are provided:</TerminalOutput>,
]
const folder = [
  <TerminalOutput key={4}>Blogs</TerminalOutput>,
  <TerminalOutput key={5}>Projects</TerminalOutput>,
  <TerminalOutput key={6}>CONTACT.MD</TerminalOutput>,
]

export default function TerminalPage() {

  const [lineData, setLineData] = useState([]);

  useEffect(() => {
    setLineData(help)
  }, [])

  function onInput (input) {
    let ld = [...lineData];
    ld.push(<TerminalInput>{input}</TerminalInput>);
    if (input.toLocaleLowerCase().trim() === 'clear' || input.toLocaleLowerCase().trim() === 'cls') {
      setLineData([])
      return
    } else if(input.toLocaleLowerCase().trim() === 'ls') {
      ld.push(folder)
    } else if(input.toLocaleLowerCase().trim() === "cd") {
      ld.push(<TerminalOutput key={ld.length}>Please indicate the path.</TerminalOutput>);
    } else if(input.toLocaleLowerCase().trim().includes('cd projects')) {
      ld.push(<TerminalOutput key={ld.length}>Currently building the backend. Thank you for your patience.</TerminalOutput>);
    } else if(input.toLocaleLowerCase().trim().includes('cd blogs')) {
      ld.push(<TerminalOutput key={ld.length}>Currently building the backend. Thank you for your patience.</TerminalOutput>);
    } else if(input.toLocaleLowerCase().trim().includes('cd contact.md'))  {
      ld.push(<TerminalOutput key={ld.length}>You can email me at delacruzjosepaulo@gmail.com</TerminalOutput>);
    } else if (input) {
      ld.push(<TerminalOutput key={ld.length}>Unrecognized command</TerminalOutput>);
    }
    setLineData(ld);
  }

  return (
    <div className="terminal-container">
      <Terminal name='I-term' colorMode={ ColorMode.Dark }  onInput={ onInput }>
        {lineData}
      </Terminal>
    </div>
  );
}