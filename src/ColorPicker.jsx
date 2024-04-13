import { useState } from "react"
function ColorPicker () {
  const [color, setColor] = useState();

  const handleChangeColor = (e) => {
    setColor(e.target.value)
  }
  let bc = {
    backgroundColor: color
  }

  return(
    <div className="color-picker">
      <h1 style={{color: "black"}}>Color Picker</h1>
      <div className="color-display" style={bc}>
        <p>Selected color: {color}</p>
      </div>
      <label>Select a color</label>
      <input 
        type="color" 
        value={color} 
        onChange={handleChangeColor}
      />
    </div>
  )
}
export default ColorPicker

