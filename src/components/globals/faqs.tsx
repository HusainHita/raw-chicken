import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'

export default function Faqs() {
    return (
        <div className=''>
            <h1 className=' mt-8 bg-cli  text-center font-bold text-black font-serif'>FAQ</h1>
            <h1 className=' text-center mx-4 md:mx-0 font-bold mt-2'>You have Questions, We have Answers</h1>
            <div className='mt-4 space-y-4'>
                <Accordion type="single" collapsible className=' '>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>1. What kind of chicken dishes do you serve?</AccordionTrigger>
                        <AccordionContent>
                            We offer a variety of chicken dishes including grilled chicken, fried chicken, chicken sandwiches, chicken salads, and more.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible className='md:w-[900px] '>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>2. Are your chicken dishes fresh?</AccordionTrigger>
                        <AccordionContent>
                            Yes, all our chicken dishes are made with fresh, quality ingredients sourced locally whenever possible.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion> <Accordion type="single" collapsible className='md:w-[900px] '>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>3. Do you have options for vegetarians or vegans?</AccordionTrigger>
                        <AccordionContent>
                            While our focus is on chicken dishes, we do offer vegetarian and vegan options such as salads, wraps, and sides.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className='md:w-[900px] '>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>4. Can I order online or do you offer delivery?</AccordionTrigger>
                        <AccordionContent>
                            Yes, you can place orders online through our website or app. We also offer delivery services through various platforms.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className='md:w-[900px] '>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>5. Do you have gluten-free options?</AccordionTrigger>
                        <AccordionContent>
                            Yes, we have gluten-free options available. Please ask our staff for more information or check our menu for specific items.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className='md:w-[900px] '>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>6. What are your opening hours?</AccordionTrigger>
                        <AccordionContent>
                            Our opening hours may vary by location, but typically we are open between 9AM to 11PM.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className='md:w-[900px] '>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>7. Is there parking available nearby?</AccordionTrigger>
                        <AccordionContent>
                            We have designated parking areas for customers at each of our locations. Please check with your specific location for details.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className='md:w-[900px] '>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>8. Do you cater for events?</AccordionTrigger>
                        <AccordionContent>
                            Yes, we offer catering services for events of all sizes. Please contact us directly to discuss your catering needs.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className='md:w-[900px] '>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>9. Are reservations required?</AccordionTrigger>
                        <AccordionContent>
                            Reservations are not typically required, but we recommend calling ahead for large groups to ensure we can accommodate you.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className='md:w-[900px] '>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>10. What safety measures do you have in place?</AccordionTrigger>
                        <AccordionContent>
                            We adhere to strict hygiene and safety protocols to ensure a clean and safe dining environment for our customers and staff.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}