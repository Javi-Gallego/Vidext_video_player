import { NavBar } from '../_components/navbar'

const InstructionsPage = () => {
  return (
    <div>
      <NavBar />
      <div className="flex justify-center items-center font-bold p-4">Instructions</div>
      <div className="flex justify-center items-center p-4">
        Unfortunately we did not have enough time to make a proper register page so if you want to use our free player you must use this credentials just as the Readme says
      </div>
      <div className="justify-center items-center p-1 bg-gray-200 font-bold">
        <div className="flex justify-center items-center p-1">
          Username: Vidext
        </div>
        <div className="flex justify-center items-center p-1">
          Password: 123456
        </div>
      </div>
      <div className="flex justify-center items-center p-4">
        Once you are logged in you will be redirected to the video player page
      </div>     
    </div>
  )
}

export default InstructionsPage