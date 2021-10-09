
import './App.css';

function App() {
  return (
    <div className="App">
      <p> welcome to our form all you need to do is type in your email and your password it's simple then click on submit </p>
     <form>
  <div class="form-group">
    <label for='exampleInputEmail1'>Email address</label>
    <input 
    type='email'
     class='formControl'
      id='exampleInputEmail1'
       ariaDescribedby='emailHelp'
        placeholder='Enter email'
        />
    <small id='emailHelp' class='FormTextTextMuted'>We'll never share your email with anyone else.</small>
  </div>
  <div className='formGroup'>
    <label for='exampleInputPassword1'>Password</label>
    <input
     type='password'
      class='formControl'
       id='exampleInputPassword1'
        placeholder='Password'
        />
  </div>
  <div className='formGroup formCheck'>
    <input
     type='checkbox'
      class='form-check-input' 
      id='exampleCheck1'
      />
    <label class='formCheckLabel' for='exampleCheck1'>Check me out</label>
  </div>
  <button type="submit" class='BtnBtnPrimary'>Submit</button>
</form>
<p className='thx'>thank you for using our website</p>
    </div>
  );
}

export default App;
