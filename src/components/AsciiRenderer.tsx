import * as THREE from 'three'
import { useEffect, useMemo, useLayoutEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { AsciiEffect } from 'three-stdlib'

export default ({
  renderIndex = 1,
  bgColor = '',
  fgColor = '',
  characters = ' .:-+*=%@#',
  invert = true,
  color = false,
  resolution = 0.15,
  className = ''
}) => {
  const { size, gl, scene, camera } = useThree()

  const effect = useMemo(() => {
    const effect = new AsciiEffect(gl, characters, { invert, color, resolution })
    effect.domElement.style.position = 'absolute'
    effect.domElement.style.top = '0px'
    effect.domElement.style.left = '0px'
    effect.domElement.style.pointerEvents = 'none'

    return effect
  }, [characters, invert, color, resolution])

  useLayoutEffect(() => {
    effect.domElement.className = className

    const style = effect.domElement.style
    style.color = fgColor
    style.backgroundColor = bgColor
    style.fontWeight = '100'
  }, [fgColor, bgColor, className])

  useEffect(() => {
    gl.domElement.style.opacity = '0'
    gl.domElement.parentNode?.appendChild(effect.domElement)
    return () => {
      gl.domElement.style.opacity = '1'
      gl.domElement.parentNode?.removeChild(effect.domElement)
    }
  }, [effect])

  useEffect(() => {
    effect.setSize(size.width, size.height)
  }, [effect, size])

  useFrame((state) => {
    effect.render(scene, camera)
  }, renderIndex)

  return <></>
}
