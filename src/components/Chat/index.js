import React from 'react';
import Loaders from './Loaders';
import useHooks from './hooks'
import MainChatComponent from './MainChatComponent'
import './styles.css'

import './styles.css'

 const Index = () =>{
  
  const {
    headers,
    users,
    channels,
    handleClickOpenChannel,
    openChannel,
    loading,
    retrieveChannel,
    inviteUserToAChannel,
    createNewChannelWithUser,
    handleClickOpenUsers,
    openUsers,
    handleDrawerToggle,
    mobileOpen,
    allMessagesRetrieved,
    message,
    setMessage,    
    open,
    setOpen,    
    handleClickOpen,
    handleClose

  } = useHooks()  
      

  return (
      <>
    {loading ?               
      <Loaders
        loading={loading}
      />      
      :
     <MainChatComponent
    headers={headers}
    users={users}
    channels={channels}
    handleClickOpenChannel={handleClickOpenChannel}
    openChannel={openChannel}    
    retrieveChannel={retrieveChannel}
    inviteUserToAChannel={inviteUserToAChannel}
    createNewChannelWithUser={createNewChannelWithUser}
    handleClickOpenUsers={handleClickOpenUsers}
    openUsers={openUsers}
    handleDrawerToggle={handleDrawerToggle}
    mobileOpen={mobileOpen}
    allMessagesRetrieved={allMessagesRetrieved}
    message={message}
    setMessage={setMessage}
    open={open}
    setOpen={setOpen}
    handleClickOpen={handleClickOpen}
    handleClose={handleClose}
      />
     }

   </>
  );
}

export default Index
