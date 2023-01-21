import { perksData } from "@/data/perks"
import { Service } from "../../ui"

const Perks = () => {
  return (
    <section className='py-10 bg-gray-50'>
      <div className='container'>
        <h2 className='text-center text-4xl font-bold'>
          Perks of Distributors.
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
          {perksData.map((data, index) => (
            <Service {...data} key={`service-${index}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
export default Perks
