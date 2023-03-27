import { Fragment } from 'react'
import { Navigate } from 'react-router-dom';

const App = () => {

  // eslint-disable-next-line no-constant-condition
  if (!true) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <Fragment>
      <main>
        <div className='bg-white'>
          <div>
            <main className='mx-auto sm:px-6 lg:px-8'>
              <div className='flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6'>
                <h1 className='text-4xl font-bold tracking-tight text-gray-900'>
                  Landing Page
                </h1>
<div>
Hero Section:
Headline that clearly communicates the purpose of the landing page (e.g. "Find Your Dream Job with Our AI-Powered Solutions")
Subheadline that further describes the benefits of using your platform or services (e.g. "Streamline Your Job Search, Create a Winning Resume, and Ace Your Interviews with Our Help")
A visually engaging image or video that captures the visitor's attention
</div>
<div>
Features/Benefits Section:

A list of the key features or benefits of using your platform or services (e.g. "AI-Driven Resume Optimization," "Interview Preparation and Coaching," "Job Alerts and Custom Recommendations")
Use icons or images to visually represent the features or benefits.
</div>
<div>
How It Works Section:

Step-by-step guide on how your platform or services work (e.g. "1. Sign up for an account. 2. Upload your resume. 3. Get customized job recommendations and application tips. 4. Prepare for interviews with our AI-powered tools.")
Use visual aids, such as screenshots or videos, to illustrate the process.
</div>
<div>
Testimonials Section:

Quotes or video testimonials from satisfied clients or job seekers who have used your platform or services.
Use images or icons to visually represent the individuals or companies providing the testimonials.

</div>
<div>
Call-to-Action Section:

A prominent CTA button that encourages visitors to take the next step (e.g. "Get Started Now!" or "Apply for Your Dream Job Today!")
Use a contrasting color for the CTA button to make it stand out.
</div>
<p>
Footer Section:

Additional navigation links to important pages of your website (e.g. About Us, Contact Us, FAQs)
Social media icons that allow visitors to connect with you on different platforms (e.g. LinkedIn, Twitter)
Copyright information and legal disclaimers.

                </p>
              </div>
            </main>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default App

