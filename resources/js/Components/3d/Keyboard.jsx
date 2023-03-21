import { useEffect, useRef, useState } from 'react'
import { Edges } from '@react-three/drei'
import keydown from '../../assets/audio/keydown.mp3'
import keyup from '../../assets/audio/keyup.mp3'
import { eventStore } from '../../stores/eventStore'


export default function Keyboard({model, enterKeyPress}){
  const { activeKeyboard } = eventStore(state => state)
  const keyDown = new Audio(keydown)
  const keyUp = new Audio(keyup)

  const obj = model.children[0];
  obj[obj.name] = useRef();

  const obj1 = model.children[1];
  obj1[obj1.name] = useRef();

  const obj2 = model.children[2];
  obj2[obj2.name] = useRef();

  const obj3 = model.children[3];
  obj3[obj3.name] = useRef();

  const obj4 = model.children[4];
  obj4[obj4.name] = useRef();

  const obj5 = model.children[5];
  obj5[obj5.name] = useRef();

  const obj6 = model.children[6];
  obj6[obj6.name] = useRef();

  const obj7 = model.children[7];
  obj7[obj7.name] = useRef();

  const obj8 = model.children[8];
  obj8[obj8.name] = useRef();

  const obj9 = model.children[9];
  obj9[obj9.name] = useRef();

  const obj10 = model.children[10];
  obj10[obj10.name] = useRef();

  const obj11 = model.children[11];
  obj11[obj11.name] = useRef();

  const obj12 = model.children[12];
  obj12[obj12.name] = useRef();

  const obj13 = model.children[13];
  obj13[obj13.name] = useRef();

  const obj14 = model.children[14];
  obj14[obj14.name] = useRef();

  const obj15 = model.children[15];
  obj15[obj15.name] = useRef();

  const obj16 = model.children[16];
  obj16[obj16.name] = useRef();

  const obj17 = model.children[17];
  obj17[obj17.name] = useRef();

  const obj18 = model.children[18];
  obj18[obj18.name] = useRef();

  const obj19 = model.children[19];
  obj19[obj19.name] = useRef();

  const obj20 = model.children[20];
  obj20[obj20.name] = useRef();

  const obj21 = model.children[21];
  obj21[obj21.name] = useRef();

  const obj22 = model.children[22];
  obj22[obj22.name] = useRef();

  const obj23 = model.children[23];
  obj23[obj23.name] = useRef();

  const obj24 = model.children[24];
  obj24[obj24.name] = useRef();

  const obj25 = model.children[25];
  obj25[obj25.name] = useRef();

  const obj26 = model.children[26];
  obj26[obj26.name] = useRef();

  const obj27 = model.children[27];
  obj27[obj27.name] = useRef();

  const obj28 = model.children[28];
  obj28[obj28.name] = useRef();

  const obj29 = model.children[29];
  obj29[obj29.name] = useRef();

  const obj30 = model.children[30];
  obj30[obj30.name] = useRef();

  const obj31 = model.children[31];
  obj31[obj31.name] = useRef();

  const obj32 = model.children[32];
  obj32[obj32.name] = useRef();

  const obj33 = model.children[33];
  obj33[obj33.name] = useRef();

  const obj34 = model.children[34];
  obj34[obj34.name] = useRef();

  const obj35 = model.children[35];
  obj35[obj35.name] = useRef();

  const obj36 = model.children[36];
  obj36[obj36.name] = useRef();

  const obj37 = model.children[37];
  obj37[obj37.name] = useRef();

  const obj38 = model.children[38];
  obj38[obj38.name] = useRef();

  const obj39 = model.children[39];
  obj39[obj39.name] = useRef();

  const obj40 = model.children[40];
  obj40[obj40.name] = useRef();

  const obj41 = model.children[41];
  obj41[obj41.name] = useRef();

  const obj42 = model.children[42];
  obj42[obj42.name] = useRef();

  const obj43 = model.children[43];
  obj43[obj43.name] = useRef();

  const obj44 = model.children[44];
  obj44[obj44.name] = useRef();

  const obj45 = model.children[45];
  obj45[obj45.name] = useRef();

  const obj46 = model.children[46];
  obj46[obj46.name] = useRef();

  const obj47 = model.children[47];
  obj47[obj47.name] = useRef();

  const obj48 = model.children[48];
  obj48[obj48.name] = useRef();

  const obj49 = model.children[49];
  obj49[obj49.name] = useRef();

  const obj50 = model.children[50];
  obj50[obj50.name] = useRef();

  const obj51 = model.children[51];
  obj51[obj51.name] = useRef();

  const obj52 = model.children[52];
  obj52[obj52.name] = useRef();

  const obj53 = model.children[53];
  obj53[obj53.name] = useRef();

  const obj54 = model.children[54];
  obj54[obj54.name] = useRef();

  const obj55 = model.children[55];
  obj55[obj55.name] = useRef();

  const obj56 = model.children[56];
  obj56[obj56.name] = useRef();

  const obj57 = model.children[57];
  obj57[obj57.name] = useRef();

  const obj58 = model.children[58];
  obj58[obj58.name] = useRef();

  const obj59 = model.children[59];
  obj59[obj59.name] = useRef();

  const obj60 = model.children[60];
  obj60[obj60.name] = useRef();

  // useEffect(() => {
  //
  //   console.log('keyboard is functioning', activeKeyboard)
  //   setIsActive(activeKeyboard)
  // }, [activeKeyboard])


  const downHandler = (event) => {
    if(event.code === "AltLeft") return;
    if(event.code === "AltRight") return;
    if(event.code === "ContextMenu") return;
    if(event.repeat) return
    keyDown.play() //play keypress sound

    if (obj.name === event.code + "001") {
      obj[obj.name].current.position.y = -0.0001;
    }
    if (obj1.name === event.code + "001") {
      obj1[obj1.name].current.position.y = -0.0001;
    }
    if (obj2.name === event.code + "001") {
      obj2[obj2.name].current.position.y = -0.0001;
    }
    if (obj3.name === event.code + "001") {
      obj3[obj3.name].current.position.y = -0.0001;
    }
    if (obj4.name === event.code + "001") {
      obj4[obj4.name].current.position.y = -0.0001;
    }
    if (obj5.name === event.code + "001") {
      obj5[obj5.name].current.position.y = -0.0001;
    }
    if (obj6.name === event.code + "001") {
      obj6[obj6.name].current.position.y = -0.0001;
    }
    if (obj7.name === event.code + "001") {
      obj7[obj7.name].current.position.y = -0.0001;
    }
    if (obj8.name === event.code + "001") {
      obj8[obj8.name].current.position.y = -0.0001;
    }
    if (obj9.name === event.code + "001") {
      obj9[obj9.name].current.position.y = -0.0001;
    }
    if (obj10.name === event.code + "001") {
      obj10[obj10.name].current.position.y = -0.0001;
    }
    if (obj11.name === event.code + "001") {
      obj11[obj11.name].current.position.y = -0.0001;
    }
    if (obj12.name === event.code + "001") {
      obj12[obj12.name].current.position.y = -0.0001;
    }
    if (obj13.name === event.code + "001") {
      obj13[obj13.name].current.position.y = -0.0001;
    }
    if (obj14.name === event.code + "001") {
      obj14[obj14.name].current.position.y = -0.0001;
    }
    if (obj15.name === event.code + "001") {
      obj15[obj15.name].current.position.y = -0.0001;
    }
    if (obj16.name === event.code + "001") {
      obj16[obj16.name].current.position.y = -0.0001;
    }
    if (obj17.name === event.code + "001") {
      obj17[obj17.name].current.position.y = -0.0001;
    }
    if (obj18.name === event.code + "001") {
      obj18[obj18.name].current.position.y = -0.0001;
    }
    if (obj19.name === event.code + "001") {
      obj19[obj19.name].current.position.y = -0.0001;
    }
    if (obj20.name === event.code + "001") {
      obj20[obj20.name].current.position.y = -0.0001;
    }
    if (obj21.name === event.code + "001") {
      obj21[obj21.name].current.position.y = -0.0001;
    }
    if (obj22.name === event.code + "001") {
      obj22[obj22.name].current.position.y = -0.0001;
    }
    if (obj23.name === event.code + "001") {
      obj23[obj23.name].current.position.y = -0.0001;
    }
    if (obj24.name === event.code + "001") {
      obj24[obj24.name].current.position.y = -0.0001;
    }
    if (obj25.name === event.code + "001") {
      obj25[obj25.name].current.position.y = -0.0001;
    }
    if (obj26.name === event.code + "001") {
      obj26[obj26.name].current.position.y = -0.0001;
    }
    if (obj27.name === event.code + "001") {
      obj27[obj27.name].current.position.y = -0.0001;
    }
    if (obj28.name === event.code + "001") {
      obj28[obj28.name].current.position.y = -0.0001;
    }
    if (obj29.name === event.code + "001") {
      obj29[obj29.name].current.position.y = -0.0001;
    }
    if (obj30.name === event.code + "001") {
      obj30[obj30.name].current.position.y = -0.0001;
    }
    if (obj31.name === event.code + "001") {
      obj31[obj31.name].current.position.y = -0.0001;
    }
    if (obj32.name === event.code + "001") {
      obj32[obj32.name].current.position.y = -0.0001;
    }
    if (obj33.name === event.code + "001") {
      obj33[obj33.name].current.position.y = -0.0001;
    }
    if (obj34.name === event.code + "001") {
      obj34[obj34.name].current.position.y = -0.0001;
    }
    if (obj35.name === event.code + "001") {
      obj35[obj35.name].current.position.y = -0.0001;
    }
    if (obj36.name === event.code + "001") {
      obj36[obj36.name].current.position.y = -0.0001;
    }
    if (obj37.name === event.code + "001") {
      obj37[obj37.name].current.position.y = -0.0001;
    }
    if (obj38.name === event.code + "001") {
      obj38[obj38.name].current.position.y = -0.0001;
    }
    if (obj39.name === event.code + "001") {
      obj39[obj39.name].current.position.y = -0.0001;
    }
    if (obj40.name === event.code + "001") {
      obj40[obj40.name].current.position.y = -0.0001;
    }
    if (obj41.name === event.code + "001") {
      obj41[obj41.name].current.position.y = -0.0001;
    }
    if (obj42.name === event.code + "001") {
      obj42[obj42.name].current.position.y = -0.0001;
    }
    if (obj43.name === event.code + "001") {
      obj43[obj43.name].current.position.y = -0.0001;
    }
    if (obj44.name === event.code + "001") {
      obj44[obj44.name].current.position.y = -0.0001;
    }
    if (obj45.name === event.code + "001") {
      obj45[obj45.name].current.position.y = -0.0001;
    }
    if (obj46.name === event.code + "001") {
      obj46[obj46.name].current.position.y = -0.0001;
    }
    if (obj47.name === event.code + "001") {
      obj47[obj47.name].current.position.y = -0.0001;
    }
    if (obj48.name === event.code + "001") {
      obj48[obj48.name].current.position.y = -0.0001;
    }
    if (obj49.name === event.code + "001") {
      obj49[obj49.name].current.position.y = -0.0001;
    }
    if (obj50.name === event.code + "001") {
      obj50[obj50.name].current.position.y = -0.0001;
    }
    if (obj51.name === event.code + "001") {
      obj51[obj51.name].current.position.y = -0.0001;
    }
    if (obj52.name === event.code + "001") {
      obj52[obj52.name].current.position.y = -0.0001;
    }
    if (obj53.name === event.code + "001") {
      obj53[obj53.name].current.position.y = -0.0001;
    }
    if (obj54.name === event.code + "001") {
      obj54[obj54.name].current.position.y = -0.0001;
    }
    if (obj55.name === event.code + "001") {
      obj55[obj55.name].current.position.y = -0.0001;
    }
    if (obj56.name === event.code + "001") {
      obj56[obj56.name].current.position.y = -0.0001;
    }
    if (obj57.name === event.code + "001") {
      obj57[obj57.name].current.position.y = -0.0001;
    }
    if (obj58.name === event.code + "001") {
      obj58[obj58.name].current.position.y = -0.0001;
    }
    if (obj59.name === event.code + "001") {
      obj59[obj59.name].current.position.y = -0.0001;
    }
    if (obj60.name === event.code + "001") {
      obj60[obj60.name].current.position.y = -0.0001;
    }

  }

  const upHandler = (event) => {
    if(event.code === "AltLeft") return;
    if(event.code === "AltRight") return;
    if(event.code === "ContextMenu") return;
    keyUp.play() // play keypress sound

    if(obj.name === event.code + "001") {
      obj[obj.name].current.position.y = 0.0026938319206237793
    }
    if(obj1.name === event.code + "001") {
      obj1[obj1.name].current.position.y = 0.0026938319206237793
    }
    if (obj.name === event.code + "001") {
      obj[obj.name].current.position.y = -0.0026938319206237793;
    }
    if (obj1.name === event.code + "001") {
      obj1[obj1.name].current.position.y = 0.0026938319206237793;
    }
    if (obj2.name === event.code + "001") {
      obj2[obj2.name].current.position.y = 0.0026938319206237793;
    }
    if (obj3.name === event.code + "001") {
      obj3[obj3.name].current.position.y = 0.0026938319206237793;
    }
    if (obj4.name === event.code + "001") {
      obj4[obj4.name].current.position.y = 0.0026938319206237793;
    }
    if (obj5.name === event.code + "001") {
      obj5[obj5.name].current.position.y = 0.0026938319206237793;
    }
    if (obj6.name === event.code + "001") {
      obj6[obj6.name].current.position.y = 0.0026938319206237793;
    }
    if (obj7.name === event.code + "001") {
      obj7[obj7.name].current.position.y = 0.0026938319206237793;
    }
    if (obj8.name === event.code + "001") {
      obj8[obj8.name].current.position.y = 0.0026938319206237793;
    }
    if (obj9.name === event.code + "001") {
      obj9[obj9.name].current.position.y = 0.0026938319206237793;
    }
    if (obj10.name === event.code + "001") {
      obj10[obj10.name].current.position.y = 0.0026938319206237793;
    }
    if (obj11.name === event.code + "001") {
      obj11[obj11.name].current.position.y = 0.0026938319206237793;
    }
    if (obj12.name === event.code + "001") {
      obj12[obj12.name].current.position.y = 0.0026938319206237793;
    }
    if (obj13.name === event.code + "001") {
      obj13[obj13.name].current.position.y = 0.0026938319206237793;
    }
    if (obj14.name === event.code + "001") {
      obj14[obj14.name].current.position.y = 0.0026938319206237793;
    }
    if (obj15.name === event.code + "001") {
      obj15[obj15.name].current.position.y = 0.0026938319206237793;
    }
    if (obj16.name === event.code + "001") {
      obj16[obj16.name].current.position.y = 0.0026938319206237793;
    }
    if (obj17.name === event.code + "001") {
      obj17[obj17.name].current.position.y = 0.0026938319206237793;
    }
    if (obj18.name === event.code + "001") {
      obj18[obj18.name].current.position.y = 0.0026938319206237793;
    }
    if (obj19.name === event.code + "001") {
      obj19[obj19.name].current.position.y = 0.0026938319206237793;
    }
    if (obj20.name === event.code + "001") {
      obj20[obj20.name].current.position.y = 0.0026938319206237793;
    }
    if (obj21.name === event.code + "001") {
      obj21[obj21.name].current.position.y = 0.0026938319206237793;
    }
    if (obj22.name === event.code + "001") {
      obj22[obj22.name].current.position.y = 0.0026938319206237793;
    }
    if (obj23.name === event.code + "001") {
      obj23[obj23.name].current.position.y = 0.0026938319206237793;
    }
    if (obj24.name === event.code + "001") {
      obj24[obj24.name].current.position.y = 0.0026938319206237793;
    }
    if (obj25.name === event.code + "001") {
      obj25[obj25.name].current.position.y = 0.0026938319206237793;
    }
    if (obj26.name === event.code + "001") {
      obj26[obj26.name].current.position.y = 0.0026938319206237793;
    }
    if (obj27.name === event.code + "001") {
      obj27[obj27.name].current.position.y = 0.0026938319206237793;
    }
    if (obj28.name === event.code + "001") {
      obj28[obj28.name].current.position.y = 0.0026938319206237793;
    }
    if (obj29.name === event.code + "001") {
      obj29[obj29.name].current.position.y = 0.0026938319206237793;
    }
    if (obj30.name === event.code + "001") {
      obj30[obj30.name].current.position.y = 0.0026938319206237793;
    }
    if (obj31.name === event.code + "001") {
      obj31[obj31.name].current.position.y = 0.0026938319206237793;
    }
    if (obj32.name === event.code + "001") {
      obj32[obj32.name].current.position.y = 0.0026938319206237793;
    }
    if (obj33.name === event.code + "001") {
      obj33[obj33.name].current.position.y = 0.0026938319206237793;
    }
    if (obj34.name === event.code + "001") {
      obj34[obj34.name].current.position.y = 0.0026938319206237793;
    }
    if (obj35.name === event.code + "001") {
      obj35[obj35.name].current.position.y = 0.0026938319206237793;
    }
    if (obj36.name === event.code + "001") {
      obj36[obj36.name].current.position.y = 0.0026938319206237793;
    }
    if (obj37.name === event.code + "001") {
      obj37[obj37.name].current.position.y = 0.0026938319206237793;
    }
    if (obj38.name === event.code + "001") {
      obj38[obj38.name].current.position.y = 0.0026938319206237793;
    }
    if (obj39.name === event.code + "001") {
      obj39[obj39.name].current.position.y = 0.0026938319206237793;
    }
    if (obj40.name === event.code + "001") {
      obj40[obj40.name].current.position.y = 0.0026938319206237793;
    }
    if (obj41.name === event.code + "001") {
      obj41[obj41.name].current.position.y = 0.0026938319206237793;
    }
    if (obj42.name === event.code + "001") {
      obj42[obj42.name].current.position.y = 0.0026938319206237793;
    }
    if (obj43.name === event.code + "001") {
      obj43[obj43.name].current.position.y = 0.0026938319206237793;
    }
    if (obj44.name === event.code + "001") {
      obj44[obj44.name].current.position.y = 0.0026938319206237793;
    }
    if (obj45.name === event.code + "001") {
      obj45[obj45.name].current.position.y = 0.0026938319206237793;
    }
    if (obj46.name === event.code + "001") {
      obj46[obj46.name].current.position.y = 0.0026938319206237793;
    }
    if (obj47.name === event.code + "001") {
      obj47[obj47.name].current.position.y = 0.0026938319206237793;
    }
    if (obj48.name === event.code + "001") {
      obj48[obj48.name].current.position.y = 0.0026938319206237793;
    }
    if (obj49.name === event.code + "001") {
      obj49[obj49.name].current.position.y = 0.0026938319206237793;
    }
    if (obj50.name === event.code + "001") {
      obj50[obj50.name].current.position.y = 0.0026938319206237793;
    }
    if (obj51.name === event.code + "001") {
      obj51[obj51.name].current.position.y = 0.0026938319206237793;
    }
    if (obj52.name === event.code + "001") {
      obj52[obj52.name].current.position.y = 0.0026938319206237793;
    }
    if (obj53.name === event.code + "001") {
      obj53[obj53.name].current.position.y = 0.0026938319206237793;
    }
    if (obj54.name === event.code + "001") {
      obj54[obj54.name].current.position.y = 0.0026938319206237793;
    }
    if (obj55.name === event.code + "001") {
      obj55[obj55.name].current.position.y = 0.0026938319206237793;
    }
    if (obj56.name === event.code + "001") {
      obj56[obj56.name].current.position.y = 0.0026938319206237793;
    }
    if (obj57.name === event.code + "001") {
      obj57[obj57.name].current.position.y = 0.0026938319206237793;
    }
    if (obj58.name === event.code + "001") {
      obj58[obj58.name].current.position.y = 0.0026938319206237793;
    }
    if (obj59.name === event.code + "001") {
      obj59[obj59.name].current.position.y = 0.0026938319206237793;
    }
    if (obj60.name === event.code + "001") {
      obj60[obj60.name].current.position.y = 0.0026938319206237793;
    }
  };

  // Add event listeners
  useEffect(() => {
    if(!activeKeyboard) return ///disable keyboard if is not in the screen
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [activeKeyboard]);


  return (
    <group position={model.position}>
      <pointLight intensity={0.5} position={[0.2, 0.14, -0.09]}/>
      <mesh geometry={model.geometry} material={model.material}>
        <Edges />
      </mesh>

      <group>
        <mesh
          ref={obj[obj.name]}
          geometry={obj.geometry}
          position={obj.position}
          material={obj.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj1[obj1.name]}
          geometry={obj1.geometry}
          position={obj1.position}
          material={obj1.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj2[obj2.name]}
          geometry={obj2.geometry}
          position={obj2.position}
          material={obj2.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj3[obj3.name]}
          geometry={obj3.geometry}
          position={obj3.position}
          material={obj3.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj4[obj4.name]}
          geometry={obj4.geometry}
          position={obj4.position}
          material={obj4.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj5[obj5.name]}
          geometry={obj5.geometry}
          position={obj5.position}
          material={obj5.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj6[obj6.name]}
          geometry={obj6.geometry}
          position={obj6.position}
          material={obj6.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj7[obj7.name]}
          geometry={obj7.geometry}
          position={obj7.position}
          material={obj7.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj8[obj8.name]}
          geometry={obj8.geometry}
          position={obj8.position}
          material={obj8.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj9[obj9.name]}
          geometry={obj9.geometry}
          position={obj9.position}
          material={obj9.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj10[obj10.name]}
          geometry={obj10.geometry}
          position={obj10.position}
          material={obj10.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj11[obj11.name]}
          geometry={obj11.geometry}
          position={obj11.position}
          material={obj11.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj12[obj12.name]}
          geometry={obj12.geometry}
          position={obj12.position}
          material={obj12.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj13[obj13.name]}
          geometry={obj13.geometry}
          position={obj13.position}
          material={obj13.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj14[obj14.name]}
          geometry={obj14.geometry}
          position={obj14.position}
          material={obj14.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj15[obj15.name]}
          geometry={obj15.geometry}
          position={obj15.position}
          material={obj15.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj16[obj16.name]}
          geometry={obj16.geometry}
          position={obj16.position}
          material={obj16.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj17[obj17.name]}
          geometry={obj17.geometry}
          position={obj17.position}
          material={obj17.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj18[obj18.name]}
          geometry={obj18.geometry}
          position={obj18.position}
          material={obj18.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj19[obj19.name]}
          geometry={obj19.geometry}
          position={obj19.position}
          material={obj19.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj20[obj20.name]}
          geometry={obj20.geometry}
          position={obj20.position}
          material={obj20.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj21[obj21.name]}
          geometry={obj21.geometry}
          position={obj21.position}
          material={obj21.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj22[obj22.name]}
          geometry={obj22.geometry}
          position={obj22.position}
          material={obj22.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj23[obj23.name]}
          geometry={obj23.geometry}
          position={obj23.position}
          material={obj23.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj24[obj24.name]}
          geometry={obj24.geometry}
          position={obj24.position}
          material={obj24.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj25[obj25.name]}
          geometry={obj25.geometry}
          position={obj25.position}
          material={obj25.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj26[obj26.name]}
          geometry={obj26.geometry}
          position={obj26.position}
          material={obj26.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj27[obj27.name]}
          geometry={obj27.geometry}
          position={obj27.position}
          material={obj27.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj28[obj28.name]}
          geometry={obj28.geometry}
          position={obj28.position}
          material={obj28.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj29[obj29.name]}
          geometry={obj29.geometry}
          position={obj29.position}
          material={obj29.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj30[obj30.name]}
          geometry={obj30.geometry}
          position={obj30.position}
          material={obj30.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj31[obj31.name]}
          geometry={obj31.geometry}
          position={obj31.position}
          material={obj31.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj32[obj32.name]}
          geometry={obj32.geometry}
          position={obj32.position}
          material={obj32.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj33[obj33.name]}
          geometry={obj33.geometry}
          position={obj33.position}
          material={obj33.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj34[obj34.name]}
          geometry={obj34.geometry}
          position={obj34.position}
          material={obj34.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj35[obj35.name]}
          geometry={obj35.geometry}
          position={obj35.position}
          material={obj35.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj36[obj36.name]}
          geometry={obj36.geometry}
          position={obj36.position}
          material={obj36.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj37[obj37.name]}
          geometry={obj37.geometry}
          position={obj37.position}
          material={obj37.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj38[obj38.name]}
          geometry={obj38.geometry}
          position={obj38.position}
          material={obj38.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj39[obj39.name]}
          geometry={obj39.geometry}
          position={obj39.position}
          material={obj39.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj40[obj40.name]}
          geometry={obj40.geometry}
          position={obj40.position}
          material={obj40.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj41[obj41.name]}
          geometry={obj41.geometry}
          position={obj41.position}
          material={obj41.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj42[obj42.name]}
          geometry={obj42.geometry}
          position={obj42.position}
          material={obj42.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj43[obj43.name]}
          geometry={obj43.geometry}
          position={obj43.position}
          material={obj43.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj44[obj44.name]}
          geometry={obj44.geometry}
          position={obj44.position}
          material={obj44.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj45[obj45.name]}
          geometry={obj45.geometry}
          position={obj45.position}
          material={obj45.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj46[obj46.name]}
          geometry={obj46.geometry}
          position={obj46.position}
          material={obj46.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj47[obj47.name]}
          geometry={obj47.geometry}
          position={obj47.position}
          material={obj47.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj48[obj48.name]}
          geometry={obj48.geometry}
          position={obj48.position}
          material={obj48.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj49[obj49.name]}
          geometry={obj49.geometry}
          position={obj49.position}
          material={obj49.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj50[obj50.name]}
          geometry={obj50.geometry}
          position={obj50.position}
          material={obj50.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj51[obj51.name]}
          geometry={obj51.geometry}
          position={obj51.position}
          material={obj51.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj52[obj52.name]}
          geometry={obj52.geometry}
          position={obj52.position}
          material={obj52.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj53[obj53.name]}
          geometry={obj53.geometry}
          position={obj53.position}
          material={obj53.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj54[obj54.name]}
          geometry={obj54.geometry}
          position={obj54.position}
          material={obj54.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj55[obj55.name]}
          geometry={obj55.geometry}
          position={obj55.position}
          material={obj55.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj56[obj56.name]}
          geometry={obj56.geometry}
          position={obj56.position}
          material={obj56.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj57[obj57.name]}
          geometry={obj57.geometry}
          position={obj57.position}
          material={obj57.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj58[obj58.name]}
          geometry={obj58.geometry}
          position={obj58.position}
          material={obj58.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj59[obj59.name]}
          geometry={obj59.geometry}
          position={obj59.position}
          material={obj59.material}>
          <Edges />
        </mesh>

        <mesh
          ref={obj60[obj60.name]}
          geometry={obj60.geometry}
          position={obj60.position}
          material={obj60.material}>
          <Edges />
        </mesh>
      </group>

    </group>
  )
}

function Key({obj, keyUpdate}) {
  const meshObj = obj
  meshObj[obj.name]= useRef()

  useEffect(() => {
    keyUpdate("testing");
  }, [keyUpdate]);

  return (
    <mesh
      geometry={meshObj.geometry}
      position={meshObj.position}
      material={meshObj.material}/>
  )
}
