import { Canvas } from '@react-three/fiber'
import './style.css'
import ReactDOM from 'react-dom/client'
import ItaWorld from './ItaWorld'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas 
        camera={ { 
            fov: 60,
            near: 0.1,
            far: 200,
            position: [44, 28, -50]
         } }
        >
        <ItaWorld />
    </Canvas>
)