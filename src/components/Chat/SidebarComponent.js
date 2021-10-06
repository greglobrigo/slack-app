import React, { useState } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Toolbar from "@mui/material/Toolbar";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import AddIcon from "@mui/icons-material/Add";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ForumIcon from "@mui/icons-material/Forum";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import FormDialoguesComponent from "./FormDialoguesComponent";
import HomeIcon from "@mui/icons-material/Home";
import SendIcon from "@mui/icons-material/Send";
import GroupIcon from "@mui/icons-material/Group";
import Typography from '@mui/material/Typography';


const SidebarComponent = ({
  handleClickOpenChannel,
  openChannel,
  channels,
  createNewChannelWithUser,
  handleClickOpenUsers,
  users,
  openUsers,
  setSelectedChannel,
  intervalRetrieveMessages,
  returnToHome,
  sortByEmail,
  searchResults,
  intervalRetrieveMessagesWithUser,
  isCreateChannel,
  setIsCreateChannel,  
  setGetChannel,
  retrieveChannelUsers   

}) => {
  const [openForInviteUser, setOpenForInviteUser] = useState(false);
  const handleClickOpenForInviteUser = () => {
    setOpenForInviteUser(true);
  };
  const handleCloseForInviteUser = () => {
    setOpenForInviteUser(false);
  };

  const [openForSendDirectMessage, setOpenForSendDirectMessage] =
    useState(false);
  const handleClickOpenSendDirectMessage = () => {
    setOpenForSendDirectMessage(true);
  };
  const handleCloseForSendDirectMessage = () => {
    setOpenForSendDirectMessage(false);
  };

  return (
    <>   
     <Toolbar 
          sx={{bgcolor: "purple"}}
        />  
      <div className="sidebar-container channel-list">


      <div className="side-navigation"> 

      <List>

          <ListItemButton className="side-navigation-item" onClick={() => {returnToHome()}}>            
          <HomeIcon />              
          <span style={{fontSize:"0.75rem"}}>  
          Home
          </span>                
          </ListItemButton>

          <ListItemButton className="side-navigation-item" onClick={() => handleClickOpenForInviteUser()}>
            <GroupAddIcon />                      
            <span style={{fontSize:"0.75rem"}}>  
            Add
          </span> 
          <span style={{fontSize:"0.75rem"}}>  
            Channel
          </span> 
          </ListItemButton>
          
          <ListItemButton className="side-navigation-item" onClick={() => handleClickOpenSendDirectMessage()}>            
              <ForumIcon />    
          <span style={{fontSize:"0.75rem"}}>  
          Direct
          </span> 
          <span style={{fontSize:"0.75rem"}}>  
             Message
          </span>        
          </ListItemButton>

     </List>

       
      

        </div>




      <div className="main-sidebar">    
        <List>   
            <div style={{display: 'flex'}}>                   
              <GroupIcon sx={{mt: 0.5, mr: 1}} />            
            <ListItemText
              primary={`Channels (${channels ? channels.length : 0})`}/>    
              </div>
              
            <List component="div" disablePadding>           
              {channels ? (
                channels.map((channel) => {
                  return (<div key={channel.id}>
                    
                    <ListItemButton 
                      sx={{ pl: 4 }}
                     
                      onClick={() => {
                        intervalRetrieveMessages(channel.id);
                        setSelectedChannel(channel);
                        retrieveChannelUsers(channel.id)
                      }}
                    >
                      <ListItemText primary={`# ${channel.name}`} />
                    </ListItemButton>
                    
                    </div> );
                })
              ) : (
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary={`No users Available`} />
                </ListItemButton>
              )}              
            </List>
           
              
          {/* </Collapse> */}
        </List>

        

        <List>
         
        </List>

        


        

        {/* <List>
          <ListItemButton onClick={handleClickOpenUsers}>
            <ListItemIcon>
              <ChatBubbleIcon />
            </ListItemIcon>
            <ListItemText
              primary={`All Users (reduced to ${users.slice(0, 20).length})`}
            />
            {openUsers ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
          <Collapse in={openUsers} timeout="auto" unmountOnExit>
            <List>
              {users.slice(0, 20).map((val) => {
                return (
                  <ListItemButton sx={{ pl: 4 }} key={val.id}>
                    <ListItemText primary={`${val.uid}`} />
                  </ListItemButton>
                );
              })}
            </List>
          </Collapse>
        </List> */}

        
      </div>
      </div>

      {/* For Create Channel */}
      <FormDialoguesComponent
        open={openForInviteUser}
        handleClose={handleCloseForInviteUser}
        dialogTitleText={"Enter New Channel Name You Want to Create"}
        label={"Channel Name"}
        type={`text`}
        createNewChannelWithUser={createNewChannelWithUser}
        isCreateChannel={isCreateChannel}
        setIsCreateChannel={setIsCreateChannel}
        setGetChannel={setGetChannel}
      />
      {/* For Send a DM Modal */}
      <FormDialoguesComponent
        open={openForSendDirectMessage}
        handleClose={handleCloseForSendDirectMessage}
        dialogTitleText={"Who do you want to send a message to?"}
        label={"Email"}
        type={`text`}
        users={users}
        sortByEmail={sortByEmail}
        searchResults={searchResults}
        intervalRetrieveMessagesWithUser={intervalRetrieveMessagesWithUser}
      />
    </>
  );
};

export default SidebarComponent;
