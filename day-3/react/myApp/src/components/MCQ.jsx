import React,{useState} from 'react';

const MCQ = () => {
  const[selectOption,setSelectOption]  = useState([]);

  function handle(event){
    setSelectOption(event.target.value);
  }
  return (
    <div>
      <label htmlFor='l1' >1.React primarily used for? <br></br>
      <input type='radio' value="option1" name='option' checked={selectOption === 'option1'}/>Data Science
      <br />
      <input type='radio' value="option2" name='option' checked={selectOption === 'option2'}/>Mobile Apps
      <br />
      <input type='radio' value="option3" name='option' checked={selectOption === 'option4'}/>Building User Interfaces
      <br />
      <input type='radio' value="option5" name='option' checked={selectOption === 'option1'}/>Networking
      </label>
      <br /><br /><br />

      <label htmlFor='l1' >1.React primarily used for? <br></br>
      <input type='radio' value="option1" name='option' checked={selectOption === 'option1'}/>Data Science
      <br />
      <input type='radio' value="option1" name='option' checked={selectOption === 'option1'}/>Mobile Apps
      <br />
      <input type='radio' value="option1" name='option' checked={selectOption === 'option1'}/>Building User Interfaces
      <br />
      <input type='radio' value="option1" name='option' checked={selectOption === 'option1'}/>Networking
      </label>
      <br /><br /><br />

      <label htmlFor='l1' >1.React primarily used for? <br></br>
      <input type='radio' value="option1" name='option' checked={selectOption === 'option1'}/>Data Science
      <br />
      <input type='radio' value="option1" name='option' checked={selectOption === 'option1'}/>Mobile Apps
      <br />
      <input type='radio' value="option1" name='option' checked={selectOption === 'option1'}/>Building User Interfaces
      <br />
      <input type='radio' value="option1" name='option' checked={selectOption === 'option1'}/>Networking
      </label>
      <br /><br /><br />

      <label htmlFor='l1' >1.React primarily used for? <br></br>
      <input type='radio' value="option1" name='option' checked={selectOption === 'option1'}/>Data Science
      <br />
      <input type='radio' value="option1" name='option' checked={selectOption === 'option1'}/>Mobile Apps
      <br />
      <input type='radio' value="option1" name='option' checked={selectOption === 'option1'}/>Building User Interfaces
      <br />
      <input type='radio' value="option1" name='option' checked={selectOption === 'option1'}/>Networking
      </label>
      <br /><br /><br />


      <label htmlFor='l1' >1.React primarily used for? <br></br>
      <input type='radio' value="option1" name='option' checked={selectOption === 'option1'}/>Data Science
      <br />
      <input type='radio' value="option1" name='option' checked={selectOption === 'option1'}/>Mobile Apps
      <br />
      <input type='radio' value="option1" name='option' checked={selectOption === 'option1'}/>Building User Interfaces
      <br />
      <input type='radio' value="option1" name='option' checked={selectOption === 'option1'}/>Networking
      </label>
      <br /><br /><br />
    </div>
  )
}

export default MCQ
