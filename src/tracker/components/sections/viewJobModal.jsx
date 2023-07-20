import { useState } from 'react'
import ViewJob from './viewJobModalComponents/viewJob'
import EditJob from './viewJobModalComponents/editJob'
import DeleteJob from './viewJobModalComponents/deleteJob'

const state = {
  view: true,
  edit: false,
  // delete: true
}

function ViewJobModal({job}) {
  const [viewState, setViewState] = useState(state)
  const {view, edit} = viewState

  return (
    <>
      {view ? 
        <ViewJob
          setViewState={setViewState}
          job={job}/> : 
      edit ? 
        <EditJob 
          setViewState={setViewState}
          job={job}/> : 
        <DeleteJob 
          setViewState={setViewState}
          job={job}/>}
    </>
  )
}

export default ViewJobModal