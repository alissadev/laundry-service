import { CheckCircle, Shield, Leaf, Star } from 'lucide-react';


export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-sky-200 via-white-100 to-sky-200 dark:from-indigo-950 dark:via-slate-800 dark:to-indigo-950 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 cards">
        <div className="text-center mb-8 mt-6">
          <h2 className="text-4xl font-bold mb-4 font-body uppercase text-purple-700 dark:text-amber-300 hover:text-purple-500 dark:hover:text-indigo-300 ">
            About
          </h2>
          <p className="text-xl text-slate-800 dark:text-stone-100 max-w-2xl mx-auto font-custom mt-6">
            <strong className='text-purple-700 dark:text-amber-300 hover:text-purple-500 dark:hover:text-indigo-300 uppercase mr-1'>Military Mama </strong> is not like any other laundry service. Every order is treated with professionalism, care, and, most importantly, a touch of love. Military Mama knows that there is no better feeling than a mother's touch, so she adds it to each and every order.
          </p>
        </div>

  
        <div className="rounded-3xl shadow-2xl bg-sky-50 dark:bg-violet-950 bg-opacity-65 p-3" id='foldedClothes'>
          <div className="grid md:grid-cols-2 gap-0 overflow-hidden">
            <div className="pt-10">
              <h3 className="text-3xl font-bold font-custom text-purple-700 dark:text-amber-300  mb-6 ms-7">
                The Perfect Fold, Every Time
              </h3>
              <p className="dark:text-stone-100 font-normal font-body leading-relaxed mb-6 ms-7 text-sm">
                Our team takes pride in delivering perfectly folded clothes that look like they came straight from a boutique. We use specialized folding techniques that minimize wrinkles and maximize freshness.
              </p>
              <ul className="space-y-3 font-custom ms-7">
                <li className="flex text-stone-950 dark:text-stone-100 font-custom font-bold">
                  <CheckCircle className="w-5 h-5 text-green-700 dark:text-green-500 mr-3 flex-shrink-0 text-right font-bold" />
                  <span>Professional folding standards</span>
                </li>
                <li className="flex text-stone-950 dark:text-stone-100 font-custom font-bold">
                  <CheckCircle className="w-5 h-5 text-green-700 dark:text-green-500 mr-3 flex-shrink-0 font-bold" />
                  <span> Wrinkle-free presentation</span>
                </li>
                <li className="flex text-stone-950 dark:text-stone-100 font-custom font-bold">
                  <CheckCircle className="w-5 h-5 text-green-700 dark:text-green-500 mr-3 flex-shrink-0 font-bold" />
                  <span> Organized by type and preference</span>
                </li>
              </ul>
            </div>
            <div className="h-full min-h-[400px]">
              <img
                src="folded-clothes.png"
                alt="Perfectly folded clothes"
                className="w-full h-full object-cover feature-img rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
