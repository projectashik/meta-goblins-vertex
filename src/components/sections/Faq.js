import { faqData } from "@/data/faq"
import { Accordion, Paper } from "@mantine/core"

const Faq = () => {
  return (
    <section className='py-10 bg-gray-50'>
      <div className='container'>
        <h2 className='text-center text-4xl font-bold'>Global Waste Facts</h2>

        <div className='max-w-4xl mx-auto px-4 mt-4'>
          <Paper withBorder>
            <Accordion>
              {faqData.map((data, index) => (
                <Accordion.Item value={`faq-${index}`}>
                  <Accordion.Control className='!font-bold'>
                    {data.question}
                  </Accordion.Control>
                  <Accordion.Panel>{data.answer}</Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
          </Paper>
        </div>
      </div>
    </section>
  )
}
export default Faq
