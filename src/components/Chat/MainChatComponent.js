import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import SidebarComponent from './SidebarComponent';
import TopBarComponent from './TopBarComponent'
import ChatBodyComponent from './ChatBodyComponent';


const MainChatComponent = ({
    props,
    headers,
    users,
    channels,
    handleClickOpenChannel,
    openChannel,
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
    isAChannelSelected,
    selectedChannel,
    setSelectedChannel,
    createMessageInAChannel,
    intervalRetrieveMessages,
    userID,
    retrieveAllMessagesWithUser
  }
) => {
  const drawerWidth = 300;
//   const {window} = props;
//   const container =
//     window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{display: "flex"}}>
        <CssBaseline />
       <TopBarComponent
         drawerWidth={300}
         headers={headers}
         handleDrawerToggle={handleDrawerToggle}
         isAChannelSelected={isAChannelSelected}  
         selectedChannel={selectedChannel}         
         inviteUserToAChannel={inviteUserToAChannel}
         userID={userID}   
       />
        <Box
          component="nav"
          sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
          aria-label="mailbox folders"
        >          
          <Drawer
            // container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: {xs: "block", sm: "none"},
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {
              <SidebarComponent
                handleClickOpenChannel={handleClickOpenChannel}
                openChannel={openChannel}
                channels={channels}
                retrieveChannel={retrieveChannel}
                inviteUserToAChannel={inviteUserToAChannel}
                createNewChannelWithUser={createNewChannelWithUser}
                handleClickOpenUsers={handleClickOpenUsers}
                users={users}
                openUsers={openUsers}
                selectedChannel={selectedChannel}
                setSelectedChannel={setSelectedChannel}
                intervalRetrieveMessages={intervalRetrieveMessages}
                retrieveAllMessagesWithUser={retrieveAllMessagesWithUser}                              
              />
            }
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: {xs: "none", sm: "block"},
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {
              <SidebarComponent
                handleClickOpenChannel={handleClickOpenChannel}
                openChannel={openChannel}
                channels={channels}
                retrieveChannel={retrieveChannel}
                inviteUserToAChannel={inviteUserToAChannel}
                createNewChannelWithUser={createNewChannelWithUser}
                handleClickOpenUsers={handleClickOpenUsers}
                users={users}
                openUsers={openUsers}   
                selectedChannel={selectedChannel}
                setSelectedChannel={setSelectedChannel}   
                intervalRetrieveMessages={intervalRetrieveMessages}
                retrieveAllMessagesWithUser={retrieveAllMessagesWithUser}                                                     
              />
            }
          </Drawer>
        </Box>
        <ChatBodyComponent
        allMessagesRetrieved={allMessagesRetrieved}
        setMessage={setMessage}
        message={message}
        createMessageInAChannel={createMessageInAChannel}
        />
      </Box>
    </>
  );
};

export default MainChatComponent
