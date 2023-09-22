
import './App.css'
import RefForm from './Components/Form/RefForm'
import ReusableForm from './Components/Form/ReusableForm'
import SimpleForm from './Components/Form/SimpleForm'
import StatefulForm from './Components/Form/StatefulForm'
// import HookForm from './HookForm/HookForm'

function App() {
  const handleSignUpSubmit = (data) => {
    console.log('signUp data:', data)

  }
  const handleProfileUpSubmit = (data) => {
    console.log('Update Profile data:', data)
  }


  return (
    <>


      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm formtitle={'signUp'} handlefun={handleSignUpSubmit}>
        <div>please signUp right now</div>
      </ReusableForm>
      <ReusableForm formtitle={'Profile Update'} btnTitle={'Update'} handlefun={handleProfileUpSubmit}>
        <div>
          update your profile
        </div>
      </ReusableForm>

    </>
  )
}

export default App
