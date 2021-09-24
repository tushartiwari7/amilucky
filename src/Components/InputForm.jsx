import React,{useState} from "react"
import { useHistory } from "react-router"
import { FormGroup,DatePicker,DatePickerInput, NumberInput, Button } from "carbon-components-react"
import '../graphics/inputform.css'
import amILucky from "../Utils/amILucky"

const InputForm = () => {
  const [birthday, setbirthday] = useState(new Date());
  const [luckyNo, setluckyNo] = useState(0);
  const updateBirthday = (evt) => {
    setbirthday(evt[0]);
  }

  let history = useHistory();

  return (
        <>
        <FormGroup
        className="input-form"
        legendId="formgroup-legend-id"
        legendText="Let's find out"
        style={{ maxWidth: '400px',fontSize: '1.25rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <DatePicker className="datepicker"
            onChange={updateBirthday}
            dateFormat="Y-m-d"
            datePickerType="single">
            <DatePickerInput
              className="date-input"
              style={ { textAlign: 'initial'} }
              placeholder="mm/dd/yyyy"
              labelText="Your Birth Date"
              id="date-picker-single"
            />
          </DatePicker>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <NumberInput
            id="carbon-number"
            label="Your Lucky Number"
            max={10}
            placeholder="Any Number upto 10"
            invalidText="Number is not valid"
            onChange={(e)=>setluckyNo(Number(e.imaginaryTarget.value))}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <Button iconDescription="Are you Lucky"
          onClick={()=> {
            const result = amILucky(birthday, luckyNo);
            result ? history.push('/lucky') : history.push('/unlucky');
          }}
          > Reveal</Button>
        </div>
      </FormGroup>
        </> 
    )
}
export default InputForm;