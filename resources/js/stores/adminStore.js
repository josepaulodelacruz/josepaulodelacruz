import { create } from 'zustand'

export const adminStore = create((set, get) => {
  return {
    isSidebarOpen: true,
    triggerSidebar: () => {
      const _isSidebarOpen = get().isSidebarOpen;
      set({isSidebarOpen: !_isSidebarOpen})
    }
  }
});
