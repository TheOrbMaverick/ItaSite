import { Canvas } from '@react-three/fiber'
import { Loader } from '@react-three/drei'
import { Suspense } from 'react';
import './style.css'
import ReactDOM from 'react-dom/client'
import ItaWorld from './ItaWorld'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
    <Canvas 
        shadows
        camera={ { 
            fov: 60,
            near: 0.1,
            far: 200,
            position: [44, 28, -50]
         } }
        >
        <Suspense fallback={null}>
            <ItaWorld />
        </Suspense>
    </Canvas>
    <Loader />
    </>
)