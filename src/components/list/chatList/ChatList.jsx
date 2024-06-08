import { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import './chatList.css';
import './addUser/addUser.css'; // Assurez-vous d'importer les styles de l'animation
import AddUser from './addUser/addUser';

const ChatList = () => {
  const [AddMode, setAddMode] = useState(false);
  const addUserRef = useRef(null);

  const handleClickOutside = (event) => {
    if (addUserRef.current && !addUserRef.current.contains(event.target)) {
      setAddMode(false);
    }
  };

  useEffect(() => {
    if (AddMode) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [AddMode]);

  const handleAddClick = (event) => {
    event.stopPropagation();
    setAddMode(prev => !prev);
  };

  return (
    <div className='chatList'>
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder='Search' />
        </div>
        <img 
          src={AddMode ? "./minus.png" : "./plus.png"} 
          alt="" 
          className='add'
          onClick={handleAddClick} 
        />
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      {/* Répétez les items si nécessaire */}

      <CSSTransition
        in={AddMode}
        timeout={300}
        classNames="addUser"
        unmountOnExit
        nodeRef={addUserRef}
      >
        <div ref={addUserRef}>
          <AddUser />
        </div>
      </CSSTransition>
    </div>
  );
}

export default ChatList;
