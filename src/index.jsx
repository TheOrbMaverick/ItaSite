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
    <Loader
        containerStyles={{ 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100vh'
        }} // Flex layout styles

        innerStyles={{
            width: '200px',
            height: '20px',
            borderRadius: '10px',
            background: '#eee',
            overflow: 'hidden',
        }} // Inner container styles

        barStyles={{
            height: '100%',
            background: '#f44336',
            animation: 'progress 2s linear infinite',
        }} // Loading-bar styles

        dataStyles={{
            color: '#fff',
            fontSize: '18px',
            textAlign: 'center',
        }} // Text styles

        dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`} // Text

        initialState={(active) => active} // Initial black out state
        />
    </>
)