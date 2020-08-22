import image from './assets/JS.png'
import { ImageBlock, TextBlock, TextColumnsBlock, TitleBlock} from './classes/blocks'
import {css} from "./utils";

const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid culpa dolore ea ipsa iure maiores nobis quam reprehenderit voluptatum.'
export const model = [
    new TitleBlock('Lite JavaScript site constructor', {
        tag: 'h2',
        styles: css({
            background:'linear-gradient(to right, #ff0099, #493240)',
            color:'#fff',
            padding:'1.5rem',
            'text-align': 'center'
        })
    }),
    new ImageBlock(image, {
        styles:css({
            padding:'2rem',
            display:'flex',
            justifyContent:'center'
        }) ,
        alt:'me-img',
        imageStyles:'width:300px; height:auto'
    }),
    new TextBlock(text, {
        styles:'background:linear-gradient(to bottom, #8e2de2, #4a00e0); padding:2rem 0; color:#fff'
    }),
    new TextColumnsBlock(['Native JS', 'Using classes', 'Create sites'], {
        styles: 'background: linear-gradient(to left , #f2994c, #f2c94c);padding:1rem; font-weight:bold solid aqua;'
    })
]