import { useEffect, useState } from "react"

export const Message = () => {
    
    const [coords, setCoords] = useState({x:0, y:0});

    useEffect(() => {
    //   console.log("Message Mounted")
        const onMouseMove = ({ x, y }: { x: number, y: number }) => {
            setCoords({x,y})
        }
        window.addEventListener('mousemove', onMouseMove)
      return () => {
        window.removeEventListener('mousemove', onMouseMove)
      }
    }, [])
    

  return (
    <>
        <h4>Usuario ya existe</h4>
        { JSON.stringify(coords)}
    </>
  )
}
