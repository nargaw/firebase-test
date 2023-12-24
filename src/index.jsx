import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './experience/Experience'
import { OrbitControls } from '@react-three/drei'
import { Auth } from './components/auth'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
        {/* <Canvas shadows camera={{fov: 50, position: [0, 1.5, 5]}} >
            <OrbitControls />
            <Experience  />
        </Canvas> */}
        {/* <h1>Hello</h1> */}
        <Auth />
    </>
)