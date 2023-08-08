import { useState, useEffect } from "react";

import Queries from '../../../api/queries'
import { userState } from '../../../main'
import TrackJobModal from './trackJobModal'
import ViewJobModal from './viewJobModal'

export const TrackerDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTrackJob, setIsTrackJob] = useState(false);
  const [applicationState, setApplicationState] = useState('')
  const [bookmarkedOpenStates, setBookmarkedOpenStates] = useState([]);
  const [appliedOpenStates, setAppliedOpenStates] = useState([]);
  const [callsOpenStates, setCallsOpenStates] = useState([]);
  const [interviewOpenStates, setInterviewOpenStates] = useState([]);
  const [offerOpenStates, setOfferOpenStates] = useState([]);
  const [rejectedOpenStates, setRejectedOpenStates] = useState([]);


  const [isModalOpen, setIsModalOpen] = useState(false);

  const openJobModal = (item) => {
    setApplicationState(item)
    setIsTrackJob(true);
  };

  const closeJobModal = () => {
    setApplicationState('')
    setIsTrackJob(false);
  };

  const { user, setUser } = userState()
  const {currentUserJobs, id} = user

  async function loader() {
    const response = await Queries.getCurrentUserJobs(id)
    return response
  }

  const [loading, setLoading] = useState(true)
  const [loadingList, setLoadingList] = useState(false)
  const [data, setData] = useState({})
  const [error, setError] = useState(null)

  const openModal = (item) => {
    setData(item)
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setData({})
    setIsModalOpen(false);
  };

  useEffect(() => {
    const storeState = localStorage.getItem('store')
      if (storeState) {
        setUser(JSON.parse(storeState))
    }
    const fetchData = async () => {
      try {
        const response = await loader()
        setUser((prevState) => ({ ...prevState, currentUserJobs: response.jobs  }));
        console.log(response)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    setTimeout(() => {
      fetchData()
    }, 2000);

    // fetchData()
  }, [])

  const filterJobsByState = (jobs, applicationState) => {
    return jobs.filter((job) => job.application_state === applicationState);
  };

  const toggleDropdown = (index, jobState) => {
  if (jobState === 'bookmarked') {
    setAppliedOpenStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = false;
      return updatedStates;
    });
    setCallsOpenStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = false;
      return updatedStates;
    });
    setInterviewOpenStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = false;
      return updatedStates;
    });
    setOfferOpenStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = false;
      return updatedStates;
    });
    setRejectedOpenStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = false;
      return updatedStates;
    });
  } else if (jobState === 'applied') {
    setBookmarkedOpenStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = false;
      return updatedStates;
    });
    setCallsOpenStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = false;
      return updatedStates;
    });
    setInterviewOpenStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = false;
      return updatedStates;
    });
     setOfferOpenStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = false;
      return updatedStates;
    });
      setRejectedOpenStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = false;
      return updatedStates;
    });
  }else if (jobState === 'calls') {
    setBookmarkedOpenStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = false;
      return updatedStates;
    });
    setAppliedOpenStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = false;
      return updatedStates;
    });
    setInterviewOpenStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = false;
      return updatedStates;
    });
     setOfferOpenStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = false;
      return updatedStates;
    });
      setRejectedOpenStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = false;
      return updatedStates;
    });
  }else if (jobState === 'interview') {
    setBookmarkedOpenStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = false;
      return updatedStates;
    });
    setCallsOpenStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = false;
      return updatedStates;
    });
    setAppliedOpenStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = false;
      return updatedStates;
    });
     setOfferOpenStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = false;
      return updatedStates;
    });
      setRejectedOpenStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = false;
      return updatedStates;
    });
  }else if (jobState === 'offer') {
    setBookmarkedOpenStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = false;
      return updatedStates;
    });
    setCallsOpenStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = false;
      return updatedStates;
    });
    setInterviewOpenStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = false;
      return updatedStates;
    });
     setAppliedOpenStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = false;
      return updatedStates;
    });
      setRejectedOpenStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = false;
      return updatedStates;
    });
  } else if (jobState === 'rejected') {
    setBookmarkedOpenStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = false;
      return updatedStates;
    });
    setCallsOpenStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = false;
      return updatedStates;
    });
    setInterviewOpenStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = false;
      return updatedStates;
    });
     setOfferOpenStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = false;
      return updatedStates;
    });
      setAppliedOpenStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = false;
      return updatedStates;
    });
  } 

    if (jobState === 'bookmarked') {
      setBookmarkedOpenStates((prevStates) => {
        const updatedStates = [...prevStates];
        updatedStates[index] = !updatedStates[index];
        return updatedStates;
      });
    } else if (jobState === 'applied') {
      setAppliedOpenStates((prevStates) => {
        const updatedStates = [...prevStates];
        updatedStates[index] = !updatedStates[index];
        return updatedStates;
      });
    } else if (jobState === 'calls') {
      setCallsOpenStates((prevStates) => {
        const updatedStates = [...prevStates];
        updatedStates[index] = !updatedStates[index];
        return updatedStates;
      });
    } else if (jobState === 'interview') {
      setInterviewOpenStates((prevStates) => {
        const updatedStates = [...prevStates];
        updatedStates[index] = !updatedStates[index];
        return updatedStates;
      });
    } else if (jobState === 'offer') {
      setOfferOpenStates((prevStates) => {
        const updatedStates = [...prevStates];
        updatedStates[index] = !updatedStates[index];
        return updatedStates;
      });
    } else if (jobState === 'rejected') {
      setRejectedOpenStates((prevStates) => {
        const updatedStates = [...prevStates];
        updatedStates[index] = !updatedStates[index];
        return updatedStates;
      });
    }
  };

  const handleUpdate = async (e, item, state, index) => {
    e.preventDefault()
    // Handle form submission here
    console.log('item', item)
      setLoadingList(true)
      const response = await Queries.updateJob({...item, application_state: state})
      await setUser(prevState => ({
      ...prevState,
      currentUserJobs: prevState.currentUserJobs.map(job => {
        if (job.job_id === response.job.job_id) {
          return { ...job, ...response.job };
        }
        return job;
      })
    }))
      setLoadingList(false)
            // toggleDropdown(index, state)

      // Reset form
    }

  return (
    <div className='relative dark:bg-gray-900 min-h-screen'>
    <div className='grid grid-cols-6 gap-4 mt-10'>
      <div>
        <p className='text-xl mb-3 dark:text-white'>Bookmarked</p>
        <button className='bg-gray-300 w-full py-2 text-lg' onClick={() => openJobModal('bookmarked')}>+ Add Job</button>
        <div className='w-full'>
          {currentUserJobs.length > 0 ? (
          filterJobsByState(currentUserJobs, 'bookmarked').map((item, index) => (
          <div key={item.id} className='rounded-2xl p-5 my-3 border bg-gray-50 h-30'>
            <h2 className='text-xl font-bold mb-2'>{item.job_company}</h2>
            <p className='mb-4 text-gray-500 text-lg'>{item.job_title}</p>
            <div className='grid grid-cols-2 gap-4 mb-2'>
              <span className='bg-indigo-500 px-6 pl-8 py-2 w-24 text-white rounded-3xl' onClick={() => openModal(item)}>View</span>
              <div className='text-right'>
                <h6 className='text-lg font-medium flex justify-end text-gray-700 dark:text-white items-center'>
                  <svg 
                     className={`mt-2 ${isOpen ? 'text-indigo-500' : 'text-gray-500'}`}
                     onClick={() => toggleDropdown(index, 'bookmarked')}
                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <circle cx="12" cy="4" r="2" />
                    <circle cx="12" cy="12" r="2" />
                    <circle cx="12" cy="20" r="2" />
                  </svg>
                </h6>
                {bookmarkedOpenStates[index] && (
                  <div className="absolute flex justify-start bg-gray-50 rounded-lg shadow-md mt-4 py-2">
                    {loadingList ? (
                <div className='flex justify-center items-center pt-[50px] pb-[50px] w-36'>
       <div className='animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600'></div>
                </div>
              ) : (
                    <ul className="pl-2 pr-2">
                      <li className="hover:bg-white hover:text-gray-700 w-28 text-left h-8 border-b-2 mb-2" onClick={(e) => handleUpdate(e, item, 'applied', index)}>Applied</li>
                      <li className="hover:bg-white hover:text-gray-700 w-28 text-left h-8 border-b-2 mb-2" onClick={(e) => handleUpdate(e, item, 'calls', index)}>First Calls</li>
                      <li className="hover:bg-white hover:text-gray-700 w-28 text-left h-8 border-b-2 mb-2" onClick={(e) => handleUpdate(e, item, 'interview', index)}>Final Interview</li>
                      <li className="hover:bg-white hover:text-gray-700 w-28 text-left h-8 border-b-2 mb-2" onClick={(e) => handleUpdate(e, item, 'offer', index)}>Offer</li>
                      <li className="hover:bg-white hover:text-gray-700 w-28 text-left h-8 border-b-2 mb-2" onClick={(e) => handleUpdate(e, item, 'rejected', index)}>Rejected</li>
                    </ul>)}
                  </div>
                )}
              </div>
            </div>
          </div>))) : null}
        </div>
      </div>
      <div>
        <p className='text-xl mb-3 dark:text-white'>Applied</p>
        <button className='bg-gray-300 w-full py-2 text-lg' onClick={() => openJobModal('applied')}>+ Add Job</button>
        <div className='w-full'>
          {currentUserJobs.length > 0 ? (
          filterJobsByState(currentUserJobs, 'applied').map((item, index) => (
          <div key={item.id} className='rounded-2xl p-5 my-3 border bg-gray-50 h-30'>
            <h2 className='text-xl font-bold mb-2'>{item.job_company}</h2>
            <p className='mb-4 text-gray-500 text-lg'>{item.job_title}</p>
            <div className='grid grid-cols-2 gap-4 mb-2'>
              <span className='bg-indigo-500 px-6 pl-8 py-2 w-24 text-white rounded-3xl' onClick={() => openModal(item)}>View</span>
              <div className='text-right'>
                <h6 className='text-lg font-medium flex justify-end text-gray-700 dark:text-white items-center'>
                  <svg 
                     className={`mt-2 ${isOpen ? 'text-indigo-500' : 'text-gray-500'}`}
                     onClick={() => toggleDropdown(index, 'applied')}
                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <circle cx="12" cy="4" r="2" />
                    <circle cx="12" cy="12" r="2" />
                    <circle cx="12" cy="20" r="2" />
                  </svg>
                </h6>
                {appliedOpenStates[index] && (
                  <div className="absolute flex justify-start bg-gray-50 rounded-lg shadow-md mt-4 py-2">
                    {loadingList ? (
                <div className='flex justify-center items-center pt-[50px] pb-[50px] w-36'>
       <div className='animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600'></div>
                </div>
              ) : (
                    <ul className="pl-2 pr-2">
                      <li className="hover:bg-white hover:text-gray-700 w-28 text-left h-8 border-b-2 mb-2" onClick={(e) => handleUpdate(e, item, 'bookmarked')}>Bookmark</li>
                      <li className="hover:bg-white hover:text-gray-700 w-28 text-left h-8 border-b-2 mb-2" onClick={(e) => handleUpdate(e, item, 'calls')}>First Calls</li>
                      <li className="hover:bg-white hover:text-gray-700 w-28 text-left h-8 border-b-2 mb-2" onClick={(e) => handleUpdate(e, item, 'interview')}>Final Interview</li>
                      <li className="hover:bg-white hover:text-gray-700 w-28 text-left h-8 border-b-2 mb-2" onClick={(e) => handleUpdate(e, item, 'offer')}>Offer</li>
                      <li className="hover:bg-white hover:text-gray-700 w-28 text-left h-8 border-b-2 mb-2" onClick={(e) => handleUpdate(e, item, 'rejected')}>Rejected</li>
                    </ul>)}
                  </div>
                )}
              </div>
            </div>
          </div>))) : null}
        </div>
      </div>
      <div>
        <p className='text-xl mb-3 dark:text-white'>First Calls</p>
        <button className='bg-gray-300 w-full py-2 text-lg' onClick={() => openJobModal('calls')}>+ Add Job</button>
        <div className='w-full'>
          {currentUserJobs.length > 0 ? (
          filterJobsByState(currentUserJobs, 'calls').map((item, index) => (
          <div key={item.id} className='rounded-2xl p-5 my-3 border bg-gray-50 h-30'>
            <h2 className='text-xl font-bold mb-2'>{item.job_company}</h2>
            <p className='mb-4 text-gray-500 text-lg'>{item.job_title}</p>
            <div className='grid grid-cols-2 gap-4 mb-2'>
              <span className='bg-indigo-500 px-6 pl-8 py-2 w-24 text-white rounded-3xl' onClick={() => openModal(item)}>View</span>
              <div className='text-right'>
                <h6 className='text-lg font-medium flex justify-end text-gray-700 dark:text-white items-center'>
                  <svg 
                     className={`mt-2 ${isOpen ? 'text-indigo-500' : 'text-gray-500'}`}
                     onClick={() => toggleDropdown(index, 'calls')}
                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <circle cx="12" cy="4" r="2" />
                    <circle cx="12" cy="12" r="2" />
                    <circle cx="12" cy="20" r="2" />
                  </svg>
                </h6>
                {callsOpenStates[index] && (
                  <div className="absolute flex justify-start bg-gray-50 rounded-lg shadow-md mt-4 py-2">
                    {loadingList ? (
                <div className='flex justify-center items-center pt-[50px] pb-[50px] w-36'>
       <div className='animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600'></div>
                </div>
              ) : (
                    <ul className="pl-2 pr-2">
                      <li className="hover:bg-white hover:text-gray-700 w-28 text-left h-8 border-b-2 mb-2" onClick={(e) => handleUpdate(e, item, 'bookmarked')}>Bookmark</li>
                      <li className="hover:bg-white hover:text-gray-700 w-28 text-left h-8 border-b-2 mb-2" onClick={(e) => handleUpdate(e, item, 'applied')}>Applied</li>
                      <li className="hover:bg-white hover:text-gray-700 w-28 text-left h-8 border-b-2 mb-2" onClick={(e) => handleUpdate(e, item, 'interview')}>Final Interview</li>
                      <li className="hover:bg-white hover:text-gray-700 w-28 text-left h-8 border-b-2 mb-2" onClick={(e) => handleUpdate(e, item, 'offer')}>Offer</li>
                      <li className="hover:bg-white hover:text-gray-700 w-28 text-left h-8 border-b-2 mb-2" onClick={(e) => handleUpdate(e, item, 'rejected')}>Rejected</li>
                    </ul>)}
                  </div>
                )}
              </div>
            </div>
          </div>))) : null}
        </div>
      </div>
      <div>
        <p className='text-xl mb-3 dark:text-white'>Final Interview</p>
        <button className='bg-gray-300 w-full py-2 text-lg' onClick={() => openJobModal('interview')}>+ Add Job</button>
              <div className='w-full'>
          {currentUserJobs.length > 0 ? (
          filterJobsByState(currentUserJobs, 'interview').map((item, index) => (
          <div key={item.id} className='rounded-2xl p-5 my-3 border bg-gray-50 h-30'>
            <h2 className='text-xl font-bold mb-2'>{item.job_company}</h2>
            <p className='mb-4 text-gray-500 text-lg'>{item.job_title}</p>
            <div className='grid grid-cols-2 gap-4 mb-2'>
              <span className='bg-indigo-500 px-6 pl-8 py-2 w-24 text-white rounded-3xl' onClick={() => openModal(item)}>View</span>
              <div className='text-right'>
                <h6 className='text-lg font-medium flex justify-end text-gray-700 dark:text-white items-center'>
                  <svg 
                     className={`mt-2 ${isOpen ? 'text-indigo-500' : 'text-gray-500'}`}
                     onClick={() => toggleDropdown(index, 'interview')}
                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <circle cx="12" cy="4" r="2" />
                    <circle cx="12" cy="12" r="2" />
                    <circle cx="12" cy="20" r="2" />
                  </svg>
                </h6>
                {interviewOpenStates[index] && (
                  <div className="absolute flex justify-start bg-gray-50 rounded-lg shadow-md mt-4 py-2">
                    {loadingList ? (
                <div className='flex justify-center items-center pt-[50px] pb-[50px] w-36'>
       <div className='animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600'></div>
                </div>
              ) : (
                    <ul className="pl-2 pr-2">
                      <li className="hover:bg-white hover:text-gray-700 w-28 text-left h-8 border-b-2 mb-2" onClick={(e) => handleUpdate(e, item, 'bookmark')}>Bookmark</li>
                      <li className="hover:bg-white hover:text-gray-700 w-28 text-left h-8 border-b-2 mb-2" onClick={(e) => handleUpdate(e, item, 'applied')}>Applied</li>
                      <li className="hover:bg-white hover:text-gray-700 w-28 text-left h-8 border-b-2 mb-2" onClick={(e) => handleUpdate(e, item, 'calls')}>First Callls</li>
                      <li className="hover:bg-white hover:text-gray-700 w-28 text-left h-8 border-b-2 mb-2" onClick={(e) => handleUpdate(e, item, 'offer')}>Offer</li>
                      <li className="hover:bg-white hover:text-gray-700 w-28 text-left h-8 border-b-2 mb-2" onClick={(e) => handleUpdate(e, item, 'rejected')}>Rejected</li>
                    </ul>)}
                  </div>
                )}
              </div>
            </div>
          </div>))) : null}
        </div>
      </div>
      <div>
        <p className='text-xl mb-3 dark:text-white'>Offer</p>
        <button className='bg-gray-300 w-full py-2 text-lg' onClick={() => openJobModal('offer')}>+ Add Job</button>
        <div className='w-full'>
          {currentUserJobs.length > 0 ? (
          filterJobsByState(currentUserJobs, 'offer').map((item, index) => (
          <div key={item.id} className='rounded-2xl p-5 my-3 border bg-gray-50 h-30'>
            <h2 className='text-xl font-bold mb-2'>{item.job_company}</h2>
            <p className='mb-4 text-gray-500 text-lg'>{item.job_title}</p>
            <div className='grid grid-cols-2 gap-4 mb-2'>
              <span className='bg-indigo-500 px-6 pl-8 py-2 w-24 text-white rounded-3xl' onClick={() => openModal(item)}>View</span>
              <div className='text-right'>
                <h6 className='text-lg font-medium flex justify-end text-gray-700 dark:text-white items-center'>
                  <svg 
                     className={`mt-2 ${isOpen ? 'text-indigo-500' : 'text-gray-500'}`}
                     onClick={() => toggleDropdown(index, 'offer')}
                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <circle cx="12" cy="4" r="2" />
                    <circle cx="12" cy="12" r="2" />
                    <circle cx="12" cy="20" r="2" />
                  </svg>
                </h6>
                {offerOpenStates[index] && (
                  <div className="absolute flex justify-start bg-gray-50 rounded-lg shadow-md mt-4 py-2">
                    {loadingList ? (
                <div className='flex justify-center items-center pt-[50px] pb-[50px] w-36'>
       <div className='animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600'></div>
                </div>
              ) : (
                    <ul className="pl-2 pr-2">
                      <li className="hover:bg-white hover:text-gray-700 w-28 text-left h-8 border-b-2 mb-2" onClick={(e) => handleUpdate(e, item, 'bookmarked')}>Bookmark</li>
                      <li className="hover:bg-white hover:text-gray-700 w-28 text-left h-8 border-b-2 mb-2" onClick={(e) => handleUpdate(e, item, 'applied')}>Applied</li>
                      <li className="hover:bg-white hover:text-gray-700 w-28 text-left h-8 border-b-2 mb-2" onClick={(e) => handleUpdate(e, item, 'calls')}>First Calls</li>
                      <li className="hover:bg-white hover:text-gray-700 w-28 text-left h-8 border-b-2 mb-2" onClick={(e) => handleUpdate(e, item, 'interview')}>Final Interview</li>
                      <li className="hover:bg-white hover:text-gray-700 w-28 text-left h-8 border-b-2 mb-2" onClick={(e) => handleUpdate(e, item, 'rejected')}>Rejected</li>
                    </ul>)}
                  </div>
                )}
              </div>
            </div>
          </div>))) : null}
        </div>
      </div>
      <div>
        <p className='text-xl mb-3 dark:text-white'>Rejected</p>
        <button className='bg-gray-300 w-full py-2 text-lg' onClick={() => openJobModal('rejected')}>+ Add Job</button>
        <div className='w-full'>
          {currentUserJobs.length > 0 ? (
          filterJobsByState(currentUserJobs, 'rejected').map((item, index) => (
          <div key={item.id} className='rounded-2xl p-5 my-3 border bg-gray-50 h-30'>
            <h2 className='text-xl font-bold mb-2'>{item.job_company}</h2>
            <p className='mb-4 text-gray-500 text-lg'>{item.job_title}</p>
            <div className='grid grid-cols-2 gap-4 mb-2'>
              <span className='bg-indigo-500 px-6 pl-8 py-2 w-24 text-white rounded-3xl' onClick={() => openModal(item)}>View</span>
              <div className='text-right'>
                <h6 className='text-lg font-medium flex justify-end text-gray-700 dark:text-white items-center'>
                  <svg 
                     className={`mt-2 ${isOpen ? 'text-indigo-500' : 'text-gray-500'}`}
                     onClick={() => toggleDropdown(index, 'rejected')}
                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <circle cx="12" cy="4" r="2" />
                    <circle cx="12" cy="12" r="2" />
                    <circle cx="12" cy="20" r="2" />
                  </svg>
                </h6>
                {rejectedOpenStates[index] && (
                  <div className="absolute flex justify-start bg-gray-50 rounded-lg shadow-md mt-4 py-2">
                    {loadingList ? (
                <div className='flex justify-center items-center pt-[50px] pb-[50px] w-36'>
       <div className='animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600'></div>
                </div>
              ) : (
                    <ul className="pl-2 pr-2">
                      <li className="hover:bg-white hover:text-gray-700 w-28 text-left h-8 border-b-2 mb-2" onClick={(e) => handleUpdate(e, item, 'bookmarked')}>Bookmark</li>
                      <li className="hover:bg-white hover:text-gray-700 w-28 text-left h-8 border-b-2 mb-2" onClick={(e) => handleUpdate(e, item, 'applied')}>Applied</li>
                      <li className="hover:bg-white hover:text-gray-700 w-28 text-left h-8 border-b-2 mb-2" onClick={(e) => handleUpdate(e, item, 'calls')}>First Calls</li>
                      <li className="hover:bg-white hover:text-gray-700 w-28 text-left h-8 border-b-2 mb-2" onClick={(e) => handleUpdate(e, item, 'interview')}>Final Interview</li>
                      <li className="hover:bg-white hover:text-gray-700 w-28 text-left h-8 border-b-2 mb-2" onClick={(e) => handleUpdate(e, item, 'offer')}>Offer</li>
                    </ul>)}
                  </div>
                )}
              </div>
            </div>
          </div>))) : null}
        </div>
      </div>
      {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
          <div className='relative bg-white p-8 rounded-lg shadow-md w-[600px]'>
            <button className='absolute top-2 right-2 text-gray-500' onClick={closeModal}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M18 6L6 18M6 6l12 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {/* Add your modal content here */}
            <ViewJobModal job={data} closeModal={closeModal}/>
          </div>
        </div>
      )}
      {isTrackJob && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
          <div className='relative bg-white p-8 rounded-lg shadow-md w-[400px]'>
            <button className='absolute top-2 right-2 text-gray-500' onClick={closeJobModal}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M18 6L6 18M6 6l12 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {/* Add your modal content here */}
            <TrackJobModal closeJobModal={closeJobModal} applicationState={applicationState}/>
          </div>
        </div>
      )}
</div>
    </div>
  )
}
