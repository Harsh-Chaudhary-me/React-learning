const mainContainer=document.querySelector('#root')
const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    content:'Click on me to navigate google.com'
}
function customRender(reactElement,mainContainer){
    const domELement=document.createElement(reactElement.type)
    domELement.innerHTML=reactElement.content
    domELement.setAttribute('href',reactElement.props.href)
    domELement.setAttribute('target',reactElement.props.target)
    
    mainContainer.appendChild(domELement)
}

customRender(reactElement,mainContainer);