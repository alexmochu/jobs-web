export const sortOptions = [
  { name: 'Newest', href: '#', current: false },
  { name: 'Oldest', href: '#', current: false },
]

export const navigation = [
  { name: 'Jobs', href: '/jobs', current: false },
  // { name: 'Employers', href: 'employers', current: false },
  { name: 'Pricing', href: 'pricing', current: false },
  { name: 'FAQs', href: 'faqs', current: false },
]

export const filters = [
  {
    id: 'boards',
    name: 'Job Boards',
    options: [
      { value: 'site:lever.co', label: 'Lever', checked: true },
      { value: 'site:greenhouse.io', label: 'Greenhouse', checked: true },
      { value: 'site:app.dover.io', label: 'Dover', checked: true },
      { value: 'site:jobs.ashbyhq.com', label: 'Ashbyhq', checked: true },
      { value: 'site:personio.de', label: 'Personio', checked: true },
    ],
  },
  {
    id: 'role',
    name: 'Role',
    options: [
      { value: 'engineer', label: 'Engineer', checked: false },
      { value: 'developer', label: 'Developer', checked: false },
    ],
  },
  {
    id: 'speciality',
    name: 'Speciality',
    options: [
      { value: 'react', label: 'React', checked: false },
      { value: 'python', label: 'Python', checked: false },
      { value: 'vue', label: 'Vue', checked: false },
      { value: 'javascript', label: 'Javascript', checked: false },
      { value: 'angular', label: 'Angular', checked: false },
      { value: 'go', label: 'Go', checked: true },
    ],
  },
  {
    id: 'filter',
    name: 'Filter Out',
    options: [
      { value: 'senior', label: 'Senior', checked: false },
      { value: 'junior', label: 'Junior', checked: false },
      { value: 'staff', label: 'Staff', checked: false },
      { value: 'principal', label: 'Principal', checked: false },
      { value: 'lead', label: 'Lead', checked: false },
    ],
  },
]

export const plans = [
  {
    name: 'Startup',
    ram: '12GB',
    cpus: '6 CPUs',
    disk: '160 GB SSD disk',
  },
  {
    name: 'Business',
    ram: '16GB',
    cpus: '8 CPUs',
    disk: '512 GB SSD disk',
  },
  {
    name: 'Enterprise',
    ram: '32GB',
    cpus: '12 CPUs',
    disk: '1024 GB SSD disk',
  },
  {
    name: 'Startup',
    ram: '12GB',
    cpus: '6 CPUs',
    disk: '160 GB SSD disk',
  },
  {
    name: 'Business',
    ram: '16GB',
    cpus: '8 CPUs',
    disk: '512 GB SSD disk',
  },
  {
    name: 'Enterprise',
    ram: '32GB',
    cpus: '12 CPUs',
    disk: '1024 GB SSD disk',
  },
]

export const pricing = [
  {
    id: 1,
    package: 'Free',
    fee: 0,
    list: ['Job Search Engine','Job Tracker','AI powered Resume Builder','AI powered Cover Letter Builder','AI powered Job application question and answer'],
    yearFee: 0
  },
  {
    id: 2,
    package: 'Standard',
    fee: 24,
    list: ['Job Search Engine','Job Tracker','AI powered Resume Builder','AI powered Cover Letter Builder','AI powered Job application question and answer'],
    yearFee: 240
  },
  {
    id: 3,
    package: 'Pro',
    fee: 48,
    list: ['Job Search Engine','Job Tracker','AI powered Resume Builder','AI powered Cover Letter Builder','AI powered Job application question and answer'],
    yearFee: 480
  }
]