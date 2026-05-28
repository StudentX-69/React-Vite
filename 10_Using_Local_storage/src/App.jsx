const App = () => {
  const user = {
    user : 'Abhay',
    age : 20 ,
    city : 'Bhopal'
  }
  localStorage.setItem('user',JSON.stringify(user))
  const usera = JSON.parse(localStorage.getItem('user'))
  console.log(typeof(usera))
  return (
    <div>
      
    </div>
  )
}

export default App
