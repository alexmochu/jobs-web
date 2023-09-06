import { useState, useEffect } from 'react'
import Select from 'react-select';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import { format } from 'date-fns'; 
import Resume from '../resume/resume'
import { locations } from '../locations';
import { countries } from '../countries'

const personalInfo = {
  title: '',
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  country: '',
  city: '',
  summary: '',
}

const workInfo = [
  {
    id: 0,
    title: '',
    employer: '',
    startDate: null,
    endDate: null,
    city: '',
    description: '',
  },
]

const educationInfo = [
  {
    id: 0,
    school: '',
    degree: '',
    startDate: null,
    endDate: null,
    city: '',
    description: '',
  },
]

const linksInfo = [
  {
    id: 0,
    label: '',
    link: '',
  },
]

const skillsInfo = []

export default function ResumeBuilder() {
  const [personalState, setPersonalState] = useState(personalInfo)
  const [skillValue, setSkillValue] = useState('')
  const [currentStep, setCurrentStep] = useState(1);
  const [workExperiences, setWorkExperiences] = useState(workInfo)
  const [educations, setEducations] = useState(educationInfo)
  const [links, setLinks] = useState(linksInfo)
  const [skills, setSkills] = useState(skillsInfo)
  const [resumeState, setResumeState] = useState({
    'personalState': personalState,
    'workExperiences': workExperiences,
    'educations': educations,
    'links': links,
    'skills': skills
  })

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEndDate, setIsOpenEndDate] = useState(false);
  const [startDateW, setStartDateW] = useState(null);
  const [endDateW, setEndDateW] = useState(null);
  const [isOpenW, setIsOpenW] = useState(false);
  const [isOpenEndDateW, setIsOpenEndDateW] = useState(false);
  const [datePickerOpen, setDatePickerOpen] = useState(new Array(workExperiences.length).fill(false));
  const [datePickerEnd, setDatePickerEnd] = useState(new Array(workExperiences.length).fill(false));
  const [datePickerOpenW, setDatePickerOpenW] = useState(new Array(educations.length).fill(false));
  const [datePickerEndW, setDatePickerEndW] = useState(new Array(educations.length).fill(false));

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setIsOpen(!isOpen);
  // };

  const handleClick = (index) => {
    setDatePickerOpen((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const handleClickEndDate = (index) => {
    setDatePickerEnd((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const handleClickW = (index) => {
    setDatePickerOpenW((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const handleChangeEndDateW = (e) => {
    setIsOpenW(!isOpenEndDateW);
    setEndDateW(e);
  };
  const handleClickEndDateW = (index) => {
    setDatePickerEndW((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  // Handle the checkbox change event
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle the checkbox state
  };

  // useEffect(() => {
  //   // Fetch country data from the REST Countries API
  //   fetch('https://restcountries.com/v3/all')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Format the data into options for the dropdown
  //       const countryOptions = data.map((country) => ({
  //         label: country.capital + ', ' + country.name.common,
  //         value: country.capital + ', ' + country.name.common
  //       }));
  //       setCountries(countryOptions);
  //     })
  //     .catch((error) => console.error('Error fetching country data:', error));
  // }, []);

  const addItem = (currentStep) => {
    if(currentStep === 2){
      setLinks((prevLinks) => [
        ...prevLinks,
        {
          id: prevLinks.length,
          label: '',
          link: ''
        },
      ])
    } else if(currentStep === 3){
      setWorkExperiences((prevWorkExperiences) => [
        ...prevWorkExperiences,
        {
        id: prevWorkExperiences.length, // Assign a unique ID
        title: '', // Initialize other fields with empty values
        employer: '',
        startDate: null,
        endDate: null,
        city: '',
        description: '',
        },
      ]);
    } else if(currentStep === 4){
      setEducations((prevEducation) => [
        ...prevEducation,
        {
          id: prevEducation.length,
          school: '',
          degree: '',
          startDate: null,
          endDate: null,
          city: '',
          description: '',
        },
      ])
    } else if(currentStep === 5){
      setSkills((prevLinks) => [
        ...prevLinks,
        {
          id: prevLinks.length,
          title: ''
        },
      ])
    }
  };

  const removeItem = (currentStep) => {
    if(currentStep === 2){
      setLinks(links.slice(0, -1))
    } else if(currentStep === 3){
      setWorkExperiences(workExperiences.slice(0, -1));
    } else if(currentStep === 4){
      setEducations(educations.slice(0, -1))
    } else if(currentStep === 5){
      setSkills(skills.slice(0, -1))
    }
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onChange = (e) => setPersonalState({ ...personalState, [e.target.name]: e.target.value })

  const updateWorkInfo = (field, value, index, no) => {
    let input
    if(no === 1){
      input = value
    }
    if(no === 2){
      input = value
    }
    if(no === 3){
      setStartDate(value);
      setDatePickerOpen((prevState) => {
        const newState = [...prevState];
        newState[index] = !newState[index];
        return newState;
      });
      input = value
    }

    if(no === 4){
      setEndDate(value);
      setDatePickerEnd((prevState) => {
        const newState = [...prevState];
        newState[index] = !newState[index];
        return newState;
      });
      input = value
    }
    if(no === 5){
      input = value
    }
    if(no == 6){
      input = value
    }
    setWorkExperiences((prevWorkInfo) => {
      const updatedWorkInfo = prevWorkInfo.map((item, i) => {
      if (i === index) {
        // Update the specific item in the array
        return {
          ...item,
          [field]: input,
        };
      }
      return item;
    });
      return updatedWorkInfo
    })
  }

  const updateEducationInfo = (field, value, index, no) => {
    let input
    if(no === 1){
      input = value
    }
    if(no === 2){
      input = value
    }
    if(no === 3){
      setStartDateW(value);
      setDatePickerOpenW((prevState) => {
        const newState = [...prevState];
        newState[index] = !newState[index];
        return newState;
      });
      input = value
    }
    if(no === 4){
      setEndDateW(value);
      setDatePickerEndW((prevState) => {
        const newState = [...prevState];
        newState[index] = !newState[index];
        return newState;
      });
      input = value
    }
    if(no === 5){
      input = value
    }
    setEducations((prevEducationInfo) => {
      const updatedEducationInfo = prevEducationInfo.map((item, i) => {
        if (i === index){
          return {
            ...item,
            [field]:input
          }
        }
        return item
      })
      return updatedEducationInfo
    })
  }

  const updateLinksInfo = (field, value, index) => {
    setLinks((prevLinksInfo) => {
      const updatedLinksInfo = prevLinksInfo.map((item, i) => {
        if (i === index){
          return {
            ...item,
            [field]: value
          }
        }
        return item
      })
      return updatedLinksInfo
    })
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      const newSkill = event.target.value
      setSkills((prevSkillsInfo) => [...prevSkillsInfo, newSkill])
      event.target.value = '' // Clear the input field
      setSkillValue('')
    }
  }

  const handleSkillChange = (event) => {
    setSkillValue(event.target.value)
  }

  const deleteSkill = (i) => {
    setSkills((prevArray) => {
      const newArray = prevArray.filter((item, index) => index !== i);
      return newArray;
  });
  }

  const copyResumeData = () => {
    // Convert the JSON data to a JSON string
    const jsonString = JSON.stringify(resumeState, null, 2);

    // Create a temporary textarea element to copy the JSON string to the clipboard
    const textarea = document.createElement('textarea');
    textarea.value = jsonString;
    document.body.appendChild(textarea);
    textarea.select();

      // Copy JSON string to the clipboard
    navigator.clipboard.writeText(jsonString)
        .then(() => {
          console.log('JSON data copied to clipboard:\n' + jsonString);
        })
        .catch((err) => {
          console.error('Failed to copy JSON data: ', err);
        });
  };

  const saveState = (currentStep) => {
    if(currentStep === 1){
      setResumeState((prevState) => {
        let updatedPersonalState = { ...prevState.personalState };
        updatedPersonalState = { ...personalState }
        return {
          ...prevState,
          personalState: updatedPersonalState,
        };
      })
    } else if(currentStep === 2){
      setResumeState((prevState) => {
        return {
          ...prevState,
          links: [...links]
        };
      })
    } else if(currentStep === 3){
      setResumeState((prevState) => {
        return {
          ...prevState,
          workExperiences: [...workExperiences]
        };
      })
    } else if(currentStep === 4){
      setResumeState((prevState) => {
        return {
          ...prevState,
          educations: [...educations]
        };
      })
    } else if(currentStep === 5){
      setResumeState((prevState) => {
        let updatedSkills = [...prevState.skills];
        updatedSkills = [...skills]
        return {
          ...prevState,
          skills: updatedSkills
        }
      })
    }
  }

  const personal = 
        <>
        <div className='paper inline mx-auto p-3'>
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-2xl dark:text-white">Personal Information</h3>
          </div>
          <hr className='my-4 border-t-4 border-gray-900'/>
          <div className='grid grid-cols-2 gap-4 mb-5'>
            <div>
              <p className='font-bold text-lg text-gray-600'>First Name</p>
              <input
                className='border-2 border-black rounded-lg p-2 w-full'
                name='firstName'
                value={personalState.firstName}
                onChange={onChange}
                placeholder='First Name'
              />
            </div>
            <div>
              <p className='font-bold text-lg text-gray-600'>Last Name</p>
              <input
                className='border-2 border-black rounded-lg p-2 w-full'
                name='lastName'
                value={personalState.lastName}
                onChange={onChange}
                placeholder='Last Name'
              />
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4 mb-5'>
            <div>
              <p className='font-bold text-lg text-gray-600'>Job Title</p>
              <input
                className='border-2 border-black rounded-lg w-full p-2'
                name='title'
                value={personalState.title}
                onChange={onChange}
                placeholder='Job Title'
              />
            </div>
            <div>
              <p className='font-bold text-lg text-gray-600'>Email</p>
              <input
                className='border-2 border-black rounded-lg p-2 w-full'
                name='email'
                value={personalState.email}
                onChange={onChange}
                placeholder='Email'
              />
            </div>
          </div>
        </div>
        <div className='paper inline mx-auto p-3'>
          <h3 className='font-bold text-2xl'>Professional Summary</h3>
          <hr className='my-4 border-t-4 border-gray-900'/>
          <div>
            <p>
              Write 2-4 short & energetic sentences to interest the reader! Mention your role,
              experience & most importantly - your biggest achievements, best qualities and skill
            </p>
            <textarea
              className='border-2 border-black rounded-lg w-full h-56 p-2'
              name='summary'
              value={personalState.summary}
              onChange={onChange}
              placeholder='Job Title'
            ></textarea>
          </div>
        </div></>

  const experience = 
      <div className='paper inline mx-auto p-3'>
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-2xl dark:text-white">Work Experience</h3>
          </div>

        {workExperiences.length > 0 ? (
          workExperiences.map((item, index) => (
<>
              <hr className='my-4 border-t-4 border-gray-900'/>
              <div className='grid grid-cols-2 gap-4 mb-5'>
              <div>
                <p className='font-bold text-lg text-gray-600'>Job Title</p>
                <input
                  className='border-2 border-black rounded-lg p-2 w-full'
                  value={workExperiences[index].title}
                  onChange={(e) => updateWorkInfo('title', e.target.value, index, 1)}
                  placeholder='Job Title'
                />
              </div>
              <div>
                <p className='font-bold text-lg text-gray-600'>Employer</p>
                <input
                  className='border-2 border-black rounded-lg p-2 w-full'
                  name='employer'
                  value={workExperiences[index].employer}
                  onChange={(e) => updateWorkInfo('employer', e.target.value, index, 2)}
                  placeholder='Employer'
                />
              </div>
            </div>
            <div className='mb-2 text-lg'>
              {/* Render the checkbox input element */}
              <label>
                <input
                  type="checkbox"
                  checked={isChecked} // Set the checked state of the checkbox
                  onChange={handleCheckboxChange} // Handle the change event
                  className='mr-2 mb-1'
                />
                I am currently working in this role.
              </label>
            </div>
            <div className='grid grid-cols-2 gap-4 mb-5'>
              <div >
                <p className='font-bold text-lg text-gray-600'>Start Date</p>
                <button className="border pl-2 border-black rounded-lg w-full mb-2 h-12 text-left" onClick={() => handleClick(index)}>
                  {workExperiences[index].startDate === null ? "Click to select a date" : format(workExperiences[index].startDate, 'MMM, yyyy')}
                </button>
                {datePickerOpen[index] && (
                  <DatePicker selected={workExperiences[index].startDate} onChange={(e) => updateWorkInfo('startDate', e, index, 3)} inline />
                )}
              </div>
              {!isChecked &&
              <div>
                <p className='font-bold text-lg text-gray-600'>End Date</p>
                <button className="border pl-2 border-black rounded-lg w-full mb-2 h-12 text-left" onClick={() => handleClickEndDate(index)}>
                  {workExperiences[index].endDate === null ? "Click to select a date" : format(workExperiences[index].endDate, "MMM, yyyy")}
                </button>
                {datePickerEnd[index] && (
                  <DatePicker selected={workExperiences[index].endDate} onChange={(e) => updateWorkInfo('endDate', e, index, 4)} inline />
                )}
              </div>}
            </div>
            <div className='grid grid-cols-2 gap-4 mb-5'>
              <div>
                <p className='font-bold text-lg text-gray-600'>Country</p>
                <Select 
                  options={locations}
                  value={locations.find((item) => item.value === workExperiences[index].city)}
                  onChange={(selectedOption, action) => updateWorkInfo('city', selectedOption.value, index, 5)}
                  placeholder="Select a location"
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      // Add additional styles here
                      borderColor: 'black',
                      borderRadius: '8px'
                    }),
                  }}
                  />
              </div>
              <div></div>
            </div>
            <div>
              <p className='font-bold text-lg text-gray-600'>Description</p>
              <textarea
                className='border-2 border-black rounded-lg w-full h-56 p-2'
                name='description'
                value={workExperiences[index].description}
                onChange={(e) => updateWorkInfo('description', e.target.value, index, 6)}
                placeholder='Description'
              ></textarea>
    </div>
  </>
          ))) : 'Add work experience'}
        </div>

  const education = 
                <div className='paper inline mx-auto p-3'>
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-2xl dark:text-white">Education Background</h3>
          </div>
            {educations.length > 0 ? (
    educations.map((item, index) => (
      <>
            <hr className='my-4 border-t-4 border-gray-900'/>
          <div className='grid grid-cols-2 gap-4 mb-5'>
            <div>
              <p className='font-bold text-lg text-gray-600'>School</p>
              <input
                className='border-2 border-black rounded-lg p-2 w-full'
                name='school'
                value={educations[index].school}
                onChange={(e) => updateEducationInfo('school', e.target.value, index, 1)}
                placeholder='School'
              />
            </div>
            <div>
              <p className='font-bold text-lg text-gray-600'>Degree</p>
              <input
                className='border-2 border-black rounded-lg p-2 w-full'
                name='degree'
                value={educations[index].degree}
                onChange={(e) => updateEducationInfo('degree', e.target.value, index, 2)}
                placeholder='Degree'
              />
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4 mb-5'>
            <div>
              <p className='font-bold text-lg text-gray-600'>Start Date</p>
              {/* <input
                className='border-2 border-black rounded-lg p-2 w-full'
                name='startDate'
                value={educations[index].startDate}
                onChange={(e) => updateEducationInfo('startDate', e.target.value, index)}
                placeholder='Start Date'
              /> */}
              <button className="border pl-2 border-black rounded-lg w-full mb-2 h-12 text-left" onClick={() => handleClickW(index)}>
                  {educations[index].startDate === null ? "Click to select a date" : format(educations[index].startDate, 'MMM, yyyy')}
                </button>
                {datePickerOpenW[index] && (
                  <DatePicker selected={educations[index].startDate} onChange={(e) => updateEducationInfo('startDate', e, index, 3)} inline />
                )}
            </div>
            <div>
              <p>End Date (or expected date)</p>
              {/* <input
                className='border-2 border-black rounded-lg p-2 w-full'
                name='endDate'
                value={educations[index].endDate}
                onChange={(e) => updateEducationInfo('endDate', e.target.value, index)}
                placeholder='End Date'
              /> */}
                <button className="border pl-2 border-black rounded-lg w-full mb-2 h-12 text-left" onClick={() => handleClickEndDateW(index)}>
                  {educations[index].endDate === null ? "Click to select a date" : format(educations[index].endDate, "MMM, yyyy")}
                </button>
                {datePickerEndW[index] && (
                  <DatePicker selected={educations[index].endDate} onChange={(e) => updateEducationInfo('endDate', e, index, 4)} inline />
                )}
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4 mb-5'>
            <div>
              <p className='font-bold text-lg text-gray-600'>Country</p>
              <Select 
                  options={locations}
                  value={locations.find((item) => item.value === educations[index].city)}
                  onChange={(selectedOption, action) => updateEducationInfo('city', selectedOption.value, index, 5)}
                  placeholder="Select a location"
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      // Add additional styles here
                      borderColor: 'black',
                      borderRadius: '8px'
                    }),
                  }}
                  />
            </div>
            <div></div>
          </div>
          </>
          ))) : 'Add education background'}
        </div>

  const websites =
        <div className='paper inline mx-auto p-3'>
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-2xl dark:text-white">Websites & Social Links</h3>
          </div>
            {links.length > 0 ? (
    links.map((item, index) => (
      <>
          <hr className='my-4 border-t-4 border-gray-900'/>
          <div className='grid grid-cols-2 gap-4 mb-5'>
            <div>
              <p className='font-bold text-lg text-gray-600'>Label</p>
              <input
                className='border-2 border-black rounded-lg p-2 w-full'
                name='label'
                value={links[index].label}
                onChange={(e) => updateLinksInfo('label', e.target.value, index)}
                placeholder='Label'
              />
            </div>
            <div>
              <p className='font-bold text-lg text-gray-600'>Link</p>
              <input
                className='border-2 border-black rounded-lg p-2 w-full'
                name='link'
                value={links[index].link}
                onChange={(e) => updateLinksInfo('link', e.target.value, index)}
                placeholder='Link'
              />
            </div>
          </div>
          </>
          ))) : 'Add social profile links'}
        </div>

  const skillsComponent =
        <div className='paper inline mx-auto p-3'>
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-2xl dark:text-white">Skills</h3>
          </div>
            {/* {skills.length > 0 ? (
    skills.map((item, index) => ( */}
      <>
          <hr className='my-4 border-t-4 border-gray-900'/>
          <div>
            <p className='font-bold text-lg text-gray-600'>Skill</p>
            <input
              className='border-2 border-black rounded-lg p-2 w-full'
              name='skillsInfo'
              // value={skills[index].title}
              value={skillValue}
              onKeyDown={handleKeyPress}
              onChange={handleSkillChange}
              placeholder='skill'
            />
          </div>
          </>
          <div className='flex'>
            {skills.map((item, index) => <>
            <div className='my-4 border pl-2 border-black rounded-md mr-2'>{skills[index]}
              <button className='px-2 h-8 ml-4 hover:border hover:rounded-full hover:border-black' onClick={() => deleteSkill(index)}>X</button>
            </div>
          </>)}
          </div>
        </div>

  const stepComponents = [
    personal,
    websites,
    experience,
    education,
    skillsComponent
  ];
        
  return (
    <div className='grid grid-cols-2 gap-4 mb-4'>
      <div className='rounded border border-gray-200 pl-5 pr-5 h-fit dark:bg-gray-800'>
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-4xl py-5 dark:text-white">Google Resume</h2>
            <button className="flex text-white bg-gray-900 items-center space-x-2 border rounded-md px-5 py-2" onClick={() => copyResumeData()}>
              <span>Copy</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5h6a2 2 0 012 2v12a2 2 0 01-2 2H9a2 2 0 01-2-2V7a2 2 0 012-2z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 3h6a2 2 0 012 2v12a2 2 0 01-2 2h-6a2 2 0 01-2-2V5a2 2 0 012-2z"
                  />
                </svg>
              </span>
            </button>
          </div>
        {stepComponents[currentStep - 1]}
        <div className="flex justify-between pb-20">
            <div className="flex justify-start">
              <button className="bg-indigo-500 px-5 py-2 border rounded text-white dark:text-white" onClick={() => saveState(currentStep)}>Save</button>
            </div>
            {currentStep === 1 || currentStep === 5 ? null:
            <div className='flex justify-end'>
            <div>
              <button  onClick={() => addItem(currentStep)}  className={`flex bg-gray-900 text-white items-center space-x-2 border rounded-md px-5 py-2`}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
                <span>Add</span>
              </button>
            </div>
            <div className='flex justify-end'>
              <button onClick={() => removeItem(currentStep)}  className={`flex bg-red-900 text-white items-center space-x-2 border rounded-md px-5 py-2`}>
                <span>Remove</span>
              </button>
            </div>
            </div>}
          </div>
          <div className="fixed bottom-0 ml-[-150px] bg-white pt-6 border-t flex justify-center w-full pb-6">
            <div className='flex justify-end'>
              <button  onClick={handleBack} disabled={currentStep === 1}    className={`flex ${
    currentStep === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-900'
  } text-white items-center space-x-2 border rounded-md px-5 py-2`}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </span>
                <span>Back</span>
              </button>
              <div className="relative flex items-center h-4 mx-10 mt-4 w-96">
                <div className="absolute inset-0 h-full bg-gray-300 rounded-full">
                  <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${(currentStep - 1) * 25}%` }}></div>
                </div>
              </div>
              <button onClick={handleNext} disabled={currentStep === 5}  className={`flex ${
    currentStep === 5 ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-500'
  } text-white items-center space-x-2 border rounded-md px-5 py-2`}>
                <span>Next</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
      </div>
      <div className='flex items-center justify-center rounded border border-gray-200 h-fit dark:bg-gray-800'>
        <Resume
          personal={resumeState.personalState}
          work={resumeState.workExperiences}
          education={resumeState.educations}
          links={resumeState.links}
          skills={resumeState.skills}
        />
      </div>
    </div>
  )
}
