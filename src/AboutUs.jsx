export default function AboutUs(){
    return (
        <section class="py-17 relative">
        <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            
            <div class="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                
                <div
                    class="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                    <div class="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                        <img class=" rounded-xl object-cover" src="https://pagedone.io/asset/uploads/1717741205.png" alt="about Us image" />
                    </div>
                    <img class="sm:ml-0 ml-auto rounded-xl object-cover" src="https://pagedone.io/asset/uploads/1717741215.png"
                        alt="about Us image" />
                </div>
                <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                    <div class="w-full flex-col justify-center items-start gap-8 flex">
                        <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                            <h2
                                class="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                Empowering Each Other to Succeed</h2>
                            <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                Every project we've undertaken has been a collaborative effort, where every person
                                involved has left their mark. Together, we've not only constructed buildings but also
                                built enduring connections that define our success story.</p>
                        </div>
                        <div class="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                     
              <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt class="text-base leading-7 text-white-600">
                    Transactions every 24 hours
                  </dt>
                  <dd class="order-first text-3xl font-semibold tracking-tight text-white-900 sm:text-5xl">
                    <span class="animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-transactions)] before:content-[counter(num)]">
                      {" "}
                      <span class="sr-only">44</span>million{" "}
                    </span>
                  </dd>
                </div>
                <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt class="text-base leading-7 text-white-600">
                    Assets under holding
                  </dt>
                  <dd class="order-first text-3xl font-semibold tracking-tight text-white-900 sm:text-5xl">
                    $
                    <span class="animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-assets)] before:content-[counter(num)]">
                      {" "}
                      <span class="sr-only">119</span> trillion{" "}
                    </span>
                  </dd>
                </div>
                <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt class="text-base leading-7 text-white-600">
                    New users annually
                  </dt>
                  <dd class="order-first text-3xl font-semibold tracking-tight text-white-900 sm:text-5xl">
                    <span class="animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-users)] before:content-[counter(num)] before:left-[calc(0.4em * var(--n, 1))]">
                      <span class="sr-only">4600</span>
                    </span>
                  </dd>
                </div>
              </dl>
          </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
                                                                          
    );

}







// package.json

// {
//   "name": "reasl-estate-1",
//   "version": "0.1.0",
//   "private": true,
//   "dependencies": {
//     "@headlessui/react": "^2.1.9",
//     "@heroicons/react": "^2.1.5",
//     "@material-tailwind/react": "^2.1.10",
//     "@tailwindcss/forms": "^0.5.9",
//     "@testing-library/jest-dom": "^5.17.0",
//     "@testing-library/react": "^13.4.0",
//     "@testing-library/user-event": "^13.5.0",
//     "flowbite": "^2.5.2",
//     "lucide-react": "^0.447.0",
//     "react": "^18.3.1",
//     "react-dom": "^18.3.1",
//     "react-scripts": "5.0.1",
//     "tw-elements": "^2.0.0",
//     "tw-elements-react": "^1.0.0-alpha-end",
//     "web-vitals": "^2.1.4"
//   },
//   "scripts": {
//     "start": "react-scripts start",
//     "build": "react-scripts build",
//     "test": "react-scripts test",
//     "eject": "react-scripts eject"
//   },
//   "eslintConfig": {
//     "extends": [
//       "react-app",
//       "react-app/jest"
//     ]
//   },
//   "browserslist": {
//     "production": [
//       ">0.2%",
//       "not dead",
//       "not op_mini all"
//     ],
//     "development": [
//       "last 1 chrome version",
//       "last 1 firefox version",
//       "last 1 safari version"
//     ]
//   },
//   "devDependencies": {
//     "gh-pages": "^6.1.1",
//     "tailwindcss": "^3.4.13"
//   }
// }

