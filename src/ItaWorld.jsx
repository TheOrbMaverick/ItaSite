import { React, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Float, MeshReflectorMaterial, Text, OrbitControls, useGLTF, useTexture } from '@react-three/drei';
import { MeshStandardMaterial } from 'three'; // Import MeshStandardMaterial
import * as THREE from 'three'


export default function itaWorld() {

    const trashbagRef = useRef()
    const burgerRef = useRef()

    const gradientTexture = useTexture('./plane.jpg')
    gradientTexture.flipY = false
    //Models and Materials

    //STALL
    const stallModel = useGLTF('./stall.glb')
    const stallTexture = useTexture('./stall.jpg')
    stallTexture.flipY = false

    //ENVIRONS
    const environsModel = useGLTF('./environs.glb')
    const environsTexture = useTexture('./environs.jpg')
    environsTexture.flipY = false

    //POLE
    const poleModel = useGLTF('./pole.glb')
    const poleTexture = useTexture('./pole.jpg')
    poleTexture.flipY = false

    //TRASH
    const trashModel = useGLTF('./trash.glb')
    const trashBakedTexture = useTexture('./trash.jpg')
    trashBakedTexture.flipY = false

    //BURGER
    const burgerModel = useGLTF('./burger.glb')
    const burgerTexture = useTexture('./burger.jpg')
    burgerTexture.flipY = false

    //BIN COVER
    const binModel = useGLTF('./binCover.glb')
    const binCoverTexture = useTexture('./binCover.jpg')
    binCoverTexture.flipY = false

    //BREAD
    const breadModel = useGLTF('./bread.glb')
    const breadTexture = useTexture('./bread.jpg')
    breadTexture.flipY = false

    // Create a custom material
    const stallMaterial = new MeshStandardMaterial({
        map: stallTexture, // Assign the texture as the map
        // Add more properties here as needed
    });

    // Assign the custom material to all meshes in the model's scene
    stallModel.scene.traverse((child) => {
        if (child.isMesh) {
            child.material = stallMaterial;
        }
    });



    // Create a custom material
    const environsMaterial = new MeshStandardMaterial({
        map: environsTexture, // Assign the texture as the map
        side: THREE.DoubleSide
        // Add more properties here as needed
    });

    // Assign the custom material to all meshes in the model's scene
    environsModel.scene.traverse((child) => {
        if (child.isMesh) {
            child.material = environsMaterial;
        }
    });



    // Create a custom material
    const poleMaterial = new MeshStandardMaterial({
        map: poleTexture, // Assign the texture as the map
        side: THREE.DoubleSide
        // Add more properties here as needed
    });

    // Assign the custom material to all meshes in the model's scene
    poleModel.scene.traverse((child) => {
        if (child.isMesh) {
            child.material = poleMaterial;
        }
    });



    // Create a custom material
    const binMaterial = new MeshStandardMaterial({
        map: binCoverTexture, // Assign the texture as the map
        side: THREE.DoubleSide
        // Add more properties here as needed
    });

    // Assign the custom material to all meshes in the model's scene
    binModel.scene.traverse((child) => {
        if (child.isMesh) {
            child.material = binMaterial;
        }
    });



    // Create a custom material
    const burgerMaterial = new MeshStandardMaterial({
        map: burgerTexture, // Assign the texture as the map
        // Add more properties here as needed
    });

    // Assign the custom material to all meshes in the model's scene
    burgerModel.scene.traverse((child) => {
        if (child.isMesh) {
            child.material = burgerMaterial;
        }
    });



    // Create a custom material
    const breadMaterial = new MeshStandardMaterial({
        map: breadTexture, // Assign the texture as the map
        // Add more properties here as needed
    });

    // Assign the custom material to all meshes in the model's scene
    breadModel.scene.traverse((child) => {
        if (child.isMesh) {
            child.material = breadMaterial;
        }
    });

    return <>

        <color args={[ '#000000' ]} attach='background' />

        <OrbitControls 
            minDistance={10}
            maxDistance = {80}
            maxPolarAngle = {Math.PI/2}
            />

        {/* <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } /> */}
        <ambientLight intensity={ .6 } />
        
        <primitive object={stallModel.scene}/>
        <primitive object={environsModel.scene}/>
        <primitive object={poleModel.scene}/>
        <primitive object={trashModel.scene}/>
        <primitive object={burgerModel.scene}/>
        <primitive object={binModel.scene}/>
        <primitive object={breadModel.scene}/>

            {/* Infinite plane */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
            <planeGeometry args={[1000, 1000]} />
            <meshBasicMaterial map={gradientTexture} />
        </mesh>

        {/* color={0x948a7b} */}

        <Float>
        <Text
            fontSize={2}
            color={0xf2d2b1}
            position={[-30, 16, 1]}
            rotation-y={40}
            maxWidth={14}
            textAlign='center'
        >
            Hi My name is Ita and I talk to computers
        </Text>

        </Float>
        

    </>
}