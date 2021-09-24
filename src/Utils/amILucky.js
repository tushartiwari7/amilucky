// import {useHistory} from "react-router-dom";

const AmILucky = (birthday,luckyNo) => {
    // let history = useHistory();
    const typeDate = new Date(birthday);
    const destructuredDate = [
       typeDate.getDate(),
       typeDate.getMonth()+1,
       typeDate.getFullYear()
    ]
    const getDigitsArray = () => {
      const digits = [];
    
      destructuredDate.forEach((element) => {
        while(element > 0){
          digits.push(element % 10);
          element = Math.floor(element / 10);
        }
      })
      return digits;
    }
  
    let sumofDates = 0;
    getDigitsArray().forEach(element => sumofDates+=element)

    if (sumofDates%luckyNo === 0)
        return true 
    else
        return false;

  }

export default AmILucky;
