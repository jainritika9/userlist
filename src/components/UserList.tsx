import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
type AppProps = {
    first_name: string;
    last_name:string;
    avatar:string;
    email:string;
  };
function UserList({first_name,last_name,email,avatar}:AppProps){
  return (
    <div className='flex p-20 bg-gray-100 '>
        <Card sx={{ display: 'flex',borderRadius:5 }} className='hover:scale-125'>
        <CardMedia
        component="img"
        sx={{ width: 151,height:200 }}
        image={avatar}
        alt=""
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h4">
            {first_name} {last_name}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" component="div">
            {email}
          </Typography>
        </CardContent>
      </Box>
    </Card> 
    </div>
  )
}

/*
const UserList = ({ list }: TUserProps) => {
  return (
    <div className="container">
      {list!.map(generateUserCard) : null}
    </div>
  )
}*/
export default UserList
