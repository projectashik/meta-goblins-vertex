import { Accordion, Paper } from "@mantine/core"

const Faq = () => {
  return (
    <section className='py-10 bg-gray-50'>
      <div className='container'>
        <h2 className='text-center text-4xl font-bold'>Global Waste Facts</h2>

        <div className='max-w-4xl mx-auto px-4 mt-4'>
          <Paper withBorder>
            <Accordion>
              <Accordion.Item value='customization'>
                <Accordion.Control className='!font-bold'>
                  Customization
                </Accordion.Control>
                <Accordion.Panel>
                  Colors, fonts, shadows and many other parts are customizable
                  to fit your design needs
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value='flexibility'>
                <Accordion.Control>Flexibility</Accordion.Control>
                <Accordion.Panel>
                  Configure components appearance and behavior with vast amount
                  of settings or overwrite any part of component styles
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value='focus-ring'>
                <Accordion.Control>No annoying focus ring</Accordion.Control>
                <Accordion.Panel>
                  With new :focus-visible pseudo-class focus ring appears only
                  when user navigates with keyboard
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Paper>
        </div>
      </div>
    </section>
  )
}
export default Faq
