"use client";

import { Question, Section } from "@/config/formConfig";
import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

interface DynamicFormProps {
  section: Section;
  updateFormData: (sectionId: string, data: any) => void;
  formData: Record<string, any>;
}

const DynamicForm = ({ formData, updateFormData, section }: DynamicFormProps) => {
  const [localFormData, setLocalFormData] = useState<Record<string, any>>(formData);

  useEffect(() => {
    setLocalFormData(formData);
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updatedData = { ...localFormData, [name]: value };
    setLocalFormData(updatedData);
    updateFormData(section.id, updatedData);
  };

  const renderInput = (question: Question) => {
    const commonProps = {
      id: question.id,
      name: question.id,
      value: localFormData[question.id] || "",
      onChange: handleChange,
      required: question.required,
      placeholder: question.placeholder,
      className: "w-full bg-input text-foreground",
    };

    switch (question.type) {
      case "textarea":
        return <Textarea {...commonProps} />;
      case "number":
      case "email":
      case "text":
      case "url":
      case "tel":
        return <Input type={question.type} {...commonProps} />;
      default:
        return <Input type="text" {...commonProps} />;
    }
  };

  return (
    <div className="space-y-4">
      {section.questions.map((question) => (
        <div key={question.id} className="space-y-2">
          <Label htmlFor={question.id} className="text-foreground">
            {question.text}
          </Label>
          {renderInput(question)}
        </div>
      ))}
    </div>
  );
};

export default DynamicForm;
