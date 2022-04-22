import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header'
import UserList from './components/UserList'
import Button from '@mui/material/Button';
function App() {
  const [users,setUsers]=useState([])
  const [currentPage,setCurrentPage]=useState(1)

  const CurrentPage=(direction:string)=>{
    if (direction == 'previous') {
      setCurrentPage(currentPage-1);
    }
    else if (direction == 'next') {
      setCurrentPage(currentPage+1);
    }
  }
  useEffect(() => {
    fetch("https://reqres.in/api/users")
    .then(response => response.json())
    .then(data => setUsers(data.data))
  },[])
  return (
    <div>
      <Header/>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
      {users.slice((currentPage * 3) - 3, (currentPage * 3)).map((item)=>{
        return(
          <div>
            <UserList first_name={item['first_name']} last_name={item['last_name']} 
          avatar={item['avatar']} email={item['email']}/>
          </div>
        )
      })}
      </div>
      <div className='bg-gray-100 flex justify-between'>
      <Button size='small' onClick={()=>CurrentPage('previous')}>
    Previous
  </Button>
  <Button size='small' onClick={()=>CurrentPage('next')}>
    Next
  </Button>
      </div>
    </div>
  );
}

export default App;
