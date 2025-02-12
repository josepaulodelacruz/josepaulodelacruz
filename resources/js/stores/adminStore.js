import { create } from 'zustand'

export const adminStore = create((set, get) => {
  return {
    isSidebarOpen: true,
    toggledMenuOption: null,
    triggerSidebar: () => {
      const _isSidebarOpen = get().isSidebarOpen;
      set({isSidebarOpen: !_isSidebarOpen})
    },
    setToggledMenuOption: (option) => {
      set({toggledMenuOption: option})
    }
  }
});
