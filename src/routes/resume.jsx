import Resume from '../resume/resume'

export default function Profile() {
  return (
      <div className="grid grid-cols-2 gap-4 mb-4">
         <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
         </div>
         <div className="flex items-center justify-center rounded bg-gray-50 h-fit dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            <Resume />
         </div>
      </div>
  );
}