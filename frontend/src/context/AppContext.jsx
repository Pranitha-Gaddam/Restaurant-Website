import React, { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();

const initialState = {
  isMenuOpen: false,
  currentSection: 'hero',
  reservations: [],
  notifications: [],
  theme: 'default'
};

const appReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return { ...state, isMenuOpen: !state.isMenuOpen };
    case 'SET_MENU_OPEN':
      return { ...state, isMenuOpen: action.payload };
    case 'SET_CURRENT_SECTION':
      return { ...state, currentSection: action.payload };
    case 'ADD_RESERVATION':
      return { 
        ...state, 
        reservations: [...state.reservations, action.payload] 
      };
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifications: [...state.notifications, {
          id: Date.now(),
          ...action.payload
        }]
      };
    case 'REMOVE_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.filter(n => n.id !== action.payload)
      };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const toggleMenu = () => dispatch({ type: 'TOGGLE_MENU' });
  const setMenuOpen = (isOpen) => dispatch({ type: 'SET_MENU_OPEN', payload: isOpen });
  const setCurrentSection = (section) => dispatch({ type: 'SET_CURRENT_SECTION', payload: section });
  const addReservation = (reservation) => dispatch({ type: 'ADD_RESERVATION', payload: reservation });
  const addNotification = (notification) => dispatch({ type: 'ADD_NOTIFICATION', payload: notification });
  const removeNotification = (id) => dispatch({ type: 'REMOVE_NOTIFICATION', payload: id });

  return (
    <AppContext.Provider value={{
      ...state,
      toggleMenu,
      setMenuOpen,
      setCurrentSection,
      addReservation,
      addNotification,
      removeNotification
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};