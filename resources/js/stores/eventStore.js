import { create } from 'zustand'

export const eventStore = create((set, get) => {
  return {
    ceilWallHide: true,
    appearText: false,
    appearAboutText: false,
    appearContactText: false,
    activeKeyboard: false,
    isScrollEnable: true,
    animateCeilWall: () => {
      const animateState = get().ceilWallHide
      set({ceilWallHide: !animateState})
    },
    animateText: () => {
      const animateState = get().appearText
      set({appearText:!animateState})
    },
    animateAboutText: () => {
      const animateState = get().appearAboutText
      set({appearAboutText: !animateState})
    },
    animateContactText: () => {
      const animateState = get().appearContactText
      set({appearContactText: !animateState})
    },
    activateKeyboard: (bool) => {
      set({activeKeyboard: bool})
      console.log(`keyboard is turn ${bool ? "ON": "OFF"}`);
    },
    scrollEnabled: (bool) => {
      set({isScrollEnable: bool})
    }

  }
})
