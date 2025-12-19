"use client";

import { useMemo } from "react";
import { usePhoneCodes } from "../hooks/usePhoneCode";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

type Props = {
  value?: string;
  onChange?: (value: string) => void;
};

const PhoneInputField = ({ value, onChange }: Props) => {
  const { data, isLoading } = usePhoneCodes();

  const phoneCodes = data?.[0];

  const onlyCountries = useMemo(() => {
    if (!phoneCodes) return [];
    return phoneCodes.all.map((item) => Object.values(item)[0].toLowerCase());
  }, [phoneCodes]);

  const defaultCountry = useMemo(() => {
    return phoneCodes?.priority[0]?.toLowerCase() ?? "ge";
  }, [phoneCodes]);

  const preferredCountries = useMemo(() => {
    return phoneCodes ? phoneCodes.priority.map((c) => c.toLowerCase()) : [];
  }, [phoneCodes]);

  if (isLoading) return <p>Loading ...</p>;

  return (
    <div>
      <PhoneInput
        value={value}
        onChange={onChange}
        country={defaultCountry}
        onlyCountries={onlyCountries}
        preferredCountries={preferredCountries}
        enableSearch
        disableSearchIcon
        countryCodeEditable={false}
        inputClass="!w-full"
      />
    </div>
  );
};

export default PhoneInputField;
