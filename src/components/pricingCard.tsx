export function PricingCard({price}) {
    // const iconsImages = Object.values(icons)
    // let i = 0
    return (
      <div>
        <div className="flex min-h-[428px] w-[320px] flex-col rounded border-4">
          <h2 className="mt-8 ml-7 text-xs text-black font-normal">{price.package}</h2>
          <div className="mb-4 ml-7 flex justify-between mr-7 items-end font-black">
            <div className="font-normal text-3xl text-black">${price.fee}</div>
          </div>
          <hr className="border border-[#2a2b2b]"/>
          <ul className="mb-7 min-h-[70px] ml-7 mr-7 flex flex-col gap-y-2 text-black">
            {price.list.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <button
            className={'rounded-full bg-indigo-500 mb-7 ml-7 mr-7 h-10 text-lg font-medium text-white hover:bg-white'}
            >
            Subscribe
          </button>
        </div>
      </div>
    );
  }