import React, { useState } from 'react';
import { SafientCore } from '@safient/core';
import Button from '../../components/ui/button';
import TextField from '../../components/ui/text-field';
import Dropdown from '../../components/ui/dropdown';
import FormField from '../../components/ui/form-field';

export default function BackupWithSafient() {
  const [beneficiary, setBeneficiary] = useState('');
  const [claimType, setCliamType] = useState('');
  console.log('benef', beneficiary);

  const safe = new SafientCore();
  console.log('safient core', safe);
  return (
    <div className="page-container">
      <div className="page-container__header">
        <div className="page-container__title">Backup with Safient..</div>
      </div>
      <div className="page-container__content">
        {/* <ActionableMessageStories
          type="warning"
          message="know mpore text"
          iconFillColor="var(--color-warning-default)"
          useIcon
          withRightButton
          className="networks-tab__add-network-form__alert"
        /> */}
        <div className="form">
          <FormField
            titleText="Beneficiary Email"
            placeholder="johndoe@domain.com"
            value={beneficiary}
            onChange={(value) => setBeneficiary(value)}
          />

          <label htmlFor="claimType" className="label">
            Select Claim Type
          </label>

          <Dropdown
            id="claimType"
            options={[
              {
                value: 'Signalling (You can send a signal when claimed',
              },
              {
                value: 'Arbitration (Arbitrators decide the claim)',
              },
              {
                value: 'DDay (Claim on Exact Date)',
              },
            ]}
            selectedOption="2222"
            title="Select Claim Type"
            wide
            className="claim-type"
          />

          <Button
            className=""
            onClick={function noRefCheck() {}}
            rounded
            type="primary"
          >
            Create
          </Button>
        </div>
      </div>
    </div>
  );
}
