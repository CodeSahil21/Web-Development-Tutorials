import './App.css'
import { networkAtom, jobsAtom, notificationsAtom, messagingAtom, totalNotificationSelector } from './component/Atoms/atoms'
import { RecoilRoot, useRecoilValue } from 'recoil'

function App() {
    return(
      <div>
        <RecoilRoot>
          <MainApp/>
        </RecoilRoot>
      </div>
    )
}
function MainApp(){
  const networkCount =  useRecoilValue(networkAtom); 
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const messageAtomCount =  useRecoilValue(messagingAtom)
  const notificationsAtomCount = useRecoilValue(notificationsAtom);
  const totalNotifications = useRecoilValue(totalNotificationSelector);


  return (
   <div>
<button>Home</button>
 
<button>My network({networkCount >=100 ? "99+":networkCount})</button>
<button>jobs({jobsAtomCount})</button>
<button>Messaging({messageAtomCount})</button>
<button>Notification({notificationsAtomCount})</button>

<button>Me({totalNotifications})</button>

   </div>
  )
}

export default App