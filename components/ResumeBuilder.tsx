"use client";

import { formConfig } from "@/config/formConfig";
import React, { useState } from "react";
import DynamicForm from "./DynamicForm";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { ButtonColorful } from "./ui/button-colorful";

const ResumeBuilder = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [formData, setFormData] = useState<Record<string, unknown>>({});

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateFormData = (sectionId: string, data: any) => {
    setFormData((prev) => ({
      ...prev,
      [sectionId]: { ...(prev[sectionId] || {}), ...data },
    }));
  };

  const handleSaveAndNext = () => {
    if (currentSectionIndex < formConfig.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
    }
  };

  const currentSection = formConfig[currentSectionIndex];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Resume Builder</CardTitle>
          <CardDescription>{currentSection.title}</CardDescription>
        </CardHeader>
        <CardContent>
          <DynamicForm
            section={currentSection}
            updateFormData={updateFormData}
            formData={formData[currentSection.id] || {}}
          />
        </CardContent>
        <CardFooter>
          <div className="flex justify-between flex-1 gap-2">
            {currentSectionIndex > 0 ? (
              <Button
                className="flex-1"
                onClick={handlePrevious}
                disabled={currentSectionIndex === 0}
                variant="outline"
              >
                Previous
              </Button>
            ) : null}
            <ButtonColorful
              className="flex-1"
              onClick={handleSaveAndNext}
              label={currentSectionIndex === formConfig.length - 1 ? "Finish" : "Save and Next"}
            />
          </div>
        </CardFooter>
      </Card>
      <Card className="bg-card text-card-foreground">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Resume Preview</h2>
          <pre className="whitespace-pre-wrap">{JSON.stringify(formData, null, 2)}</pre>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResumeBuilder;
