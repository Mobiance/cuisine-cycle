import React from 'react'
import Markdown from 'markdown-to-jsx'

const markdown = `Just a link: www.nasa.gov.`

// createRoot(document.body).render(
//   <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
// )
//
    //
const MarkdownRenderer = ({ text })=>{
    render(
        <Markdown>{text}</Markdown>
    )

}

export default MarkdownRenderer;
