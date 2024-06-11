/* eslint-disable @next/next/no-img-element */
import ItemLayout from "./ItemLayout"

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
        <div className=" grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
          <ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
            <h2 className="font-bold text-left text-lg md:text-xl w-full capitalize">
              Architect of Innovation
            </h2>
            <p className="font-light text-xs sm:text-sm md:text-base">
            As a seasoned software engineer, my journey in web development is powered by a robust array of tools and languages, with JavaScript forming the backbone of my work. I expertly utilize frameworks such as React.js and Next.js to build seamless, high-performance websites that connect users across the digital landscape. Leveraging the modern JAMstack architecture, I create fast, secure, and dynamic experiences. My design skills ensure that every project is not only functional but also visually engaging. Join me as I continue to explore new technologies and methodologies to shape the future of web development.
            </p>
          </ItemLayout>
          <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
            <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            25+ <sub className="font-semibold text-base">clients</sub>
            </p>
          </ItemLayout>
          <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
            <p className="font-semibold w-full text-left            text-2xl sm:text-5xl">
            4+ <sub className="font-semibold text-base">years of experience</sub>
            </p>
          </ItemLayout>
          <ItemLayout className="col-span-full sm:col-span-6 md:col-span-4 !p-0">
            <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/top-langs/?username=devsolary&theme=transparent&hide_border=true&title_color=FEFE58&text_color=ffffff&icon_color=FEFE58&text-bold=false" alt="devsolary" loading="lazy" />
          </ItemLayout>
          <ItemLayout className="col-span-full md:col-span-8 !p-0">
            <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api?username=devsolary&theme=transparent&hide_border=true&title_color=FEFE58&text_color=ffffff&icon_color=FEFE58&text-bold=false" alt="devsolary" loading="lazy" />
          </ItemLayout>
          <ItemLayout className="col-span-full">
            <img className="w-full h-auto" src="https://skillicons.dev/icons?i=js,html,css,wasm,cpp,debian,django,docker,firebase,flask,git,github,linux,nextjs,nodejs,npm,postman,py,react,redux,regex,tailwind,threejs,ts,ubuntu,visualstudio,vite,vscode,windows,figma" alt="devsolary" loading="lazy" />
          </ItemLayout>
          <ItemLayout className="col-span-full md:col-span-6 !p-0">
          <img className="w-full h-auto" src="https://github-readme-streak-stats.herokuapp.com?user=devsolary&theme=dark&hide_border=true&type=png&background=EB545400&ring=EBD924&currStreakLabel=EBD924" alt="devsolary" loading="lazy" />
          </ItemLayout>
                    <ItemLayout className="col-span-full md:col-span-6 !p-0">
            <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/pin/?username=devsolary&repo=xsolarie&theme=transparent&hide_border=true&title_color=FEFE58&text_color=ffffff&icon_color=FEFE58&text-bold=false&description_lines_count=2" alt="devsolary" loading="lazy" />
          </ItemLayout>

          
        </div>
    </section>
  )
}

export default AboutDetails