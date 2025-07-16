import React from "react";
import type { PersonalDetails } from "@/types/resume";
import { LabeledInput } from "@/components/LabeledInput";

interface PersonalDetailsSectionProps {
  personalDetails: PersonalDetails;
  onUpdate: (field: keyof PersonalDetails, value: string) => void;
}

export const PersonalDetailsSection: React.FC<PersonalDetailsSectionProps> = ({
  personalDetails,
  onUpdate,
}) => {
  return (
    <div className="space-y-4 px-4 pb-4 pt-2">
      <div className="grid grid-cols-2 gap-4">
        <LabeledInput
          id="jobTitle"
          label="Job Title"
          value={personalDetails.jobTitle}
          onChange={(val) => onUpdate("jobTitle", val)}
          placeholder="Your desired job title"
        />
        <LabeledInput
          id="profilePic"
          type="file"
          label="Job Title"
          value={personalDetails.profilePic}
          onChange={(val) => onUpdate("profilePic", val)}
          placeholder="Your desired job title"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <LabeledInput
          id="firstName"
          label="First Name"
          value={personalDetails.firstName}
          onChange={(val) => onUpdate("firstName", val)}
          placeholder="Enter first name"
        />
        <LabeledInput
          id="lastName"
          label="Last Name"
          value={personalDetails.lastName}
          onChange={(val) => onUpdate("lastName", val)}
          placeholder="Enter last name"
        />
      </div>

      <LabeledInput
        id="jobTitle"
        label="Job Title"
        value={personalDetails.jobTitle}
        onChange={(val) => onUpdate("jobTitle", val)}
        placeholder="e.g. Software Engineer"
      />

      <div className="grid grid-cols-2 gap-4">
        <LabeledInput
          id="email"
          label="Email"
          type="email"
          value={personalDetails.email}
          onChange={(val) => onUpdate("email", val)}
          placeholder="your.email@example.com"
        />
        <LabeledInput
          id="phone"
          label="Phone"
          type="tel"
          value={personalDetails.phone}
          onChange={(val) => onUpdate("phone", val)}
          placeholder="+1 (555) 123-4567"
        />
      </div>

      <LabeledInput
        id="address"
        label="Address"
        value={personalDetails.address}
        onChange={(val) => onUpdate("address", val)}
        placeholder="Street address"
      />

      <div className="grid grid-cols-3 gap-4">
        <LabeledInput
          id="city"
          label="City"
          value={personalDetails.city}
          onChange={(val) => onUpdate("city", val)}
          placeholder="City"
        />
        <LabeledInput
          id="country"
          label="Country"
          value={personalDetails.country}
          onChange={(val) => onUpdate("country", val)}
          placeholder="Country"
        />
        <LabeledInput
          id="postalCode"
          label="Postal Code"
          value={personalDetails.postalCode}
          onChange={(val) => onUpdate("postalCode", val)}
          placeholder="ZIP/Postal"
        />
      </div>
    </div>
  );
};
