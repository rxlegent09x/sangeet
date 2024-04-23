//simple_random_math_question

export const getQ = () => {
    const x = Math.floor(Math.random() * 2);
    if (x == 1) {
      //arithmetic
      const num1 = Math.floor(Math.random() * 11);
      const num2 = Math.floor(Math.random() * 11);
      const signArray = ["+", "-", "*"];
      const sign = signArray[Math.floor(Math.random() * 3)];
      const que = `${num1}${sign}${num2}=?`;
      const ans = eval(que.slice(0, -2));
  
      return ([que, ans]);
  
    }

    else {
      //greater&Lesser
      const num1 = Math.floor(Math.random() * 101);
      const num2 = Math.floor(Math.random() * 101);
      const num3 = Math.floor(Math.random() * 101);
      const q = Math.floor(Math.random() * 2);
      if (q == 1) {
        //greater than
        return ([`find biggest ${num1}, ${num2}, ${num3} ?`, Math.max(num1, num2, num3)]);
      }
      else {
        //less than
        return ([`find smallest ${num1}, ${num2}, ${num3} ?`, Math.min(num1, num2, num3)]);
      }
  
    }
  }
  


  export const TimeZ = () => {
    const t = new Date();
    const h = t.getHours();
    const now = ((h >= 5 && h < 12) ? "Morning" : (h >= 12 && h < 13) ? "Noon" : (h >= 13 && h < 17) ? "Afternoon" : (h >= 17 && h < 20) ? "Evening" : "Night");
    return (now)
  }



