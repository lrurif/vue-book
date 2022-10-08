// const babelParser = require("@babel/parser")
// let jsx = `<div>
//     哈哈哈哈
//     <span>113212</span>
// </div>`
// console.log(babelParser.parse(jsx))

function render(obj, root) {
    const el = document.createElement(obj.tag);
    if(typeof obj.children === 'string') {
        const children = document.createTextNode(obj.children);
        el.appendChild(children);
    }else if(Array.isArray(obj.children)) {
        obj.children.forEach(child => render(child, el));
    }
    root.appendChild(el);
}
// render(obj, document.body);



function renderer(vnode, container) {
    if(typeof vnode.tag === 'string') {
        mountElement(vnode, container)
    }else if(typeof vnode.tag === 'function') {
        mountComponent(vnode, container)
    }
}
function mountElement(vnode, container) {
    let el = document.createElement(vnode.tag);
    if(Array.isArray(vnode.children)) {
        vnode.children.forEach(child => renderer(child, el))
    }else if(typeof vnode.children === 'string') {
        let text = document.createTextNode(vnode.children);
        el.append(text)
    }
    container.append(el)
}
function mountComponent(vnode, container) {
    let node = vnode.tag();
    renderer(node, container)
}

const MyComponent = function() {
    return {
        tag: 'div',
        children: 'children'
    }
}
const obj = {
    tag: 'div',
    children: [{
        tag: 'span',
        children: 'hello world'
    },{
        tag: 'span',
        children: '哈哈哈哈'
    },{
        tag: MyComponent,
    }],
}

renderer(obj, document.body);
