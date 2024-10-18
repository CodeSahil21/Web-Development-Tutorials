import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";



function App() {
  return (
    <div>
      <RecoilRoot>
        <Count/>
        <Buttons />
        </RecoilRoot>
   </div>
  )
} 
 function Count(){
  console.log("re-render");// now this compoent no longer re rendering
  return(
    <div>
      <div>
      <CountRenderer />
      <EvenCountRenderer/>
      </div>
      
    </div>
    
  )
  function EvenCountRenderer(){
   const isEven = useRecoilValue(evenSelector);
   return(
    <div>
      {isEven ? "It is even" : null}
    </div>
   )
  }

 }
 function CountRenderer(){
  //here we only need to render the count variable not update it
  const count = useRecoilValue(countAtom); 
  return (
    <div>
      {count}
    </div>
  )
 }
 function Buttons(){
 const setCount = useSetRecoilState(countAtom);
return(
  <div>
    <button onClick={()=>{
    setCount(count=>count+1);
    }}>Increase</button>

<button onClick={()=>{
setCount(count=>count-1);
}}>Decrease</button>

  </div>
)
 }

export default App