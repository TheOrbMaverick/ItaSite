import { Canvas } from '@react-three/fiber'
import './style.css'
import ReactDOM from 'react-dom/client'
import ItaWorld from './ItaWorld'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas>
        <ItaWorld />
    </Canvas>
)