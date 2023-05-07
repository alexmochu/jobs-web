export function PricingCard({price}) {
    // const iconsImages = Object.values(icons)
    // let i = 0
    return (
      <div>
        <div className="flex min-h-[428px] w-[320px] flex-col rounded-2xl border-2 border-indigo-500">
          <h2 className="mt-8 ml-7 text-lg text-indigo-500 font-bold">{price.package}</h2>
          <div className="mb-4 ml-7 flex justify-between mr-7 items-end font-black">
            <div className="font-normal text-3xl text-black">${price.fee}/month</div>
          </div>
          <hr className="border border-[#2a2b2b]"/>
          <ul className="mb-7 min-h-[70px] ml-7 mr-7 flex flex-col gap-y-2 text-black pt-10">
            {price.list.map(item => (
              <li key={item}>
                <svg class="h-5 w-5 inline-block mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M15.707,6.293c0.391,0.391,0.391,1.023,0,1.414l-6,6c-0.391,0.391-1.023,0.391-1.414,0l-3-3c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0l2.293,2.293l5.293-5.293C14.684,5.902,15.316,5.902,15.707,6.293z"></path></svg>
                {item}</li>
            ))}
          </ul>
          <button
            className={'rounded-full bg-indigo-500 mb-7 ml-7 mr-7 h-10 text-lg font-medium text-white'}
            >
            Subscribe
          </button>
        </div>
      </div>
    );
  }