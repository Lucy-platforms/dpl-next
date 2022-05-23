import Button from "@ui/Button";
import Heading from "@ui/Heading";
import Paragraph from "@ui/Paragraph";
import Section from "@ui/Section";
import TextareaField from "@ui/TextareaField";
import TextField from "@ui/TextField";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const fields = [
  {
    label: "FULL NAME",
    placeholder: "Ex: John Doe",
    name: "fullName",
    isTextArea: false,
  },
  {
    label: "EMAIL ADDRESS",
    placeholder: "email@email.com",
    name: "email",
    isTextArea: false,
  },
  {
    label: "PHONE NUMBER",
    placeholder: "+972520000000",
    name: "phoneNumber",
    isTextArea: false,
  },
  {
    label: "COMPANY NAME",
    placeholder: "Write company name",
    name: "companyName",
    isTextArea: false,
  },
  {
    label: "MESSAGE",
    placeholder: "Write a message",
    name: "message",
    isTextArea: true,
  },
] as const;

const validationSchema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  email: yup
    .string()
    .email("Please provide a valid email address")
    .required("Email is required"),
  message: yup.string().required("Contact message is required"),
  companyName: yup.string().required("Company name is required"),
  phoneNumber: yup.string().required("Phone number is required"),
});

const ContactUs = () => {
  const formik = useFormik({
    validationSchema,
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      companyName: "",
      message: "",
    },
    onSubmit: (data) => {},
  });

  return (
    <>
      <Heading type="Subhead 03" className="uppercase">
        Support
      </Heading>
      <Section className="xl:flex">
        <div className="mb-10 md:max-w-xl xl:w-[36rem]">
          <Heading type="Heading 02">We want to hear from you!</Heading>
          <form className="mt-8" onSubmit={formik.handleSubmit}>
            <div className="grid gap-y-4 md:grid-cols-2 md:gap-x-5">
              {fields.map((field) => {
                const Comp = field.isTextArea ? TextareaField : TextField;
                return (
                  <Comp
                    key={field.name}
                    name={field.name}
                    id={field.name}
                    value={formik.values[field.name]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder={field.placeholder}
                    containerClassName={
                      field?.isTextArea ? "md:col-span-2" : ""
                    }
                    className={field?.isTextArea ? "!h-40 w-full" : "w-full"}
                    fieldLabelProps={{
                      children: field.label,
                      className: "block mb-2",
                    }}
                    touched={formik.touched[field.name]}
                    error={formik.errors[field.name]}
                  />
                );
              })}
            </div>
            <Paragraph className="my-3 text-right">
              <b>{180 - formik.values.message.length}</b> characters left:
            </Paragraph>
            <Button type="submit" className="h-[56px] w-full">
              Send
            </Button>
          </form>
        </div>
        <div className="hidden md:mb-12 md:block xl:ml-44">
          <Heading type="Heading 02" className="mb-8">
            Other Support Channels
          </Heading>
          <Heading type="Subhead 03">Talk To Us Personally</Heading>
          <Paragraph className="mb-8">
            Looking for human help? call us at 073-3744690
          </Paragraph>
          <Heading type="Subhead 03">Send Us An Email </Heading>
          <Paragraph className="mb-8">
            Contact DPL™ team at: <a>info@thediamondpricelist.com </a>{" "}
          </Paragraph>
          <Heading type="Subhead 03">Chat With Us </Heading>
          <Paragraph className="mb-8">
            Chat with us by <a>clicking here. </a>{" "}
          </Paragraph>
        </div>
      </Section>
    </>
  );
};

export default ContactUs;