import { Accordion, CtaForm } from "../components";
import faqs from "../fixtures/faqs.json";
import { useState } from "react";
import { MdClose, MdAdd } from "react-icons/md";

export function AccordionContainer() {
  const [activeItem, setActiveItem] = useState(undefined);
  const clickHandler = (itemID) => {
    setActiveItem((activeItem) => (activeItem === itemID ? undefined : itemID));
  };

  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.List>
        {faqs.map((item) => (
          <Accordion.ListItem key={item.id}>
            <Accordion.Question onClick={() => clickHandler(item.id)}>
              {item.header}
              {activeItem === item.id ? <MdClose /> : <MdAdd />}
            </Accordion.Question>
            <Accordion.Answer show={activeItem === item.id}>
              {item.body}
            </Accordion.Answer>
          </Accordion.ListItem>
        ))}
      </Accordion.List>

      <CtaForm>
        <CtaForm.Title>
          Ready to watch Netflix? Enter your email to create or restart your
          membership.
        </CtaForm.Title>
        <CtaForm.Form>
          <CtaForm.Input placeholder="Email address" />
          <CtaForm.Btn>Get started</CtaForm.Btn>
        </CtaForm.Form>
      </CtaForm>
    </Accordion>
  );
}
