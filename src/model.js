import image from './assets/JS.png'
import { ImageBlock, TextBlock, TextColumnsBlock, TitleBlock} from './classes/blocks'

const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid culpa dolore ea ipsa iure maiores nobis quam reprehenderit voluptatum.'
export const model = [
    new TitleBlock('JavaScript site constructor', {
        tag: 'h2',
        styles: 'background:linear-gradient(to right, #ff0099, #493240); color:#fff; text-align:center;'
    }),
    new ImageBlock(image, {
        styles: 'padding:2rem 0; display:flex; justify-content:center;',
        alt:'me-img',
        imageStyles:'width:300px; height:auto'
    }),
    new TextBlock(text, {
        styles: 'background:linear-gradient(to bottom, #8e2de2, #4a00e0); padding:2rem 0; color:#fff'
    }),
    new TextColumnsBlock(['Native JS', 'Using classes', 'Create sites'], {
        styles: 'background: linear-gradient(to left , #f2994c, #f2c94c);padding:1rem; font-weight:bold solid aqua;'
    })
]